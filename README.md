# Sales Dashboard — Next.js (App Router) + NestJS (code)  

A production-ready dashboard based on the given Figma. The UI is built with **Next.js 14** and **MUI**, and the API endpoints are **implemented twice**:

1) **Deployed (production)**: **Next.js API routes** (serverless), with Swagger UI hosted **inside** the Next app.  
2) **Code-only (not deployed)**: A full **NestJS + TypeORM** backend lives in `backend/` for completeness and local testing.

> **Why Next.js for the live backend?**  
> Render and Railway require payment methods and are not fully free in practice. I used **free trials/credits** for evaluation, but for a frictionless live demo I shipped the backend using **Next API routes on Vercel**.  
> - Production site: **https://sales-dashboard-template.vercel.app**  
> - Swagger (UI hosted in Next): **https://sales-dashboard-template.vercel.app/swagger**

---

## ✨ Features

- Pixel-perfect, responsive layout from Figma
- All required endpoints implemented with mocked data
- Swagger/OpenAPI UI at `/swagger` (served by Next)
- Validation-ready DTOs in Nest codebase (for local/full backend)
- Clean project structure with `frontend/` and `backend/`
- Easy local dev (no Docker required)

---

## 🔗 Links

- **Figma** (reference): https://www.figma.com/design/DdOlRUkYytDFIAe6rnLLDV/Sales-Dashboard-Design--Community-?node-id=8121-2  
- **Production (Next app + serverless API)**: https://sales-dashboard-template.vercel.app  
- **Swagger (Next-hosted UI)**: https://sales-dashboard-template.vercel.app/swagger  

---

## 🏗️ Tech Stack

**Frontend**
- Next.js 14+ (TypeScript, App Router)
- MUI
- Charting: Recharts / Chart.js
- State: Zustand / Redux Toolkit / Context (lightweight store)
- Fetch/Axios

**Backend**
- **Production**: Next.js API routes (serverless on Vercel) with mocked data
- **Local optional**: NestJS + PostgreSQL + TypeORM (code present but not deployed)

**Infra**
- Env config, CORS, logging
- No Docker required

---

## 📁 Project Structure

