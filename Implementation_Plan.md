# AutoInvest Coach+ – Updated Implementation Plan

## Task 1: Initialize project repository

**Description:** Set up GitHub repo, issue tracker, branches


**Manual Verification:** Confirm Git initialized, push successful


**Test Coverage:** Basic CI/CD pipeline or manual push test


---

## Task 2: Frontend setup (React + Tailwind)

**Description:** Initialize React project with Tailwind, mobile-first layout shell


**Manual Verification:** App loads default landing page


**Test Coverage:** Unit test layout components


---

## Task 3: Backend setup (FastAPI)

**Description:** Initialize FastAPI with health check and Swagger UI


**Manual Verification:** GET /health returns 200


**Test Coverage:** Unit test base route + docs


---

## Task 4: Setup MongoDB & collections

**Description:** Define schemas for user, goal, transaction, rule, trigger


**Manual Verification:** Insert/retrieve test document


**Test Coverage:** Integration test schema operations


---

## Task 5: Simulate product catalog from JSON

**Description:** Load fund data from local JSON into memory/API


**Manual Verification:** Sample query returns product list


**Test Coverage:** Unit test endpoint returns mock fund data


---

## Task 6: Develop webhook simulator

**Description:** Mock Shopee spending trigger via REST endpoint


**Manual Verification:** Trigger logs appear in DB


**Test Coverage:** Integration test webhook triggers and DB write


---

## Task 7: Persona classification microservice

**Description:** Use rule-based or simple ML model to classify user profile


**Manual Verification:** Valid persona returned for test user


**Test Coverage:** Unit test classification logic


---

## Task 8: Product recommendation engine

**Description:** Rank 3 bundles per persona + input with rationale


**Manual Verification:** Returns bundle array with confidence score


**Test Coverage:** Unit test ranking logic and JSON structure


---

## Task 9: Investment suggestion popup

**Description:** Display suggestion card on trigger event


**Manual Verification:** Card renders with investment action CTA


**Test Coverage:** Manual UI trigger → suggestion flow test


---

## Task 10: Goal creation flow

**Description:** Use predefined templates and allow quick edits


**Manual Verification:** Goal saved and dashboard updates


**Test Coverage:** Unit test form validation + DB insert


---

## Task 11: Rule setup flow

**Description:** Users define auto-invest rules for behavior triggers


**Manual Verification:** Rule stored and accessible in UI


**Test Coverage:** Unit + integration test for rule persistence


---

## Task 12: Investment simulator

**Description:** Visualize potential returns vs. idle cash


**Manual Verification:** Graph updates with slider input


**Test Coverage:** Test return projection formula accuracy


---

## Task 13: Feedback module

**Description:** Capture user reactions to suggestions


**Manual Verification:** Thumbs up/down stored with metadata


**Test Coverage:** Test feedback write + future rule influence


---

## Task 14: End-to-end testing pass

**Description:** Manual run-through of goal creation, spending trigger, and auto-invest rule


**Manual Verification:** App behaves consistently and flows are smooth


**Test Coverage:** Regression test edge cases


---

## Task 15: Deploy to AWS

**Description:** Push frontend (S3 or EC2), backend (Lambda or EC2), MongoDB on Atlas


**Manual Verification:** Accessible via public domain or IP


**Test Coverage:** Smoke test deployment, data persistency, trigger behavior


---
