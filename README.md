# Ebube Samuel, portfolio site

A fast static site (no framework, no dependencies) with a working contact form.
Pages: Home, About, Projects, one page per project (11), Contact, 404.

## Put it online with Vercel (about 5 minutes)

1. Create a GitHub repository and upload everything in this folder to it
   (or drag the folder into https://vercel.com/new).
2. In Vercel choose **Add New > Project**, import the repository.
   Framework Preset: **Other**. Leave Build Command empty. Leave Output Directory empty.
3. Turn on the contact form (it sends through your own Gmail):
   a. In your Google Account turn on 2-Step Verification, then open https://myaccount.google.com/apppasswords
      and create an App Password (name it "Portfolio"). Google shows 16 letters. Copy them.
   b. In Vercel open Project > Settings > Environment Variables and add:
      - `GMAIL_USER`          ebubechkwu.samuel.com@gmail.com
      - `GMAIL_APP_PASSWORD`  the 16 letters from step a (spaces are fine)
      - `CONTACT_TO`          optional, where messages are delivered (default: the same Gmail)
   c. Redeploy so the settings take effect.
   Keep the App Password private. It is a key to your mailbox. Never put it in the code or send it in chat.
   You can delete it any time from the same Google page.
4. Add your domain: Project > Settings > Domains > `ebubesamuel.online`.

Messages land in your inbox from your own address. Pressing Reply answers the visitor directly.
Without the two Gmail settings the form shows a friendly "email me directly" message instead of failing silently.

## Edit content

All text, projects, roles and FAQs live in `data.mjs`.
After editing run `node build.mjs` (Node 18 or newer) and commit the changed files.
The build refuses to finish if an em dash or en dash appears anywhere.

- **Your photo:** `assets/profile.jpg` is shown on the About page. To change it, replace that file (a square image works best).
- **Project images:** the covers in `assets/projects/` are illustrations made for this site, not screenshots of the real work. To use real images, replace a file with your own 1600 x 900 JPG using the same file name (for example `kredo.jpg`).
- **Share image:** `assets/projects/og-image.jpg` is what link previews show.

## Preview on your computer

    node build.mjs
    python3 -m http.server 4173

Open http://localhost:4173 (the contact form needs the Vercel function, so it only works once deployed).

## Worth a quick look

- Duty lines for Yinaga, Chapman, Treasure Life Family Church, Impact Orphans Project and Cresol were drafted from the role titles. Edit them to match what you actually did.
- Cresol shows "Past role" and Elijah Adegun shows "Website project" because no dates were given.
