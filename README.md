# Cortexvia – Empowering AI-driven knowledge retrieval and inference. 🚀


Cortexvia is a unified AI platform designed for developers and users to seamlessly upload documents and YouTube video URLs, generate API keys, and retrieve intelligent answers powered by Retrieval-Augmented Generation (RAG) systems or integrated AI models. It features a user-friendly website, a comprehensive RAG SDK for advanced retrieval and reasoning, a React chatbot library for easy UI integration, and a multi-provider Model API layer.

Whether you're building knowledge bases, chatbots, or AI-driven applications, Cortexvia simplifies data ingestion, querying, and inference with scalable tiers and robust documentation.

[![npm version](https://badge.fury.io/js/%40cortexvia%2Frag-sdk.svg)](https://badge.fury.io/js/%40cortexvia%2Frag-sdk)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js >= 18](https://img.shields.io/badge/Node.js-%3E%3D18-green.svg)](https://nodejs.org/)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
  - [Data Ingestion and Uploads](#data-ingestion-and-uploads)
  - [Intelligent Querying and RAG](#intelligent-querying-and-rag)
  - [Multi-Model Integration and Inference](#multi-model-integration-and-inference)
  - [Usage Tracking, Analytics and Dashboard](#usage-tracking-analytics-and-dashboard)
  - [Secure API Key Management](#secure-api-key-management)
  - [Advanced RAG Toolkit SDK](#advanced-rag-toolkit-sdk)
  - [React Chatbot Library](#react-chatbot-library)
  - Speed Optimization and Tiers
  - Easy Installation and Setup
  - Flexible Backend Support
  - Developer-Friendly Documentation
- [Components](#components)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)/
  - Installation
  - Usage Examples
  - Full Setup Guide
- API Keys
- Usage Tiers
- Documentation
  - API Reference
  - SDK Guide and Advanced RAG Configurations
  - Chatbot Integration and Customization
  - Tutorials and Video Guides
  - Community Resources
- Contributing
- License
- Support & Policies

---

## Overview

Cortexvia empowers users and developers to:

- **Upload Data**: Securely ingest documents (PDFs, DOCs, TXT) or YouTube video URLs for processing.
- **Query with RAG**: Ask natural language questions and receive context-aware answers from your uploaded data using advanced RAG techniques (RAG, SmartRAG, LightRAG, GraphRAG).
- **AI Inference**: Access multiple AI models  for generation, embeddings, and reranking.
- **Track & Scale**: Monitor usage, manage plans (Free or Developer), and scale with speed tiers (Normal: 200–500 Tokens/sec, Medium: 700–1000, Fast: 2000–2500).

Built for seamless integration, Cortexvia handles the heavy lifting of data retrieval, vector embeddings, and model orchestration—so you can focus on building intelligent applications.

The platform is designed for very high scalability, supporting from solo developers to enterprise teams. We prioritize privacy, security, and ease-of-use, with complete documentation and example code to get you started in minutes.

Contact us at support@cortexvia.com for enterprise queries. Vaelt starting on the Free tier today.

---

## Key Features

Cortexvia stands out with a rich set of features optimized for AI developers. Below is a detailed overview of each feature, including how to use it and why it's valuable.

### Data Ingestion and Uploads

- **Drag-and-drop Uploads**: Simple and secure interface for documents (PDF, Doc, Txt, html, etc.) and YouTube URLs. Supports batch uploads for efficient onboarding.
- **Preprocessing and Indexing**: Automatically extract text, generate vector embeddings using models. Stored securely in a vector database for fast retrieval.
- **File Support.**: Compatible with multi-file formats, including multimedia for YouTube transcripts and audio to text conversion.

Why it's valuable? Saves developers time on data prep; just upload and query. Integrates with the RAG SDK for custom preprocessing workflows.

### Intelligent Querying and RAG

- **Retrieval-Augmented Generation**: Core engine that retrieves relevant chunks from your data and feeds them into an LLM for context-aware answers.
- **RAG variants**: Basic RAG for straightforward retrieval; SmartRAG (hybrid search with JINA for better realtime ranking); LightRAG for lightweight embeddings on edge devices; GraphRAG under the hood for knowledge graph-based queries.
- **Results Polishing**: Auto-generated answers with citations to source data chunks, streaming support for live chats.
- **Query Optimization**: Supports multi-step queries and filters (e.g., date range, keyTokens) for precise results.

Why it's valuable? Reduces hallucinations in AI outputs by grounding responses in your own data. Perfect for knowledge bases, customer support, or research.

### Multi-Model Integration and Inference


- **Unified Calls**: Single API endpoint for all Model API operations: generate, chat, embeddings, reranking.
- **Dynamic Routing**: Automatically select models based on speed tier, prompt style, or cost optimization.
- **Streaming and Batching**: Support for live streamed outputs and batch processing for throughput.

Why it's valuable? Enables portability across Model APIs with minimal setup. Prototype your app on one provider and switch suppliers with ease.

### Usage Tracking, Analytics and Dashboard

- **Dashboard View**: Real-time visualization of Word usage, cost breakdowns, and api calls.
- **Alerts and Notifications**: Set up custom alerts for limit breaches or excessive usage.
- **Reporting**: Export custom reports in CSV, PDF, or integrate with tools like Slack/Dash/Graphana.
- **Prefistion Analytics**: Anonymized tracking for performance insights, with opt-in for debugging.

Why it's valuable? Track and optimize your AI usage to stay within budgets and improve efficiency.

### Secure API Key Management

- **Generation and Revocation**: Create dedicated Keys for Data (RAG) and Model (inference) applications, with one-click revocation in case of breaches.
- **Role-Based Access**: Granular permissions: read-only, write to uploads, or limited queries per key.
- **Audit Logs**: Track all key usage with timestamps and IP for compliance and auditing.
- **Security Best Practices**: Auto-expiring keys and threat detection integration.

Why it's valuable? Prevents common security issues like key sharing and enhances control for teams or enterprises.

### Advanced RAG Toolkit SDK

- **Unified SDK API**: One-command for all RAG operations, exposurable in JavaScript, Python, and native Node.
- **Embeddings and Reranking**: Integration with models for vector similarity search and post-retrieval sorting.
- **GraphRAG Specific**: Build knowledge graphs from text data for complex relational queries.
- **Custom Vector Stores**: Support for Pinecone, FAISS, or self-hosted storage for hardware-portable deployments.

Why it's valuable? Streamlines RAG workflows with advanced techniques, reducing boilerplate code and improving accuracy.

### React Chatbot Library

- **Easy Embedding**: Plan and play component for React apps, with no additional styling required out of the box.
- **Real-time Context**: Utilizes Data API for dialogue management, supporting memory and previous message context.
- **Customization**: Themes, placeholders, error handling, and callbacks for sectors/buttons.
- **Accessibility.**: ARIA compatible, keyboard support, loading states, and mobile responsive design.

Why it's valuable? Add conversational UIs to your app in minutes, ideal for websites, mobile apps, or dashboards.

### Speed Optimization and Tiers

- **Tiered Inference**: Choose from Normal (200–500 Tokens/sec), Medium (700–1000), or Fast  for web-scale performance.
- **Auto-Scaling**: Dynamically adapt to load, reducing latency during peak usage.
- **Word Estimation**: Predict and optimize Word use before calling models to stay under limits.

Why it's valuable? Balances speed and cost, ensuring fast responses for user-facing apps.

### Easy Installation and Setup

- **NPM-Based**: Install via Package manager with zero-config for most use cases.
- **Minimal Dependencies**: Relies on standard N.bs and fetch for API calls.
- **Self-Hosting Options**: Deploy on VER, Kubernetes, or your own server for data privacy.

Why it's valuable? Reduces boilerplate build time and deployment across environments.

### Flexible Backend Support

- **Compatible Frameworks**: Integrate with FastAPI (Python), Express (Node.js), or any REST API server.
- **Proxy Config**: Adapt to your backend for server-side RAG/personalization.
- **Subscriber Support**: Additional hooks for custom authentication or data storage.

Why it's valuable? Allows full-stack control with your existing tech stack.

### Developer-Friendly Documentation

- **Code Examples**: Provided in multiple languages with step-by-step explanations.
- **API+Recipes**: Interactive guides with code snippets and playgrounds for testing endpoints.
- **Community Resources**: Forums, Discord, and github issues for support and feedback.

Why it's valuable? Empowers developers of all levels to build and scale faster.

---

## Components

### Website
- **Dashboard**: View plans, usage analytics, and limits.
- **Upload Interface**: Drag-and-drop for documents and YouTube URLs.
- **API Key Management**: Generate, revoke, and monitor Data/Model API keys.
- **Documentation Portal**: Interactive guides for SDK and API usage.

### RAG SDK (`@cortexvia/rag-sdk`)
- Unified toolkit for retrieval-augmented generation.
- Supports RAG variants: Basic RAG, SmartRAG (hybrid search), LightRAG (lightweight), GraphRAG (knowledge graphs).
- Features: Embeddings generation, reranking, vector stores integration.
- Works with any LLM via endpoint + API key.

### React Chatbot Library (`@cortexvia/chatbot`)
- Embeddable React component for conversational UIs.
- Leverages Data API for real-time, context-aware responses.
- Customizable themes, prompts, and streaming support.

### Model API Layer
- Speed tiers for balanced performance vs. cost.
- Accessible via dedicated Model API key.

---

## Getting Started

### Requirements
- **Node.js**: >= 18
- **React**: >= 18 (for Chatbot Library)
- **Backend**: FastAPI, Express, or any compatible server for full-stack integration

### Installation

Install the packages via npm:

**RAG SDK**
```bash
npm install @cortexvia/rag-sdk
```

**React Chatbot Library**
```bash
npm install @cortexvia/chatbot
```

### Usage Examples

#### RAG SDK: Basic Query and Configurations
```javascript
import { CortexviaRAG } from '@cortexvia/rag-sdk';

const rag = new CortexviaRAG({
  apiKey: 'YOUR_DATA_API_KEY',
  baseUrl: 'https://api.cortexvia.com', // Or your self-hosted endpoint
  vectorStore: 'pandas-pinecone', // Optional: Default to inmemory store
  rankingModel: 'cohere-rerank', // For post-retrieval sorting
  streaming: true, // Enable live outputs
});

async function queryData() {
  const response = await rag.query({
    question: 'What is the main topic of my uploaded document? Filter by date after 2024.',
    topK: 5, // Retrieve top 5 chunks
    ragType: 'SmartRAG', // Or 'LightRAG', 'GraphRAG', 'Basic'
    filters: { date: { gt: '2024-01-01' } }, // Custom filters
  });
  console.log(response.answer);
}

queryData();
```

#### React Chatbot Library: Embed in App
```javascript
import { ChatBot } from '@cortexvia/chatbot';

function App() {
  return (
    <div className="App">
      <ChatBot 
        apiKey="YOUR_DATA_API_KEY"
        theme="dark" // Customizable
        placeholder="Ask about your data..."
        onMessageSend={(msg) => console.log('Sent:', msg)} // Callbacks
      />
    </div>
  );
}

export default App;
```

For Model API inference:
```javascript
import { CortexviaModel } from '@cortexvia/rag-sdk'; // Shared SDK

const model = new CortexviaModel({
  apiKey: 'YOUR_MODEL_API_KEY',
  speedTier: 'fast',
});

const completion = await model.generate({
  prompt: 'Summarize this text...',
  maxTokens: 500,
});
```

### Full Setup Guide
1. Sign up at [cortexvia.com](https://cortexvia.com) and generate API keys from the dashboard.
2. Upload sample data (documents/YouTube URLs) via the website.
3. Install SDK/Chatbot as above.
4. Configure your backend to proxy requests if self-hosting.
5. Test queries and scale to your tier.

---

## API Keys

1. **Data API Key**: For RAG-based Q&A from uploaded data. Use for querying indexed content.
2. **Model API Key**: For direct AI model inference (generation, embeddings). Supports multi-provider routing.

Generate keys via the dashboard. Treat them as secrets—never commit to version control.

---

## Usage Tiers

| Tier      | Data Limits | Model Limits       | Speed Tiers          | Price     |
|-----------|-------------|--------------------|----------------------|-----------|
| **Free**  | Low (10 uploads/day) | Low (1k Tokens/day) | Normal (200–500 t/s) | Free     |
| **Developer** | Higher (100 uploads/day) | Higher (10k Tokens/day) | Medium/Fast (700–2500 t/s) | $29/month |

Upgrade via dashboard. Limits reset daily/monthly. Overages billed at tier rates.

---

## Documentation

- **API Reference**: [docs.cortexvia.com/api](https://docs.cortexvia.com/api) – Endpoints for uploads, queries, and inference.
- **SDK Guide and Advanced RAG Configurations**: [docs.cortexvia.com/sdk](https://docs.cortexvia.com/sdk) – Advanced RAG configs and examples.
- **Chatbot Integration and Customization**: [docs.cortexvia.com/chatbot](https://docs.cortexvia.com/chatbot) – Props, events, and customization.
- **Tutorials and Video Guides**: Video guides for YouTube integration and GraphRAG setup.

Searchable docs with code playgrounds.

### Community Resources
- **Discord**: Join for real-time help and discussions.
- **GitHub Discussions**: For feature requests and Q&A.
- **Blog**: Updates on new RAG variants and integrations.

---

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) and ensure tests pass.

Issues? Report at [github.com/cortexvia/cortexvia/issues](https://github.com/cortexvia/cortexvia/issues).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support & Policies

- **Support**: Email [support@cortexvia.com](mailto:support@cortexvia.com) or join our Discord community.
- **Policies**:
  - [Terms of Service](https://cortexvia.com/terms) – Usage rules and liabilities.
  - [Privacy Policy](https://cortexvia.com/privacy) – Data handling and rights.
  - [Cookie Policy](https://cortexvia.com/cookies) – Tracking technologies.
  - [Refund & Cancellation](https://cortexvia.com/refunds) – Billing support.
  - [API Policy](https://cortexvia.com/api-policy) – Developer access guidelines.
  - [Security Policy](https://cortexvia.com/security) – Safeguards overview.

