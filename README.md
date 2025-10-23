# **Cortexvia Documentation**

Cortexvia is a powerful AI platform built to fulfill diverse needs — whether you’re a **developer**, **enterprise**, or **business owner**. Cortexvia offers cutting-edge tools, APIs, and SDKs that make it easy to integrate AI and automation into your applications and workflows.

---

## **Who Cortexvia Is For**

- **For Developers —** Build intelligent, AI-powered applications using Cortexvia’s unified API and SDK ecosystem. Access multiple models with one key.
- **For Businesses —** Leverage AI to automate operations, enhance customer experiences, and unlock data-driven growth.

---

##  **About Cortexvia**

Cortexvia is a next-generation AI infrastructure platform designed to make advanced large language models (LLMs), RAG pipelines, and automation tools accessible to everyone.  
Our mission is simple — **empower developers and organizations to create, innovate, and scale** using AI.

---

##  **What Cortexvia Offers**

### **AI Models**
Access multiple high-performance `LLMs` for natural language understanding, generation, and reasoning. Choose the right model based on size, speed, and capability.

### **API Inference**
Integrate Cortexvia’s AI models into your products using developer-friendly REST APIs.  
- Compatible with **OpenAI SDKs** and standard completion endpoints.  
- Fast integration, flexible usage, and scalable deployment.

### **Developer SDKs**
Cortexvia provides open-source SDKs and libraries for rapid development:
- **CortexRAG** – Build Retrieval-Augmented Generation (RAG) systems with multiple strategies:
  - **RAG:** Basic chunk-based vector retrieval.
  - **Smart RAG:** Uses LLM-generated questions + embeddings for deeper retrieval.
  - **Light RAG:** Optimized for speed and efficiency.
  - **Graph RAG:** Builds a knowledge graph for relational and context-aware retrieval.
- **EmbiRankis** – Generate high-quality embeddings and rerank results for improved accuracy.
- **Chatbot Library** – A React-based AI Chatbot SDK for building intelligent chat experiences.
- **Business Chatbot** – Specialized toolkit for enterprise-grade customer chat automation.

---

##  **Getting Started**

1. Visit [**Cortexvia.com**](https://cortexvia.com)  
2. Create your free account.  
3. Explore documentation, APIs, and SDKs.  
4. Start building your AI-powered applications instantly.

---

## **Business Chatbot Query & Speed Limits**

### **Document & Video Limits**
| Limit Type | Free Tier | Developer Tier | Enterprise |
|-------------|------------|----------------|-------------|
| **Document Uploads** | 2 files/day (max 50MB each) | 200 files/day (max 100MB each) | Custom / Unlimited |
| **Supported Formats** | PDF | PDF, DOCX, TXT, Markdown | All text-based formats |
| **Video Uploads** | 1 YouTube URL/day | 50 URLs/day | Unlimited |
| **Processing Speed** | Standard Queue (up to 2 mins) | Priority Queue (10–30 sec) | Instant / Batch Upload API |

### **Query & Message Limits**
| Parameter | Free Tier | Developer Tier | Enterprise |
|------------|------------|----------------|-------------|
| **Daily Queries** | 100 / day | Unlimited / day | Unlimited |
| **Messages per Conversation** | 10 messages | < 100 messages | Unlimited |
| **Context Memory** | 4K Tokens | 64K Tokens | 128K+ Tokens |

### **⚡ Query Speed Tiers**
| Speed Tier | Rate | Description |
|-------------|------|-------------|
| **Low Speed** | 50–200 Tokens/sec | Balanced mode for detailed, reasoning-heavy answers. Default for Free Tier. |
| **Medium Speed** | 100–2000 Tokens/sec | Optimized for faster document retrieval and chat responses. Default for Developer Tier. |
| **High Speed (Flash)** | 1000–3000 Tokens/sec | For production-grade RAG and real-time applications. Flash & Ultra models only. |

> ⏱️ All **data and query limits refresh every 24 hours**.  
> Upgrade your tier for **faster indexing**, **larger uploads**, and **higher query throughput**.

---

##  **AI Models Overview**

Cortexvia offers optimized LLM models under **Free** and **Developer** tiers.  
Choose based on speed, capability, and usage volume.

### **Free Tier Models**
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

---

### **Developer Tier Models**
| Model | Size | Speed | RPM | RPD | TPM | TPD |
|-------|------|--------|------|------|------|------|
| Cortexvia Mini | 8B | 150 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 6M Tokens/day |
| Cortexvia Nemo | 12B | 180 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 5M Tokens/day |
| Cortexvia Small | 24B | 120 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 4M Tokens/day |
| Cortexvia Medium | 49B | 100 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 4M Tokens/day |
| Cortexvia Large | 123B | 50 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 1M Tokens/day |
| Cortexvia Ultra | 235B | 60 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 2M Tokens/day |
| Cortexvia Flash Mini | 8B | 2200 TPS | 60 req/min | 20K req/day | 100K Tokens/min | 1M Tokens/day |
| Cortexvia Flash Small | 70B | 2100 TPS | 60 req/min | 14K req/day | 60K Tokens/min | 1M Tokens/day |
| Cortexvia Flash Medium | 109B | 2600 TPS | 60 req/min | 14K req/day | 60K Tokens/min | 1M Tokens/day |
| Cortexvia Flash Super | 235B | 1500 TPS | 60 req/min | 14K req/day | 60K Tokens/min | 1M Tokens/day |
| Cortexvia Ultra Flash | 120B | 3000 TPS | 60 req/min | 14K req/day | 60K Tokens/min | 1M Tokens/day |

---

## **Cortexvia Metric Definitions**
| Metric | Full Form | Example |
|---------|------------|----------|
| **TPS** | Tokens Per Second | `150 TPS` = ~150 tokens/sec |
| **RPM** | Requests Per Minute | `60 req/min` = 60 requests every 60 seconds |
| **RPD** | Requests Per Day | `20K req/day` = 20,000 daily requests |
| **TPM** | Tokens Per Minute | `100K Tokens/min` = 100,000 Tokens/minute |
| **TPD** | Tokens Per Day | `6M Tokens/day` = 6 million Tokens/day |

---

###  **Additional Notes**
- **Request:** A single API call or message completion counts as one request.  
- **Speed Tier:** Defined by _TPS_ — higher values mean faster model performance.  
- **Limits Reset:** RPM and RPD automatically reset every minute and every 24 hours.  


