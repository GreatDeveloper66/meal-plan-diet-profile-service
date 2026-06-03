# meal-plan-diet-profile-service

A microservice responsible for storing and managing user diet profiles. Part of the Meal Plan & Grocery Discovery application — a full-stack microservice architecture for personalized meal planning and local grocery store discovery.

---

## Overview

This service manages each user's dietary profile — the core data used to personalize meal plans throughout the application. It stores information including activity level, diet type, budget preference, age, sex, weight, and height. This data is consumed by the AI meal planning service to generate contextually appropriate meal plans.

---

## Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express
- **Database:** MongoDB

---

## Features

- Create and store user diet profiles
- Retrieve diet profiles by user
- Update existing diet profiles
- Delete diet profiles

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `api/create-diet-profile` | Create a new diet profile |
| GET | `api/get-diet-profile` | Retrieve a user's diet profile |
| PUT | `api/update-diet-profile` | Update a user's diet profile |
| DELETE | `api/delete-diet-profile` | Delete a user's diet profile |

---

## Diet Profile Schema

```typescript
{
  activityFactor: "sedentary" | "lightlyActive" | "moderatelyActive" | "veryActive" | "extraActive"
  dietType: "normal" | "keto" | "vegan" | "vegetarian" | "high protein"
  budgetLevel: "minimal" | "normal" | "premium"
  age: number
  sex: "male" | "female"
  weight: { value: number, unit: "kg" | "lb" }
  height: { value: number, unit: "cm" | "in" }
}
```

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
PORT=3002
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (local or cloud)

### Installation

```bash
git clone https://github.com/yourusername/meal-plan-diet-profile-service.git
cd meal-plan-diet-profile-service
npm install
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## Project Architecture

This service is one of six components in the Meal Plan & Grocery Discovery application:

| Service | Responsibility |
|---------|---------------|
| user-auth-service | Authentication & JWT management |
| **meal-plan-diet-profile-service** | Diet profile storage & management |
| ai-meal-planner-backend | AI-powered meal plan generation |
| meal-planner-user-meal-plan-service | User meal plan storage |
| meal-plan-grocery-service | Grocery store discovery via Google API |
| meal-plan-frontend | React frontend |
| meal-planner-backend-for-frontend | BFF orchestration layer |
