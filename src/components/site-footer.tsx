import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[#071326] px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 focus-visible:outline-none" aria-label="ATLAS AI 홈">
            <span className="relative block h-8 w-9 overflow-hidden" aria-hidden="true">
              <Image
                src="/atlas-ai-logo-transparent.png"
                alt=""
                width={169}
                height={77}
                className="absolute -left-[15px] -top-[20px] max-w-none"
              />
            </span>
            <span className="text-lg font-black tracking-[-0.04em] text-white">ATLAS AI</span>
          </Link>
          <p className="mt-2 text-sm">사람들이 원하는 결과를 AI로 달성하도록 돕습니다.</p>
        </div>
        <div className="flex flex-col gap-4 text-sm md:items-end">
          <nav className="flex flex-wrap gap-4" aria-label="하단 메뉴">
            <Link href="/about" className="hover:text-white">서비스 소개</Link>
            <Link href="/contact" className="hover:text-white">기업 문의</Link>
            <Link href="/privacy" className="hover:text-white">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white">이용약관</Link>
          </nav>
          <p>© 2026 ATLAS AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
