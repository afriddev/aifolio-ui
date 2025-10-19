
  # Cortexari

  Cortexari is a unified AI platform for developers and users to upload documents and YouTube video URLs, generate API keys, and access intelligent answers through RAG-based systems or AI models. It includes a website, SDK, and React chatbot library for seamless integration.

  ---

  ## Table of Contents
  - [Overview](#overview)
  - [Features](#features)
  - [Components](#components)
  - [Getting Started](#getting-started)
  - [API Keys](#api-keys)
  - [Usage Tiers](#usage-tiers)
  - [Contributing](#contributing)
  - [License](#license)

  ---

  ## Overview
  Cortexari allows users to:
  - Upload documents or YouTube URLs.
  - Ask questions to get answers from uploaded data (RAG).
  - Access multiple AI models for inference via API.
  - Track usage and manage plan tiers (Free, Developer).

  ---

  ## Features
  - **Website**: Upload interface, dashboard, documentation, API key management.
  - **RAG SDK**: RAG, SmartRAG, LightRAG, GraphRAG, embeddings, reranking.
  - **React Chatbot Library**: Plug-and-play chat UI using Data API.
  - **Model API Layer**: Supports multiple providers (OpenAI, Groq, Cerebras, etc.).
  - **Speed Tiers**: Fast (2000–2500 tokens/sec), Medium (700–1000), Normal (200–500).

  ---

  ## Components

  ### Website
  - Dashboard with plans & usage limits.
  - Data upload: documents and YouTube video URLs.
  - API key generation (Data API & Model API).
  - Documentation portal for SDK and API usage.

  ### RAG SDK
  - Unified toolkit for retrieval and reasoning.
  - Works with any model via URL + API key.

  ### React Chatbot Library
  - Easy to embed in React projects.
  - Uses Data API key for contextual answers.

  ### Model API Layer
  - Multi-model support with speed tiers.
  - Access via Model API key.

  ---

  ## Getting Started

  ### Requirements
  - Node.js >= 18
  - React >= 18
  - Backend: FastAPI / Express / Your choice

  ### Installation

  **React Chatbot Library**
  ```bash
  npm install @cortexari/chatbot
  ```

  **RAG SDK**
  ```bash
  npm install @cortexari/rag-sdk
  ```

  ### Usage Example
  ```javascript
  import { ChatBot } from '@cortexari/chatbot';

  function App() {
    return <ChatBot apiKey="YOUR_DATA_API_KEY" />;
  }
  ```

  ---

  ## API Keys
  1. **Data API Key** – For Q&A from uploaded data.  
  2. **Model API Key** – For model inference.

  ---

  ## Usage Tiers
  | Tier       | Data Limits | Model Limits | Speed |
  |-----------|------------|-------------|-------|
  | Free      | Low        | Low         | Normal |
  | Developer | Higher     | Higher      | Medium/Fast |

  ---

  ## Contributing
  - Fork the repository
  - Create a feature branch
  - Submit a pull request

  ---

  ## License
  This project is licensed under the MIT License.

  ---

  **Cortexari** – Smart, intelligent AI platform for knowledge, data, and models.
