# Tobacia Apps — Product Requirements

Source of truth for all apps in the personal + public stores. Each app's status, scope, prompt design, and architecture path documented here so any future build session can pick up cleanly.

**Architecture paths:**
- **Path A** = Pure browser, no backend. User's API key in localStorage, calls Anthropic directly via `anthropic-dangerous-direct-browser-access`. Frontend on GitHub Pages. $0.
- **Path B** = Cloudflare Worker proxy or Thelio FastAPI. Used only when OAuth, transcript fetching, or local-network access is required.

**Shared library:** `/apps/api-client.js` — handles key prompt, localStorage, fetch wrapper, copy-to-clipboard.

---

## Personal Store · `/me.html` (unlisted)

### ✅ LIVE (3)

**1. Brag-Doc Logger** — `/apps/brag-doc.html` · Path A · LIVE
Voice-to-text or typed win description → STAR-tagged markdown entry ready to paste into `Obsidian Vault/Andres/Career/brag-doc.md`. Optional context tag (BO/AF/personal/tobacia) and date. Uses Sonnet 4.6 with brag-doc system prompt that knows Andres's role + Competency Index tags.

**2. Resume Tailor** — `/apps/resume-tailor.html` · Path A · LIVE
JD paste → 3 artifacts: tailored R3 resume, cover letter, LinkedIn DM. Tone selector (confident-direct / founder-first / big-co-formal) and emphasis selector (AI / aerospace ops / founder / balanced). Uses fixed RESUME_FACTS block to prevent fabrication.

**3. Recruiter Triage** — `/apps/recruiter-triage.html` · Path A · LIVE
Recruiter email → JSON output: YES/NO/MAYBE verdict against job-search compass, 3 reply drafts (interested/ask/pass), tracker entry row. Uses Sonnet 4.6 with the AT compass + 100-company target list as system context.

### 📝 PLANNED (14)

**4. Round-N Interview Brief** — `/apps/interview-brief.html` · Path A
**Input:** Interviewer LinkedIn URL or pasted profile text + role context. **Output:** 10 questions you'll likely get + 10 questions to ask + interviewer's likely backstory + warm-thread suggestions (shared schools, companies, mutual connections to surface). Uses Sonnet 4.6. Build effort: ~1 evening.

**5. Daily Plan PWA** — `/apps/daily-plan.html` · Path A
**Input:** Yesterday's recap + active blockers (text). **Output:** Today's prioritized battle plan in markdown matching Aaron's daily-planner skill format. Reads from localStorage history. Bonus: morning-tap auto-generates from prior day's "Daily Closer" output. Build effort: ~1 evening.

**6. Equity Calculator** — `/apps/equity-calc.html` · Path A · 💰 ($0, no LLM)
**Input form:** Offer (base + RSU value + grant size + vest schedule + cliff) + tax bracket + AGI + Andres's BO RSA baseline (stored in localStorage). **Output:** 4y total comp, equity-only delta vs BO, break-even years, monthly take-home estimate, "stay vs leave" verdict logic. Pure JS, no LLM. **Recommendation: build alongside Vesting Tracker.**

**7. Interview Debrief Auto-Filer** — `/apps/interview-debrief.html` · Path A
**Input:** Voice memo or text dump after interview. **Output:** STAR-formatted entries for new wins surfaced + competency tags + "what I should add to brag doc" list. Markdown copyable to brag-doc.md. Sister app to Brag-Doc Logger but tuned for post-interview reflection.

**8. LinkedIn Post Composer** — `/apps/linkedin-post.html` · Path A
**Input:** A win or insight in 1-2 sentences + target audience (recruiters / engineers / SC peers). **Output:** 3 LinkedIn post variants — short hook, medium build-log, long manifesto. Each tuned to Andres's voice (no jargon, specifics over generics, ends with question or CTA). Includes hashtag recommendations.

**9. Workout Tracker** — `/apps/workout.html` · Path A · 💰 ($0, no LLM)
Pure-JS strength tracker with localStorage. Custom lift database (Andres's lifts only). Body-diagram SVG showing yesterday's volume per muscle group. Apple Health import via manual paste from Health app share-sheet. **Recommendation: ship for daily use, no LLM needed.**

**10. Sermon-to-Note** — `/apps/sermon.html` · **Path B** (needs Cloudflare Worker for YouTube transcript)
**Input:** YouTube/Spotify URL. **Output:** Markdown note for `Obsidian Vault/Andres/Faith/`: theology key points · scripture references with citations · 3 application questions. Worker fetches transcript (yt-dlp-style API), then browser calls Anthropic to summarize. Build effort: ~1 evening + Worker setup.

**11. Application Sequence Bot** — `/apps/app-sequence.html` · Path A · 💰 ($0, no LLM)
Daily-1-app-reminder PWA. Push notification at 8 AM (browser Notifications API). Quick-fill tracker: company name + role + URL → one-click append to `target-tracker-v2.html` data. localStorage of 7-day streak. No LLM needed.

**12. Voice-to-Tasks** — `/apps/voice-tasks.html` · Path A
**Input:** Voice memo. **Output:** Tasks sorted by workspace (AF / CB / MH / AT / Personal) and project, formatted as Obsidian Tasks markdown ready to paste into `Tasks Business.md` or relevant vault location. Web Speech API for input, Sonnet 4.6 for routing.

**13. Email Triage** — `/apps/email-triage.html` · **Path B** (needs Gmail OAuth via Cloudflare Worker)
**Input:** Connect Gmail OAuth, last 24hr inbox. **Output:** Pipeline-persona inbox sort (which agent owns which thread) + suggested actions per thread + bulk archive list. Worker manages OAuth + Gmail API; browser does the LLM classification.

**14. Calendar Pre-Brief** — `/apps/cal-brief.html` · **Path B** (Calendar API + Obsidian backlinks)
**Input:** Meeting in next 1 hour (auto-fetched from Google Calendar). **Output:** 1-pager: who, what, last interactions (pulled from Obsidian backlinks of attendee names), open threads, prep questions. Worker for Calendar OAuth; browser for LLM synthesis.

**15. Thelio Status Page** — `/apps/thelio-status.html` · **Path B** (Tailscale-only)
Local-network-only dashboard showing n8n + Render keep-alive + NAS Synology + bug-loop status. Pulls from each service's health endpoint over Tailnet. Browser-only but only works when you're on Tailscale (acceptable — this is an ops tool).

**16. Idea Lab Capture** — `/apps/idea-lab.html` · Path A
**Input:** Voice idea + workspace context. **Output:** STAR + SWOT analysis as markdown entry for `idea-lab.md`. Reads existing `idea-lab.md` summary into system prompt to avoid duplicates.

**17. Daily Closer** — `/apps/daily-closer.html` · Path A
**Input:** Day's wins + struggles + tomorrow's intent (free text or voice). **Output:** Tomorrow's draft daily plan + 3-line wellbeing pulse (energy/focus/spirit) + brag-doc candidate flags. Markdown copyable + saves to localStorage history.

**18. Job-MAS Re-Scorer** — `/apps/job-mas.html` · Path A
**Input:** Current 100-company target list (CSV import or paste from `target-tracker-v2.html`) + market signals (recent funding rounds, news). **Output:** Re-ranked top 25 with delta-from-last-month notes. Monthly cadence. Sonnet 4.6 with the equity-maximization compass.

**19. RSA / Vesting Tracker** — `/apps/vesting.html` · Path A · 💰 ($0, no LLM)
Pure-JS countdown clocks for BO RSA + any new grants. localStorage of grant data. Visual: bar chart of vested vs unvested over time. Sister app to Equity Calculator. **Recommendation: build alongside Equity Calculator.**

---

## Public Store · `/appstore.html` (existing + new)

### ✅ LIVE (3) — existing on Render
- **Frontier** — `/rfq-parser` — RFQ PDF parser (Render backend)
- **Pathfinder** — `/pathfinder` — Supplier matcher (Render backend)
- **Watchtower** — `/watchtower` — Disruption monitor (Render backend)

### 📝 PLANNED Public (5) — Path A, browser-only

**P1. Equity Calculator** — `/apps/public/equity-calc.html` · Path A · 💰
Generic version of the personal Equity Calculator. Anyone can input their offer details + baseline → output comp math. No baseline saved, no LLM, pure JS. **Naval-fit:** anyone with an offer needs this. **Demo value:** shows Andres builds tools for general use, not just himself.

**P2. Cold Email Composer** — `/apps/public/cold-email.html` · Path A
**Input:** Prospect URL or LinkedIn profile + your reason for outreach + desired call-to-action. **Output:** 3 cold-email variants (warm-mutual-tied / value-led / direct-ask). User provides own API key. Public utility tool.

**P3. Negotiation Script** — `/apps/public/negotiate.html` · Path A
**Input:** Initial offer (base + equity + benefits) + your counter target + 1-2 leverage points. **Output:** Counter-language script + "if they say X, say Y" decision tree + walk-away threshold logic. Sonnet 4.6.

**P4. Bitcoin Tax Reconciler** — `/apps/public/btc-tax.html` · Path A
**Input:** Coinbase/CoinTracker CSV export. **Output:** Cost-basis reconciliation (FIFO/LIFO/HIFO comparison) + flags for missing acquisition data + IRS Form 8949 line items + estimated tax delta vs naive Coinbase report. Used by Andres for personal use too — he saved $12K with this approach in 2025. Public version anonymizes input. Pure browser, CSV parsing in JS, Sonnet 4.6 for narrative summary only.

**P5. Round-N Interview Brief (generic)** — `/apps/public/interview-brief.html` · Path A
Generic version of personal #4. Paste any interviewer LinkedIn → 10+10 Q&A panel. No personal context.

---

## Conventions

- All apps use `/apps/api-client.js` for key handling
- All apps include `<meta name="robots" content="noindex,nofollow">` for personal store; public apps allow indexing
- All apps include PWA manifest hooks (`apple-touch-icon`, `theme-color`, `apple-mobile-web-app-*`)
- All app HTML pages live under `/apps/` (personal) or `/apps/public/` (public)
- Public store frontends served by GitHub Pages; existing tool backends (Frontier/Pathfinder/Watchtower) stay on Render
- Cost: existing Anthropic key for personal apps (Andres's), each public visitor uses own key

## Deferred / Path B build order (when user is ready)

1. Cloudflare Worker for YouTube transcript fetch → unblocks Sermon-to-Note
2. Cloudflare Worker for Gmail OAuth → unblocks Email Triage
3. Cloudflare Worker for Google Calendar OAuth → unblocks Calendar Pre-Brief
4. Thelio Status endpoint exposure via Tailscale → unblocks Thelio Status Page

All Cloudflare Worker free tier (100K req/day) — no new $$ spend.
