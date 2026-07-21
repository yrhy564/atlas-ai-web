import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ title, description, sections }: { title: string; description: string; sections: { title: string; body: string }[] }) {
  return <div className="min-h-screen bg-[#F7FAFC] text-[#0B1831]"><SiteHeader/><main><section className="border-b border-slate-200 bg-white px-6 py-14"><div className="mx-auto max-w-4xl"><p className="text-sm font-black text-[#18B7A0]">ATLAS AI POLICY</p><h1 className="mt-4 text-4xl font-black">{title}</h1><p className="mt-5 leading-7 text-slate-500">{description}</p></div></section><section className="px-6 py-12"><article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-7 sm:p-10"><p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">이 문서는 홈페이지 구조 확인을 위한 초안이며, 서비스 공개 전 전문가 검토와 실제 운영 조건 반영이 필요합니다.</p>{sections.map((section)=><section key={section.title} className="border-b border-slate-200 py-8 last:border-0"><h2 className="text-xl font-black">{section.title}</h2><p className="mt-4 leading-8 text-slate-600">{section.body}</p></section>)}</article></section></main><SiteFooter/></div>;
}
