import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[#071326] px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">
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
        <p className="text-sm">© 2026 ATLAS AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
