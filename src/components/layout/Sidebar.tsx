"use client";

import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Wallet,
  CreditCard,
  PlusCircle,
  Settings,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { NavItem, SidebarProps } from "../../types";

// ─── Icon registry ────────────────────────────────────────────────────────────
export const LUCIDE_ICONS: Record<string, LucideIcon> = {
  dashboard: LayoutDashboard,
  account_balance_wallet: Wallet,
  payments: CreditCard,
  add_circle: PlusCircle,
  settings: Settings,
  logout: LogOut,
};

// ─── NavLink ──────────────────────────────────────────────────────────────────
function NavLink({
  href,
  icon,
  label,
  active = false,
  onClick,
}: NavItem & { onClick?: () => void }) {
  const Icon = LUCIDE_ICONS[icon];

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md text-[12px] font-medium tracking-wider uppercase transition-colors border-l-4",
        active
          ? "bg-secondary/10 text-secondary border-secondary"
          : "text-on-surface-variant hover:bg-surface-container-low border-transparent",
      )}
    >
      {Icon && <Icon size={18} strokeWidth={1.75} />}
      <span>{label}</span>
    </a>
  );
}

// ─── Sidebar inner (shared between desktop + sheet) ───────────────────────────
function SidebarInner({
  brand,
  subtitle,
  navItems,
  footerItems,
  onNavClick,
}: SidebarProps & { onNavClick?: () => void }) {
  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="p-6">
        <h1 className="text-[24px] font-bold leading-8 tracking-tight text-on-surface">
          {brand}
        </h1>
        <p className="text-[12px] font-medium tracking-wider text-on-surface-variant mt-1">
          {subtitle}
        </p>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-2 space-y-1" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} onClick={onNavClick} />
        ))}
      </nav>

      {/* Footer nav */}
      <div className="border-t border-outline-variant mt-auto p-2">
        {footerItems.map((item) => (
          <NavLink key={item.href} {...item} onClick={onNavClick} />
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar (desktop fixed + mobile sheet) ───────────────────────────────────
export function AppSidebar(props: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Desktop: fixed sidebar ── */}
      <aside className="hidden lg:flex h-screen w-65 bg-surface shadow-sm border-r border-outline-variant flex-col">
        <SidebarInner {...props} />
      </aside>

      {/* ── Mobile: hamburger trigger ── */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface border border-outline-variant rounded-md text-on-surface-variant shadow-sm"
      >
        <Menu size={20} />
      </button>

      {/* ── Mobile: Sheet ── */}
      <div className="lg:hidden p-2 absolute">
        <Sheet>
          <SheetTrigger>
            <div
              aria-label="Open navigation"
              className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface border border-outline-variant rounded-md text-on-surface-variant shadow-sm"
            >
              <Menu size={20} />
            </div>
          </SheetTrigger>

          <SheetContent side="left" className="p-0 w-72 [&>button]:hidden">
            <SheetTitle></SheetTitle>

            <SidebarInner {...props} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
