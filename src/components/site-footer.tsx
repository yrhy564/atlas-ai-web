import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#071326] px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">
        <div>
          <Link href="/" className="text-xl font-black text-white">
            ATLAS <span className="text-[#18B7A0]">AI</span>
          </Link>
          <p className="mt-2 text-sm">사람들이 원하는 결과를 AI로 달성하도록 돕습니다.</p>
        </div>
        <p className="text-sm">© 2026 ATLAS AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
