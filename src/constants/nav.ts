import { NavItem } from "@/types";


export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: "dashboard",
    active: true,
  },
  {
    label: "Wallets",
    href: "/wallets",
    icon: "account_balance_wallet",
  },
  {
    label: "Transactions",
    href: "/transactions",
    icon: "add_circle",
  },
  {
    label: "Debt Tracker",
    href: "/debts",
    icon: "payments",
  },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  {
    label: "Settings",
    href: "/settings",
    icon: "settings",
  },
  {
    label: "Logout",
    href: "/logout",
    icon: "logout",
  },
];
