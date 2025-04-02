# AutoInvest Coach+

An intelligent investment assistant that helps users automatically invest their idle cash based on spending patterns and financial goals.

## Project Overview

AutoInvest Coach+ uses a persona-based recommendation system to provide personalized investment suggestions. The platform monitors spending patterns, integrates with e-commerce platforms, and helps users reach their financial goals through automated micro-investing.

## Tech Stack

- Frontend: React + Tailwind CSS
- Backend: FastAPI
- Database: MongoDB
- Infrastructure: AWS
- CI/CD: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- MongoDB
- AWS Account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/autoinvest-coach.git
cd autoinvest-coach
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Development

1. Start the frontend development server:
```bash
cd frontend
npm run dev
```

2. Start the backend server:
```bash
cd backend
uvicorn main:app --reload
```

## Project Structure

```
autoinvest-coach/
├── frontend/           # React frontend application
├── backend/           # FastAPI backend application
├── docs/             # Project documentation
├── tests/            # Test suites
└── scripts/          # Utility scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 