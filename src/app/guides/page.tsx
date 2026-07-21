import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const guides = [
  { title: "직장인을 위한 AI 도구 선택 기준", summary: "목적, 사용 난이도, 비용과 결과 검증 방법을 기준으로 도구를 고르는 순서를 안내합니다." },
  { title: "무료 AI와 유료 AI의 차이", summary: "무료로 먼저 검증할 항목과 유료 전환 전에 확인해야 할 사용량·보안 조건을 정리합니다." },
  { title: "AI로 보고서 초안 만드는 방법", summary: "자료 정리부터 목차, 초안, 사실 확인까지 안전하게 보고서를 만드는 기본 흐름을 소개합니다." },
];

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
              <article key={guide.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-xs font-black text-[#109683]">GUIDE {String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 text-xl font-black leading-8 text-[#0B1831]">{guide.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">{guide.summary}</p>
                <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm font-bold text-amber-900">상세 가이드 준비 중</p>
              </article>
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
