# 🌾 AgriOracle

AgriOracle is a smart agriculture platform that integrates modern AI/ML models with a user-friendly web interface. It helps farmers and stakeholders by providing features like crop disease detection, Next crop Recommendation, and intelligent insights through a MERN stack application connected with Flask-based AI APIs.

---

## 🛠️ How to Clone and Run on Your PC

### 1. Clone the Repository

```bash
git clone https://github.com/RG1208/AgriOracle.git
cd AgriOracle

#Setting up Frontend
cd AgriOracleFrontend
pnpm install
npm run dev

# Setting up backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate

# Install required Python packages
pip install -r requirements.txt

# Run the Flask server
python app.py

