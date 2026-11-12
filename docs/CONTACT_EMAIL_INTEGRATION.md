# IvyBridge consultation form — live delivery integration

## Architecture
- Chinese and English contact forms submit JSON via POST to `/api/inquiry` (a Vercel Node.js Function, `api/inquiry.js`).
- The Function validates applicant information, disallows cross-origin browser submissions, checks a hidden anti-bot field and delivers **one** plain-text email through the Resend API. It never sends a client-side API key.
- Applicant consent checkbox is required on both versions and re-validated by the API.
- Delivery destination is fixed on the server: `ivybridgeadvisory@gmail.com`; applicant email is used as `reply_to`.
- Only after the email API returns a successful result with a message id does the browser navigate to `/inquiry-sent.html` or `/en/inquiry-sent.html`.
- Failure leaves the applicant's input on the page with a visible error. **A success response means the email provider accepted the request, not that a human has read the email or its Gmail delivery is guaranteed.**
- No applicant data is saved by this code in a database or browser storage. Provider and mailbox retention policies still apply.
- `custom-services.html` is a different form; it still prepares/downloads a request and is not part of this email workflow.

## Owner action required before this can send emails
1. Create a Resend account and add/verify a sending domain (e.g. `ivybridgeadvisory.org`). Follow Resend's DNS verification instructions; it does **not** require transferring the existing Gmail inbox or altering Google MX reception.
2. Generate a **sending-only** Resend API key. In the existing IvyBridge Vercel project, add these **server-side** environment variables for the environments you intend to test/deploy:
   - `RESEND_API_KEY` = the private Resend sending API key (secret).
   - `RESEND_FROM_EMAIL` = `IvyBridge <inquiries@ivybridgeadvisory.org>` (the email address must use a Resend-verified sending domain).
3. Redeploy the selected Git commit, then submit a **test inquiry** using a controlled email address. Confirm receipt in `ivybridgeadvisory@gmail.com`, verify reply-to, and verify redirect in the browser.
4. Confirm appropriate consent/privacy terms before accepting real student applications, and consider adding managed spam protection / rate limits and monitoring before advertising widely.

**Never commit API keys to GitHub or expose them in JavaScript.** The endpoint deliberately fails closed (503) until the key and from address are both configured.

## Validation / operations checklist
- Valid Chinese form -> inbox message -> Chinese thank-you page.
- Valid English form -> inbox message -> English thank-you page.
- Invalid required email or missing name -> validation error, no email.
- No API credentials -> error stays on form, no fake success.
- Provider error or network timeout -> error stays on form, no fake success.
- Repeated click while request pending -> disabled submit prevents duplicates; provider Idempotency-Key helps with retries.
- Verify both mobile and desktop routes and success-page links.
