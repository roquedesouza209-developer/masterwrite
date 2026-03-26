# MasterWrite

MasterWrite is a lightweight web app MVP that helps learners improve grammar, punctuation, vocabulary, and academic writing confidence.

## What It Includes

- Unlimited writing analysis on the page
- Grammar and punctuation cleanup
- Writing modes for everyday, academic, email, and creative drafts
- Vocabulary upgrade suggestions based on the selected mode
- Essay analysis with writing metrics
- Academic-style scoring feedback
- Printable browser report that can be saved as PDF
- Local session history stored in the browser

## Run It

```bash
npm start
```

Then open `http://localhost:3000`.

## Development

```bash
npm run dev
```

This uses Node's built-in watch mode and does not require any external dependencies.

## Notes

- This first version uses client-side heuristic analysis rather than a full AI or NLP backend.
- The PDF feature opens a print-friendly report that users can save as PDF from the browser print dialog.
