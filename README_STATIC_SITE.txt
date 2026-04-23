# Static site conversion notes

This ZIP contains a plain HTML/CSS/JS version of the visible portfolio pages from the original Flask project.

Included pages:
- index.html
- contact.html
- digitals.html

How to use:
1. Upload these files directly to your web hosting root.
2. Make sure `index.html` stays in the root folder.
3. No build step is required.

What changed:
- Removed Flask/Jinja dependencies.
- Converted `url_for(...)` asset paths to plain relative paths.
- Kept the portfolio, contact, and digitals pages as editable static templates.
- Left the contact form as a simple `mailto:` placeholder for now.

When you're ready later, the contact form can be connected to:
- Flask backend
- Formspree
- Netlify Forms
- EmailJS

Edit points:
- Copy/text: open the HTML files.
- Colors/layout: edit `styles.css`.
- Images: replace files inside `assets/` and keep the same names, or update the HTML references.
