# Tracking Plan

## Analytics Strategy

### Google Analytics 4 (GA4)

**Status:** Not yet implemented

**Measurement ID:** Set via `NEXT_PUBLIC_GA_ID` environment variable

### Planned Events

| Event | Trigger | Parameters |
|---|---|---|
| `proposal_view` | Page load | `page_title`, `referrer` |
| `section_view` | Section enters viewport | `section_name`, `scroll_depth` |
| `tab_click` | Tab selection in product tiers / commercial sections | `tab_name`, `section` |
| `accordion_open` | Accordion item expanded | `item_title`, `section` |
| `pdf_download` | PDF download button clicked | `document_name` |
| `accept_proposal` | Accept proposal CTA clicked | `timestamp` |
| `contact_request` | Contact / working session CTA clicked | `method` |

### Vercel Analytics

**Status:** Available as lightweight alternative

- Privacy-friendly (no cookies)
- Page views and web vitals out of the box
- Enable in Vercel project settings > Analytics

### Conversion Goals

| Goal | Priority | Event |
|---|---|---|
| Proposal Viewed | Low | `proposal_view` |
| Sections Explored | Medium | `section_view` (3+ sections) |
| PDF Downloaded | High | `pdf_download` |
| Contact Requested | High | `contact_request` |
| Proposal Accepted | Primary | `accept_proposal` |
