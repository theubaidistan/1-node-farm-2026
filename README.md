# 🌿 Node Farm

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

A simple **Node.js web server** built without any frameworks — just the core `http`, `fs`, and `url` modules. Node Farm serves an organic product store with dynamic HTML templating, a JSON-based data API, and server-side routing — all from scratch.

🔗 **Live Demo:** [node-farm-2026.vercel.app](https://1-node-farm-2026.vercel.app/overview)

---

## 📁 Project Structure

```
1-node-farm-2026/
├── api/                  # JSON data endpoint
├── dev-data/             # Raw product data (JSON)
├── modules/              # Custom Node.js modules
├── templates/            # HTML templates (overview & product)
├── txt/                  # Text files used in fs exercises
├── index.js              # Main server entry point
├── vercel.json           # Vercel deployment config
└── package.json
```

---

## 🚀 Features

- **Pure Node.js** — no Express, no frameworks
- **Dynamic HTML templating** — placeholders replaced at runtime
- **Server-side routing** — handles `/overview`, `/product`, and `/api`
- **JSON API** — serves raw product data at `/api`
- **Deployed on Vercel** — live and accessible online

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+

### Installation

```bash
# Clone the repository
git clone https://github.com/theubaidistan/1-node-farm-2026.git

# Navigate into the project
cd 1-node-farm-2026

# Install dependencies
npm install
```

### Running Locally

```bash
npm start
```

Then open [http://localhost:8000/overview](http://localhost:8000/overview) in your browser.

---

## 📡 Routes

| Route       | Description                        |
| ----------- | ---------------------------------- |
| `/overview` | Displays all farm products         |
| `/product`  | Shows a single product detail page |
| `/api`      | Returns raw JSON product data      |

---

## 🌐 Deployment

This project is deployed on **Vercel**. The `vercel.json` config rewrites all routes to `index.js` so the Node.js server handles routing correctly in a serverless environment.

---

## 👤 Author

**Muhammad Ubaid**  
GitHub: [@theubaidistan](https://github.com/theubaidistan)
