# 🧩 System Design Template

## 0️⃣ Clarify the Problem (Always First)

Ask:

- Who are the users?
- What core action are we optimizing for?
- What scale? (QPS, DAU, data size)
- Is this real-time or async?
- What’s more important: consistency or availability?
- Any latency requirements?
- Read-heavy or write-heavy?

Heuristic:

> Never design until you know scale + constraints.

---

## 1️⃣ Define Functional Requirements

Write 3–5 bullets max.

Example:

- Users can create posts
- Users can view feed
- Users can like posts
- System persists data

Keep it simple.

---

## 2️⃣ Define Non-Functional Requirements

This separates senior from staff+.

Think:

- Availability (99.9? 99.99?)
- Latency (p95 under 200ms?)
- Scalability (horizontal?)
- Consistency (strong vs eventual?)
- Durability
- Security / multi-tenancy

Heuristic:

> Every architecture choice must tie to a non-functional requirement.

---

## 3️⃣ High-Level Architecture (Start Simple)

Draw:

```
Client → Load Balancer → App Servers → Database
```

Then ask:

- Do we need caching?
- Do we need async processing?
- Do we need search?
- Do we need object storage?

Don’t over-engineer yet.

---

## 4️⃣ Data Model (Early, Not Last)

Define core entities.

Example:

- User
- Post
- Like

For each:

- ID
- Key relationships
- Primary indexes

Heuristic:

> Schema drives architecture more than services do.

---

## 5️⃣ Deep Dive: Critical Path

Pick the most important flow and walk it end-to-end.

Example:
“User loads feed.”

Trace:

- API request
- Cache lookup?
- DB query?
- Ranking?
- Response

Talk through:

- Latency
- Bottlenecks
- Failure modes

---

## 6️⃣ Scaling Strategy

Now introduce scale.

Ask:

- What breaks first?
- DB? CPU? Memory? Network?

Common upgrades:

- Read replicas
- Sharding
- Caching layer (Redis)
- CDN
- Message queue
- Background workers

Heuristic:

> Scale reads first. Writes later.

---

## 7️⃣ Consistency Decisions

Ask:

- Do we need strong consistency?
- Can we tolerate eventual?
- Do we need idempotency?
- How do we prevent duplicate writes?

This is where principal-level thinking shows.

---

## 8️⃣ Failure & Reliability

Always include:

- What happens if DB goes down?
- What if cache is cold?
- How do we retry?
- How do we avoid cascading failures?

Mention:

- Circuit breakers
- Timeouts
- Backoff
- SLOs

---

## 9️⃣ Tradeoffs (This Is Where You Win)

Explicitly say:

- “I’m choosing X because we optimize for Y.”
- “If scale increases 10x, we would…”
- “If consistency became critical, we’d switch to…”

Interviewers care more about tradeoffs than perfect diagrams.

---

# 🧠 Heuristics to Sound Senior

### 1. Don’t prematurely shard.

Start simple. Scale when needed.

### 2. Optimize for the dominant operation.

If 90% reads → design for reads.

### 3. Separate compute from storage.

Makes scaling easier.

### 4. Make everything horizontally scalable unless stated otherwise.

### 5. Introduce complexity only when justified by scale.

---

# 🧭 Mental Flow You Can Memorize

1. Clarify requirements
2. Define scale
3. High-level diagram
4. Data model
5. Critical path deep dive
6. Scale strategy
7. Reliability
8. Tradeoffs

That’s the loop.

---

# ❓ Smart Questions That Impress

- “What is our expected QPS at peak?”
- “Are reads significantly higher than writes?”
- “Is latency user-facing or internal?”
- “Do we need global distribution?”
- “Are we optimizing for cost or performance?”
- “What is the acceptable data loss tolerance?”

---

# ⚡ Principal-Level Additions (Optional but Powerful)

Mention:

- Multi-tenancy isolation strategy
- Observability (metrics, tracing)
- SLOs
- Deployment strategy
- Backward compatibility
- Schema migrations

Even briefly — it signals maturity.

---

If you want, we can now:

- Walk through a real system design problem using this template
- Or I can give you a condensed 60-second “opening move” you can use in interviews to control the room

What level are you targeting — Senior, Staff, or Principal?
