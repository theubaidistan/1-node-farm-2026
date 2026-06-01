# 🌿 Node Farm 2026

![Node Farm Banner](https://i.ytimg.com/vi/3unYpFZO4EE/maxresdefault.jpg)

[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A simple Node.js web server that serves a farm product store — built without any frameworks, using only Node.js core modules.

🔗 **Live Demo:** [node-farm-2026.vercel.app](https://1-node-farm-2026-git-main-the-ubaidistans-projects.vercel.app/overview)

---

## 📁 Project Structure

```
1-node-farm-2026/
├── api/              # JSON API data
├── dev-data/         # Development data (product JSON)
├── modules/          # Custom Node.js modules
├── templates/        # HTML templates for rendering pages
├── txt/              # Text files used in the app
├── index.js          # Main server entry point
├── package.json      # Project metadata & scripts
└── vercel.json       # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/theubaidistan/1-node-farm-2026.git

# Navigate into the project
cd 1-node-farm-2026

# Install dependencies
npm install
```

### Running the Server

```bash
npm start
```

Then open your browser at `http://localhost:8000`

---

## 🌐 Routes

| Route              | Description                    |
| ------------------ | ------------------------------ |
| `/overview`        | Product overview page          |
| `/product?id={id}` | Individual product detail page |
| `/api`             | Returns raw JSON product data  |

---

## 🛠️ Built With

- **Node.js** — HTTP server using the `http` core module
- **HTML & CSS** — Templated UI rendered server-side
- **JavaScript** — Template replacement logic & routing
- **Vercel** — Deployment platform

---

## 📦 Deployment

This project is deployed on **Vercel**. The `vercel.json` config routes all requests through `index.js`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/theubaidistan/1-node-farm-2026)

---

## 👤 Author

**theubaidistan**

- GitHub: [@theubaidistan](https://github.com/theubaidistan)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
