# Deployment setup

Repository: https://github.com/ecsonh/ivybridgeadvisory
Primary domain: www.ivybridgeadvisory.org

1. Upload this archive’s contents directly into the repository root, not inside an extra folder.
2. In Vercel import the GitHub repository. Framework: Other. Build Command: empty. Output Directory: public.
3. Add www.ivybridgeadvisory.org in Project Settings → Domains. Also add ivybridgeadvisory.org and redirect it to www.
4. In GoDaddy DNS use the exact A/CNAME/TXT values Vercel supplies for this project. Preserve MX and unrelated TXT records.
5. Confirm DNS and HTTPS and test every page and form state.

Future updates: pushes to the configured production branch deploy automatically when Vercel’s Git integration is active.

The existing form downloads a JSON file locally; it does not submit inquiries. Blog content has no CMS yet. Preview/noindex notices remain until business content and integrations are ready.

Account setup attempt: GitHub write failed with Resource not accessible by integration (403); Vercel default-team access failed with forbidden (403). No GitHub commit or Vercel project/deployment was created by that attempt.
