"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "홈" },
  { href: "/ai", label: "AI 찾기" },
  { href: "/compare", label: "AI 비교" },
  { href: "/guides", label: "활용 가이드" },
  { href: "/contact", label: "기업 문의" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href))
      ? "text-[#18B7A0]"
      : "text-slate-600 hover:text-[#18B7A0]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        <Link href="/" className="relative block h-11 w-32 shrink-0 overflow-hidden focus-visible:outline-none sm:h-12 sm:w-48" aria-label="ATLAS AI 홈">
          <Image
            src="/atlas-ai-logo-transparent.png"
            alt="ATLAS AI"
            fill
            sizes="192px"
            className="scale-[1.08] object-cover object-center"
            loading="eager"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-8 text-sm font-bold lg:flex" aria-label="주요 메뉴">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/diagnosis" className="ml-auto rounded-xl bg-[#18B7A0] px-4 py-3 text-sm font-bold text-white hover:bg-[#109683] lg:ml-6 lg:px-5">
          무료 AI 진단
        </Link>
        <button
          type="button"
          className="ml-2 grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-xl text-[#0B1831] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden" aria-label="모바일 메뉴">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className={`rounded-lg px-3 py-3 text-sm font-bold ${linkClass(item.href)}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
