# GYST — Agentic AI Commerce System
### Investor Demo · Presenter Guide

---

## What This Is

A split-screen interactive prototype demonstrating the GYST agentic AI commerce pipeline. The left panel shows the creator's experience (Marcus, a professional athlete) as a network of AI agents autonomously builds his official verified storefront. The right panel shows the customer's experience (Jordan, a fan) discovering, interrogating, and purchasing from that storefront in real time.

**Two moments in this demo use live AI — real Claude API calls, not simulated data.** Everything else is scripted with realistic data to ensure demo reliability. The live moments are called out clearly below.

---

## Setup & Deployment

### Environment Variables

Set these in your Vercel project settings before deploying:

| Variable | Description |
|---|---|
| `DEMO_PASSWORD` | Password shown to investors at the login gate |
| `ANTHROPIC_API_KEY` | Your Anthropic key — used server-side only, never exposed to the browser |

### Local Development

```bash
unzip gyst-demo.zip && cd gyst-demo
npm install
cp .env.example .env.local   # fill in your values
npm run dev                  # → http://localhost:3000
```

### Resetting Access Mid-Demo

Change `DEMO_PASSWORD` in Vercel environment variables and trigger a redeploy. All existing sessions are immediately invalidated — useful if you want to rotate access between investor meetings.

---

## Presenter Script

**Recommended setup:** Full-screen browser, zoom to 90% if needed to show both panels comfortably. The reset button (top right) restarts the demo at any time.

---

### Opening (before clicking anything)

> "What you're looking at is a split screen. On the left is Marcus — a professional athlete who knows counterfeit merch bearing his name is being sold to his fans. On the right is Jordan — one of those fans, who's been burned before by a fake. Right now the right side is locked. It unlocks when the pipeline completes. Let's run it."

---

### Step 1 — Click "Connect Socials & Launch Pipeline"

Marcus connects his Instagram, TikTok, and YouTube accounts. Read-only public data only — no posting permissions, no private analytics.

> "The moment Marcus connects his accounts, the pipeline starts. No documents, no identity checks, no friction. The guiding principle is: show value before asking for commitment. Agent 01 is now listening across his fan communities for purchase intent signals."

*Agent 01 runs automatically — 847 signals detected, dominant cluster around a performance training hoodie.*

---

### Step 2 — Agent 02 fires

> "Agent 02 is our market research agent. And this — right here — is real."

> #### 🟦 LIVE AI MOMENT #1
> **Agent 02 · Market Research Brief**
> This is a genuine Claude API call. The agent receives Agent 01's signal data — 847 purchase intent signals, 312 mentions of a training hoodie, demographic breakdown — and generates a real market opportunity brief in real time. The output is different every run. You are watching the AI do actual work.

*Wait for the typewriter to complete before moving on. It takes 10–15 seconds.*

> "That brief — market sizing, competitor gap, go/no-go recommendation — was just written live by the AI. Not pre-written. Not cached. The confidence score, the revenue estimate, the gap analysis — all generated from Marcus's actual fan signal data."

---

### Step 3 — Agent 03 and Financial Controller run automatically

> "QA reviews the research — quality score 94/100. Financial Controller sets the budget envelope: $12,400, break-even at 139 units. All autonomous. Marcus hasn't done anything."

---

### Step 4 — Human Gate 1 · Click "Approve Opportunity →"

> "The pipeline reaches its first human gate. This is by design — the system is autonomous, but high-stakes decisions stay with Marcus. He reads the brief, sees the fan signals driving it, and approves. This is also a natural pause point for any questions from Marcus's team."

*Click Approve Opportunity.*

---

### Step 5 — Agents 04 and 05 run automatically

> "Product Manager drafts the PRD — heavyweight French terry, signature embroidery, his #23 built into the design based on creative direction he provided. Customer Persona agent then simulates how his actual fan segments respond. It scores at 81% purchase intent — above the 75% threshold — so the pipeline advances."

---

### Step 6 — Verification Gate · Click "Begin Verification →"

> "Here is where things get serious. The pipeline hits a hard gate. It cannot proceed — no listing will publish, no badge will issue — until Agent 13 holds a current verified identity record for Marcus. This is not a UI label. This is a genuine block."

*Click Begin Verification and narrate as the steps tick through:*

> "Government ID submitted to a third-party verifier — Persona, Jumio, or equivalent. Biometric liveness check — selfie matched against the ID photo. Social OAuth elevated — Marcus proves he controls those accounts, he's not just claiming them. Rights attestation signed — he confirms he holds the rights to sell merchandise bearing his name and likeness. Watchlist cross-reference — his identity is checked against known fraud and impersonation records."

*Verification completes: Confidence 97/100.*

> "Verified. Confidence 97 out of 100. The Verified Creator badge is now issued. And something else happens — Agent 01 retroactively re-scores all of Marcus's opportunity signals with a +0.25 confidence boost, because those signals now come from a confirmed, authenticated source."

---

### Step 7 — Agents 06 and 07 run automatically

> "Procurement and Legal run in parallel. Supplier locked in — Bella+Canvas, 12-day lead, MOQ 48. Legal clearance completed. And notice this: because Agent 13 has already confirmed Marcus's rights, Agent 07 doesn't need to independently verify ownership of his name and likeness. The verification record does that work. Three unauthorized listings were also detected — counterfeit sellers already using his name. Takedown templates are pre-prepared."

---

### Step 8 — Human Gate 2 · Click "Launch Official Store →"

> "Pre-launch approval. Marcus sees the supplier, the compliance clearance, the three counterfeits queued for takedown, and how the badge will appear on his listing. He approves. The store goes live."

*Click Launch Official Store. The right panel unlocks.*

> "Watch the right side."

---

### Step 9 — Walk through Jordan's experience

*The storefront fades in with the Verified Creator badge visible.*

> "Jordan lands on this page. They've been burned before — bought a fake Marcus hoodie from a site that looked legitimate. The first thing they notice is the blue shield. They've never seen that before. They want to know what it means."

**Click the VERIFIED CREATOR badge.**

> #### 🟦 LIVE AI MOMENT #2
> **Verification Badge · Live Trust Rationale**
> Clicking the badge opens the verification record and triggers a second Claude API call. The system generates a real-time, plain-language explanation of exactly why this store is trustworthy — referencing the actual verification checks that ran for Marcus's account. This is the trust layer speaking directly to the customer, in real time.

*Wait for the typewriter to complete.*

> "Jordan reads that. ID verified. Social accounts confirmed. Rights attested. Three counterfeits already actioned. For the first time on a creator merch site, Jordan feels something they haven't felt before: confidence. Not because of a logo. Because of evidence."

---

### Step 10 — Click "Add to Cart — $89.00"

> "Jordan buys. The order confirmation includes a cryptographic QR code unique to this specific order. When the physical product arrives, Jordan scans it. It resolves to an order-specific verification record — the exact order number, the product, the fulfillment date, and confirmation it came from Marcus's verified store. A counterfeit with a copied QR code will resolve to the brand page but will have no matching order record. The trust layer closes the loop at the physical product."

---

### Closing

> "Every step you just watched — from fan signal to verified storefront to authenticated physical product — was run by a network of 13 specialized AI agents, with two human approval gates where Marcus stayed in control of high-stakes decisions. The whole pipeline, including identity verification and legal clearance, ran in minutes. That's the system."

---

## The Two Live AI Moments — Technical Summary

For any technical questions during the demo:

**Live Moment 1 — Agent 02 Market Research Brief**
- Trigger: immediately after Agent 01 completes
- What happens: a POST request is sent to `/api/claude` (server-side proxy) with Agent 01's signal data as context; Claude generates a structured market opportunity brief
- Model: Claude Sonnet
- Latency: 8–15 seconds depending on network
- Fallback: if the API is unreachable, a realistic pre-written brief is displayed automatically — the demo never breaks

**Live Moment 2 — Verification Badge Trust Rationale**
- Trigger: Jordan clicks the Verified Creator badge on the storefront
- What happens: a POST request is sent to `/api/claude` with Marcus's verified identity data as context; Claude generates a plain-language customer-facing trust summary
- Model: Claude Sonnet
- Latency: 6–12 seconds
- Fallback: same pattern — pre-written rationale displays if API is unreachable

**API key security:** The `ANTHROPIC_API_KEY` lives exclusively in Vercel's environment variables. All Claude calls are proxied through `/api/claude` — a server-side Next.js route handler. The key is never sent to the browser and will not appear in network traffic.

---

## Architecture Overview

```
/                     → redirects to /demo
/login                → password gate (DEMO_PASSWORD env var)
/demo                 → serves the demo HTML
/api/auth             → validates password, sets httpOnly cookie (8hr)
/api/claude           → proxies Claude API calls server-side
middleware.ts         → checks auth cookie on every request
public/demo.html      → the full GYST demo (standalone HTML)
```

---

*GYST · Confidential · Investor Preview*
