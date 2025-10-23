# Cortexvia Documentation

Cortexvia is a powerful platform designed for fullfill various needs. Whether you're a developer, a business owner, or looking expand your platform with ai capabilities, Cortexvia has something to offer.

- **For Developers -** Cortexvia provides robust and most advanced tools and APIs to access various ai models, enabling you to build intelligent applications with ease.

- **For Business Owners -** We are offering solutions that helps you streamline operations, enhance customer experiences, and drive growth through ai-powered insights.

## About Cortexvia

- Cortexvia is a cutting-edge platform that leverages artificial intelligence to provide innovative solutions for developers and businesses. Our mission is to provide ai tools and llm Models that empower users to create,innovate, and succeed in the digital age.

## What Cortexvia Offers

- **AI Models -** Access Various `llm` models to power your application with ai capabilities.
- **API Inference -** Access our AI Models via simple and easy-to-use APIs. and integrate them into your applications seamlessly. Our APIs are designed to be developer-friendly, ensuring quick integration and deployment. and support OpenAI SDK for easy adoption.
- **Developer Tools -** We are providing open source SDKs and libraries to help developers integrate ai into their applications seamlessly.
  - **Cortexrag -** An open-source library for building retrieval-augmented generation (RAG) Application using cortexvia platform. This SDK includes various RAG methods,
    - **Rag -** A method split all your documents into chunks and store then in vector database for retrieval. Here we are converting chunks into embeddings.
    - **Smart Rag -** An advanced RAG method That uses LLM model to extract most possible questions from chunks and store then in vector database for retrieval. Here we are converting both questions and chunks into embeddings for better results.
    - **Light Rag -** An advanced RAG method which excels in performance and cost.
    - **Graph-rag -** An advanced RAG method that creates a knowledge graph from your documents for enhanced retrieval and context understanding.
  - **EmbiRankis -** This is an open-source library for generating high quality embeddings and providing better results from your documents using reranking techniques.
  - **Chatbot Library -** And Advanced Chatbot library built on react for building conversational ai applications with ease. You can use this library to create chatbots that can interact with users naturally and effectively.
- **Business Chatbot -** A specialized library for building AI-powered chatbots tailored for business applications, enabling seamless customer interactions and support.

## Gettting Started

- To get started with Cortexvia, visit our [website](https://cortexvia.com) and sign up for an account. Explore our documentation, APIs, and developer tools to begin building your ai-powered applications today!

## AI Models

- Cortexvia offers a variety of ai models to suit different needs. Cortexvia offers various LLM Models with different capabilities and pricing plans. You can choose the model that best fits your requirements and budget.

- **Free Tier Models**
  | Model | Size | Speed | RPM | RPD | TPM | TPD |
  |-------|------|--------|------|------|------|------|
  | Cortexvia Mini | 8B | 150 TPS | 20 req/min | 800 req/day | 100K Tokens/min | 400K Tokens/day |
  | Cortexvia Nemo | 12B | 180 TPS | 40 req/min | 2000 req/day | 50K Tokens/min | 200K Tokens/day |
  | Cortexvia Small | 24B | 120 TPS | 20 req/min | 500 req/day | 150K Tokens/min | 1000K Tokens/day |
  | Cortexvia Medium | 49B | 100 TPS | 40 req/min | 500 req/day | 100K Tokens/min | 300K Tokens/day |
  | Cortexvia Large | 123B | 50 TPS | 20 req/min | 1500 req/day | 100K Tokens/min | 300K Tokens/day |
  | Cortexvia Flash Mini | 8B | 2200 TPS | 10 req/min | 5000 req/day | 30K Tokens/min | 100K Tokens/day |
  | Cortexvia Flash Small | 70B | 2100 TPS | 20 req/min | 5000 req/day | 30K Tokens/min | 100K Tokens/day |
  | Cortexvia Flash Medium | 109B | 2600 TPS | 15 req/min | 5000 req/day | 30K Tokens/min | 100K Tokens/day |

- **Developer Tier Models**

  | Model                  | Size | Speed    | RPM        | RPD         | TPM             | TPD           |
  | ---------------------- | ---- | -------- | ---------- | ----------- | --------------- | ------------- |
  | Cortexvia Mini         | 8B   | 150 TPS  | 60 req/min | 20K req/day | 100K Tokens/min | 6M Tokens/day |
  | Cortexvia Nemo         | 12B  | 180 TPS  | 60 req/min | 20K req/day | 100K Tokens/min | 5M Tokens/day |
  | Cortexvia Small        | 24B  | 120 TPS  | 60 req/min | 20K req/day | 100K Tokens/min | 4M Tokens/day |
  | Cortexvia Medium       | 49B  | 100 TPS  | 60 req/min | 20K req/day | 100K Tokens/min | 4M Tokens/day |
  | Cortexvia Large        | 123B | 50 TPS   | 60 req/min | 20K req/day | 100K Tokens/min | 1M Tokens/day |
  | Cortexvia Ultra        | 235B | 60 TPS   | 60 req/min | 20K req/day | 100K Tokens/min | 2M Tokens/day |
  | Cortexvia Flash Mini   | 8B   | 2200 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 1M Tokens/day |
  | Cortexvia Flash Small  | 70B  | 2100 TPS | 60 req/min | 14K req/day | 60K Tokens/min  | 1M Tokens/day |
  | Cortexvia Flash Medium | 109B | 2600 TPS | 60 req/min | 14K req/day | 60K Tokens/min  | 1M Tokens/day |
  | Cortexvia Flash Super  | 235B | 1500 TPS | 60 req/min | 14K req/day | 60K Tokens/min  | 1M Tokens/day |
  | Cortexvia Ultra Flash  | 120B | 3000 TPS | 60 req/min | 14K req/day | 60K Tokens/min  | 1M Tokens/day |

- **Cortexvia Metric Definitions**

  | Metric  | Full Form             | Example                                     |
  | ------- | --------------------- | ------------------------------------------- |
  | **TPS** | _Tokens Per Second_   | `150 TPS` = ~150 tokens/sec                 |
  | **RPM** | _Requests Per Minute_ | `60 req/min` = 60 requests every 60 seconds |
  | **RPD** | _Requests Per Day_    | `20K req/day` = 20,000 daily requests       |
  | **TPM** | _Tokens Per Minute_   | `100K Tokens/min` = 100,000 Tokens/minute   |
  | **TPD** | _Tokens Per Day_      | `6M Tokens/day` = 6 million Tokens/day      |

---

- **Additional Notes**
  - **Request:** A single API call or message completion counts as one request.
  - **Speed Tier:** Defined by _TPS_ — higher values mean faster model performance.
  - **Limits Reset:** RPM and RPD reset every minute and day respectively.
