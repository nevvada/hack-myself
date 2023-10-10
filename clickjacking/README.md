# Clickjacking Project

This project is a simple demonstration of clickjacking, a type of web attack where a user is tricked into clicking on a button or link that performs an unintended action. The project consists of a HTML page (`victim.html`) that contains a hidden iframe to a transparent HTML page (`attacker.html`) with a click event to redirect users to a malicious site (`virus.html`). When the user clicks anywhere on the `victim.html` page, they are actually clicking on `attacker.html`.

## Getting Started

To test the project, first run:

```bash
npm install
npm run start
```

## Usage

Running the command above should take you to `http://127.0.0.1:8080/victim.html`. Now try clicking anywhere on this deceptive page. You'll be redirected to the faux virus page.
