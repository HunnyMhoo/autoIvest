# Backend

This directory contains the FastAPI backend application for AutoInvest Coach+.

## Structure
- `app/` - Main application code
  - `api/` - API routes and endpoints
  - `core/` - Core application logic
  - `models/` - Database models
  - `schemas/` - Pydantic schemas
  - `services/` - Business logic
  - `utils/` - Utility functions
- `tests/` - Test files
- `alembic/` - Database migrations
- `config/` - Configuration files

## Getting Started

1. Create and activate virtual environment:
```bash
python -m venv venv
.\venv\Scripts\activate  # Windows
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Start development server:
```bash
uvicorn app.main:app --reload
```

4. Run tests:
```bash
pytest
``` 