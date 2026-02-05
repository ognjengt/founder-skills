# PRD Template Structure

This template defines the structure for Product Requirements Documents optimized for AI coding tools.

---

## Document Sections

### 1. Document Header
```markdown
# [Product Name] — Product Requirements Document

**Version:** 1.0
**Date:** [YYYY-MM-DD]
**Author:** [Name]
**Status:** Draft | Review | Approved
```

### 2. Executive Summary
One paragraph (3-5 sentences) covering:
- What the product does
- Who it's for
- The core problem it solves
- Expected outcome

**Example:**
> "ChurnGuard is a SaaS tool that predicts which customers are at risk of churning and recommends retention actions. It targets B2B SaaS companies with 100+ customers who struggle with reactive churn management. By analyzing usage patterns, support tickets, and billing data, ChurnGuard provides a daily risk score and suggested interventions. The expected outcome is a 15-25% reduction in monthly churn."

### 3. Problem Statement
Structure:
- **Current state:** What exists now and why it's broken
- **Pain points:** 3-5 specific problems users face
- **Impact:** Business cost of not solving this

### 4. Goals & Success Metrics

| Goal | Metric | Target | Measurement Method |
|------|--------|--------|-------------------|
| Primary goal | KPI | Specific number | How to measure |
| Secondary goal | KPI | Specific number | How to measure |

**Example:**
| Goal | Metric | Target | Measurement Method |
|------|--------|--------|-------------------|
| Reduce churn | Monthly churn rate | < 3% | Billing system |
| Increase retention actions | Actions taken per alert | > 60% | In-app tracking |

### 5. User Personas

For each persona:
```markdown
#### [Persona Name]
- **Role:** [Job title]
- **Goals:** What they're trying to accomplish
- **Pain points:** Current frustrations
- **Technical proficiency:** Low / Medium / High
- **Usage context:** When and how they'll use this
```

### 6. Functional Requirements

Use this format for EVERY feature:

```markdown
#### FR-[XXX]: [Feature Name]

**Description:** [One sentence explaining what this does]

**User story:** As a [persona], I want to [action] so that [benefit].

**Acceptance criteria:**
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]
- [ ] [Specific, testable criterion]

**Priority:** P0 (MVP) | P1 (Important) | P2 (Nice to have)

**Dependencies:** [List any dependencies on other features]
```

**Priority definitions:**
- P0 — Must have for launch. Product doesn't work without it.
- P1 — Important for first version. Include if time permits.
- P2 — Nice to have. Can wait for v2.

### 7. Non-Functional Requirements

Cover these categories as applicable:

```markdown
#### Performance
- Page load time: [target]
- API response time: [target]
- Concurrent users supported: [number]

#### Security
- Authentication method: [OAuth, JWT, etc.]
- Data encryption: [at rest, in transit]
- Compliance requirements: [GDPR, SOC2, etc.]

#### Scalability
- Expected initial load: [users/requests]
- Growth target: [users/requests in X months]
- Scaling approach: [horizontal, vertical, auto-scale]

#### Availability
- Uptime target: [99.9%, etc.]
- Backup frequency: [daily, hourly]
- Disaster recovery: [RTO, RPO]
```

### 8. Technical Architecture

```markdown
#### System Overview
[High-level description of the system architecture]

#### Technology Stack
- **Frontend:** [Framework, language]
- **Backend:** [Framework, language]
- **Database:** [Type, service]
- **Hosting:** [Provider, service]
- **Key libraries:** [List major dependencies]

#### Architecture Diagram (Description)
[Describe the system flow in text — AI tools will interpret this]

Example:
"User requests flow through a Next.js frontend → API Gateway → Express.js backend → PostgreSQL database. Background jobs run on a separate worker service using Bull queues. File uploads go to S3 with CloudFront CDN."
```

### 9. API Specifications

For each endpoint:

```markdown
#### [HTTP Method] /api/[endpoint]

**Purpose:** [What this endpoint does]

**Authentication:** Required | Optional | None

**Request:**
```json
{
  "field": "type — description"
}
```

**Response (200):**
```json
{
  "field": "type — description"
}
```

**Error responses:**
- 400: [When this occurs]
- 401: [When this occurs]
- 404: [When this occurs]
```

### 10. UI/UX Requirements

For each screen/view:

```markdown
#### [Screen Name]

**Purpose:** [What the user accomplishes here]

**Key elements:**
- [Element 1]: [Description and behavior]
- [Element 2]: [Description and behavior]

**User flow:**
1. User does [action]
2. System responds with [response]
3. User sees [result]

**States:**
- Empty state: [What shows when no data]
- Loading state: [Loading behavior]
- Error state: [Error handling]
```

### 11. Data Models

```markdown
#### [Model Name]

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | UUID | Yes | Primary key |
| field_name | string | Yes | Description |
| created_at | timestamp | Yes | Creation timestamp |

**Relationships:**
- [Relationship type] to [Other Model]

**Indexes:**
- [field_name] — for [query type]
```

### 12. Integration Points

For each external service:

```markdown
#### [Service Name]

**Purpose:** [Why this integration exists]

**Integration type:** REST API | Webhook | SDK | OAuth

**Data exchanged:**
- Inbound: [What we receive]
- Outbound: [What we send]

**Authentication:** [How we authenticate]

**Rate limits:** [If applicable]

**Fallback behavior:** [What happens if this fails]
```

### 13. Edge Cases & Error Handling

```markdown
#### Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| [Scenario 1] | [How system handles it] |
| [Scenario 2] | [How system handles it] |

#### Error Handling Strategy

- **User-facing errors:** [How to display]
- **System errors:** [How to log/alert]
- **Retry logic:** [When and how to retry]
- **Graceful degradation:** [What still works when X fails]
```

### 14. Testing Requirements

```markdown
#### Unit Tests
- [Component/Function] — [What to test]

#### Integration Tests
- [Flow/Integration] — [What to verify]

#### E2E Tests
- [User journey] — [Critical path to test]

#### Performance Tests
- [Scenario] — [Target metric]
```

### 15. Implementation Notes for AI

**THIS SECTION IS CRITICAL — It tells the AI coding tool how to build this.**

```markdown
#### Build Order
1. [First thing to build — usually data models]
2. [Second thing — usually API endpoints]
3. [Third thing — usually frontend components]
...

#### File Structure Suggestion
```
/src
  /components
  /pages
  /api
  /lib
  /types
```

#### Critical Implementation Details
- [Detail 1]: [Specific instruction]
- [Detail 2]: [Specific instruction]

#### Code Style Preferences
- [Language/framework conventions]
- [Naming conventions]
- [File organization rules]

#### Libraries to Use
- [Library] for [purpose] — [why this one]

#### Libraries to Avoid
- [Library] — [reason]

#### Common Pitfalls
- [Pitfall 1]: [How to avoid]
- [Pitfall 2]: [How to avoid]

#### Testing Approach
- Write tests for [priority areas]
- Skip tests for [low-risk areas]
- Use [testing library] for [purpose]
```

---

## Template Usage Notes

1. **Not all sections required** — Skip sections that don't apply. A landing page PRD doesn't need API specs.

2. **Specificity beats completeness** — One well-defined feature is better than ten vague ones.

3. **Acceptance criteria are mandatory** — If you can't write testable acceptance criteria, the feature isn't defined enough.

4. **Priorities matter** — P0 features should be 30-40% of total. If everything is P0, nothing is.

5. **AI-specific section is not optional** — This is what makes the PRD actually useful for AI coding tools.
