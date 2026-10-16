// Vercel serverless function: POST /api/contact
// Sends the contact form to your inbox through your own Gmail account (SMTP), with no packages.
//
// Set these in Vercel > Project > Settings > Environment Variables, then redeploy:
//   GMAIL_USER          the Gmail address that sends the mail, e.g. ebubechkwu.samuel.com@gmail.com
//   GMAIL_APP_PASSWORD  a 16 character Google App Password (NOT your normal Gmail password).
//                       Create one at https://myaccount.google.com/apppasswords (2-Step Verification must be on).
//   CONTACT_TO          optional, where messages are delivered (default: GMAIL_USER)
//
// Messages arrive in your inbox "from" your own address, with the visitor's email as Reply-To,
// so pressing Reply answers the visitor directly.

const tls = require('node:tls');
const os = require('node:os');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (s) => String(s).replace(/[\r\n]+/g, ' ').trim(); // header-injection guard

// Minimal SMTP client over implicit TLS (smtp.gmail.com:465).
function smtpSend({ host, port, user, pass, from, to, replyTo, subject, text }) {
  return new Promise((resolve, reject) => {
    const sock = tls.connect({ host, port, servername: host });
    sock.setEncoding('utf8');
    sock.setTimeout(9000, () => done(new Error('smtp_timeout')));
    let buf = '';
    let step = 0;
    let finished = false;
    const done = (err) => {
      if (finished) return;
      finished = true;
      try { sock.destroy(); } catch { /* ignore */ }
      err ? reject(err) : resolve();
    };
    const send = (line) => sock.write(line + '\r\n');
    const b64 = (s) => Buffer.from(s, 'utf8').toString('base64');
    const wrap = (s) => s.replace(/(.{76})/g, '$1\r\n');

    const message = [
      `From: "Portfolio contact form" <${from}>`,
      `To: <${to}>`,
      `Reply-To: <${replyTo}>`,
      `Subject: =?UTF-8?B?${b64(subject)}?=`,
      `Date: ${new Date().toUTCString()}`,
      `Message-ID: <${Date.now()}.${Math.random().toString(36).slice(2)}@${os.hostname() || 'localhost'}>`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      'Content-Transfer-Encoding: base64',
      '',
      wrap(b64(text)),
    ].join('\r\n');

    const onReply = (code) => {
      const expect = [220, 250, 235, 250, 250, 354, 250, 221];
      if (code !== expect[step]) return done(new Error(`smtp_${code}`));
      step++;
      if (step === 1) send(`EHLO ${os.hostname() || 'localhost'}`);
      else if (step === 2) send('AUTH PLAIN ' + b64(`\0${user}\0${pass}`));
      else if (step === 3) send(`MAIL FROM:<${from}>`);
      else if (step === 4) send(`RCPT TO:<${to}>`);
      else if (step === 5) send('DATA');
      else if (step === 6) sock.write(message + '\r\n.\r\n');
      else if (step === 7) send('QUIT');
      else if (step === 8) done();
    };

    sock.on('data', (chunk) => {
      buf += chunk;
      // Handle one complete line at a time. Multi-line replies use "250-..." until a final "250 ...".
      let i;
      while ((i = buf.indexOf('\r\n')) !== -1) {
        const line = buf.slice(0, i);
        buf = buf.slice(i + 2);
        if (/^\d{3}( |$)/.test(line)) onReply(Number(line.slice(0, 3)));
      }
    });
    sock.on('error', done);
    sock.on('close', () => done(step >= 8 ? undefined : new Error('smtp_closed')));
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  // Honeypot: bots fill the hidden field. Pretend success and drop it.
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(String(body.name || '').slice(0, 120));
  const email = clean(String(body.email || '').slice(0, 160));
  const message = String(body.message || '').trim().slice(0, 4000);
  if (!name || !EMAIL_RE.test(email) || message.length < 5) {
    return res.status(400).json({ error: 'invalid_input' });
  }

  const user = process.env.GMAIL_USER;
  const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  if (!user || !pass) return res.status(503).json({ error: 'not_configured' });

  try {
    await smtpSend({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      user,
      pass,
      from: user,
      to: clean(process.env.CONTACT_TO || user),
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
    });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'send_failed' });
  }
};
