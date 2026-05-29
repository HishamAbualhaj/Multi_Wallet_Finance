# Multi-Wallet Personal Finance Manager

A personal finance management application that helps users track money across multiple wallets, manage transactions, and monitor debts in a simple and fast interface.

## About The Project

This project is a single-user finance tracker built to make managing personal money easier. Users can create multiple wallets, add income and expense transactions, and keep track of debts and repayments.

The application focuses on simplicity and speed, with all balances calculated directly from transaction history to ensure accuracy.

## Main Features

- Create and manage multiple wallets
- Track income and expense transactions
- View live wallet balances
- Add money to wallets quickly
- Track debts:
  - Money you owe
  - Money owed to you
- Settle debts with automatic transaction creation
- Dashboard with:
  - Total balances
  - Recent activity
  - Income vs expense charts
- Search and filter transactions
- Responsive dark-themed UI

## Tech Stack

- React 19
- Next 16
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- TanStack Query
- Supabase Postgres
- Recharts

## Project Structure

The application contains four main sections:

- Dashboard
- Wallets
- Transactions
- Debts

## Business Logic

Wallet balances are not stored directly in the database.

They are calculated using:

```ts
balance = initial_balance + income - expenses
```

When a debt is settled, the system can automatically create a related transaction in the selected wallet to keep balances accurate.

<!-- ## Current MVP Scope

This MVP is intentionally simple and currently does not include:

- Authentication
- Multi-user support
- Currency conversion
- Budgets or savings goals
- Recurring transactions
- Exporting reports -->

## Goal

The goal of this project is to provide a clean and minimal finance management experience with clear financial tracking and simple workflows.