import { AppSidebar } from "@/components/layout/Sidebar";
import { NavItem } from "@/types";
import { ReactNode } from "react";

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/", icon: "dashboard", active: true },
  { label: "Wallets List", href: "/wallets", icon: "account_balance_wallet" },
  { label: "Debt Tracker", href: "/debts", icon: "payments" },
  { label: "Add Transaction", href: "/transactions", icon: "add_circle" },
];

const FOOTER_ITEMS: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings" },
  { label: "Logout", href: "/logout", icon: "logout" },
];
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-3">
      <AppSidebar
        brand="FinancePro"
        subtitle="Personal Dashboard"
        navItems={NAV_ITEMS}
        footerItems={FOOTER_ITEMS}
      />
      <div className="flex-1 w-full min-w-0"> {children}</div>
    </div>
  );
};

export default DashboardLayout;
