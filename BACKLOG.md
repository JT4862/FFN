# FFN Product Backlog

## 1. Member Signup Automation Pipeline
**Priority:** Milestone 5 (Q3-Q4 2026)
**Summary:** When a user signs up on the Squarespace member area ($4.99/mo), automatically provision their Fortified social platform account via an automation workflow.
**Approach:**
- Use MemberSpace or Squarespace Member Areas for signup/paywall
- Zapier (short-term) or n8n on GCP (long-term) listens for new member signups
- Webhook hits the social platform API to create account + send verification email
- Email address as shared key between Squarespace and social platform databases
**Notes:**
- Squarespace has no native member webhook — need MemberSpace or Stripe trigger as workaround
- n8n preferred long-term for cost and survivor data privacy (self-hosted, data never leaves our infrastructure)
- Zapier can't write data back into Squarespace — need middleware DB for mapping user IDs

---

## 2. Abuse Pattern Recognition AI Chatbot
**Priority:** TBD
**Access:** Members only (behind $4.99/mo paywall)
**AI Approach:** API-based (Anthropic Claude or OpenAI GPT) with expert-crafted system prompt — no fine-tuning needed initially
**Summary:** An AI-powered chatbot embedded in the Squarespace member area that helps survivors identify abusive communication tactics. Users paste in a text message (or series of messages) from their abuser, and the agent analyzes it for narcissistic/abusive patterns and returns educational breakdowns.
**Core Features:**
- Paste-in text analysis: user submits a message, agent identifies manipulation tactics
- Pattern identification: DARVO, gaslighting, love-bombing, word salad, blame-shifting, triangulation, hoovering, stonewalling, coercive control language, guilt-tripping, etc.
- Educational output: not just "this is gaslighting" but explains WHY it qualifies, what the abuser is trying to achieve, and how to respond (or not respond)
- Tone: validating, educational, empowering — never dismissive, never tells users what to do with their relationship
- Safety: disclaimers (not a substitute for professional help), crisis resource links (National DV Hotline, etc.)
**Decisions Made:**
- Members only — controls API costs, adds membership value
- API-based with system prompt — fastest to prototype, no training data needed, can iterate on prompt with DV experts
**Remaining Questions:**
- Embedding: iframe in Squarespace member page, or separate lightweight app behind auth?
- Scope: text-only analysis to start, or also support screenshots (OCR)?
- Privacy: are pasted messages stored, anonymized, or deleted after session?
- System prompt: who reviews it for clinical accuracy? (licensed counselor, DV advocate?)
- Cost management: rate limit per member per day/month?

