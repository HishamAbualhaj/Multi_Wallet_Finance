// ─── Currency ────────────────────────────────────────────────────────────────
export type Currency = "USD" | "ILS" | "EUR" | "GBP";

// ─── Navigation ──────────────────────────────────────────────────────────────
export type NavItem = {
  label: string;
  href: string;
  icon: string; // Material Symbol name
  active?: boolean;
};

// ─── Stat Cards ──────────────────────────────────────────────────────────────
export type StatTrend = "up" | "down" | "neutral";

export interface StatCardData {
  id: string;
  label: string;
  value: string; // pre-formatted e.g. "$124,592.00"
  icon: string; // Material Symbol name
  trend: StatTrend;
  trendLabel: string;
  variant: "default" | "success" | "danger";
}

// ─── Chart ───────────────────────────────────────────────────────────────────
export interface ChartMonth {
  month: string; // e.g. "Jan"
  incomeRatio: number; // 0–1, relative bar height
  expenseRatio: number; // 0–1, relative bar height
}

// ─── Wallet ──────────────────────────────────────────────────────────────────
export type WalletStatus = "Active" | "Inactive" | "Frozen";

export interface WalletData {
  id: string;
  name: string;
  balance: string; // pre-formatted
  currency: Currency;
  icon: string; // Material Symbol name
  meta: string; // e.g. "**** 4920" or "High Yield"
  status: WalletStatus;
}

// ─── Transaction ─────────────────────────────────────────────────────────────
export type TransactionType = "income" | "expense";

export interface TransactionRow {
  id: string;
  title: string;
  category: string;
  icon: string; // Material Symbol name
  wallet: string;
  date: string; // pre-formatted e.g. "Oct 24, 2023"
  amount: string; // pre-formatted e.g. "+$4,500.00" or "-$1,299.00"
  type: TransactionType;
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────
export interface SidebarProps {
  brand: string;
  subtitle: string;
  navItems: NavItem[];
  footerItems: NavItem[];
}
