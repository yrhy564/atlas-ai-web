import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <SiteHeader />
      <main>
        <section className="bg-[#0B1831] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-widest text-[#55D6C3]">ATLAS GUIDE</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">AI를 실제 업무에 활용하는 방법</h1>
            <p className="mt-5 max-w-2xl leading-7 text-slate-300">도구 선택부터 결과 검토까지, 처음 시작하는 분을 위한 실용적인 기준을 제공합니다.</p>
          </div>
        </section>
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {guides.map((guide, index) => (
              <Link href={`/guides/${guide.slug}`} key={guide.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-black text-[#109683]">GUIDE {String(index + 1).padStart(2, "0")} · {guide.category}</span>
                <h2 className="mt-5 text-xl font-black leading-8 text-[#0B1831]">{guide.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">{guide.summary}</p>
                <p className="mt-6 text-sm font-bold text-[#109683]">가이드 읽기 →</p>
              </Link>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-7xl rounded-3xl bg-[#18B7A0] p-8 text-white sm:flex sm:items-center sm:justify-between">
            <div><p className="font-bold">내 조건에 맞는 도구가 궁금한가요?</p><h2 className="mt-2 text-2xl font-black">3분 무료 진단으로 먼저 확인하세요</h2></div>
            <Link href="/diagnosis" className="mt-6 inline-flex rounded-xl bg-[#0B1831] px-6 py-4 font-bold text-white sm:mt-0">무료 AI 진단</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
