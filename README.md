# 📚 Swellchain Docs

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.1.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-14.5.4-000000?logo=book)](https://fumadocs.vercel.app)

</div>

## Overview

This repository contains the official documentation for Swellchain, a restaking focused L2 built with the OP Stack. The repo provides comprehensive guides, API references, and technical specifications for developers integrating with Swellchain.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/swellnetwork/swell-chain-docs.git
cd swell-chain-docs
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the documentation.

## 📖 Documentation Structure

- `/content` - Main documentation content in MDX format
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/public` - Static assets and images

## 🔧 Development

- `pnpm build` - Build the production documentation
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## 🤝 Contributing

We welcome contributions! Feel free to submit a PR or open an issue.

## 🔗 Links

- [Swell Network Website](https://swellnetwork.io)
- [Swellchain Documentation](https://docs.swellnetwork.io)
- [GitHub Issues](https://github.com/swellnetwork/swell-chain-docs/issues)
- [Discord Community](https://discord.com/invite/voyagerapp)

## LLMs Integration

This project includes support for the `/llms.txt` specification, which helps language models better understand the documentation structure.

Two files are generated:

1. `/llms.txt` - A structured file that follows the llms.txt specification
   - Includes an overview of Swellchain
   - Provides links to markdown versions of all documentation pages, organized by category
   - Clean, machine-readable content optimized for LLM context

2. `/llms-full.txt` - A comprehensive file containing all documentation content
   - Contains the complete content of all documentation files in a single document
   - Includes a table of contents organized by category
   - Optimized for LLMs with larger context windows
   - Allows LLMs to search through the entire documentation without following links

The markdown versions of all pages are also generated and served alongside the HTML versions with `.md` appended to the original URL.

To generate these files manually, run:

```bash
pnpm generate:llms-txt
```

For more information about the llms.txt specification, visit [llmstxt.org](https://llmstxt.org/).

---

<div align="center">
Made with ❤️ by Swell
</div>
