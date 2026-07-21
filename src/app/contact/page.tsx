"use client";

import { FormEvent, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#0B1831]"><SiteHeader /><main>
      <section className="bg-[linear-gradient(120deg,#082956,#0d3c72)] px-6 py-16 text-white"><div className="mx-auto max-w-5xl"><p className="text-sm font-black tracking-widest text-[#55D6C3]">CONTACT ATLAS AI</p><h1 className="mt-4 text-4xl font-black sm:text-5xl">기업 AI 활용을 함께 고민합니다</h1><p className="mt-5 max-w-2xl leading-7 text-slate-300">도입 검토, 교육, 업무 자동화와 협업 문의를 남겨주세요. 현재 폼은 홈페이지 초안용입니다.</p></div></section>
      <section className="px-6 py-14"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
        <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10"><div className="grid gap-6 sm:grid-cols-2"><label className="text-sm font-bold">회사명<input required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#18B7A0]" placeholder="회사명을 입력하세요" /></label><label className="text-sm font-bold">담당자명<input required className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#18B7A0]" placeholder="이름을 입력하세요" /></label><label className="text-sm font-bold">이메일<input required type="email" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#18B7A0]" placeholder="name@company.com" /></label><label className="text-sm font-bold">문의 유형<select className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none focus:border-[#18B7A0]"><option>AI 도입 상담</option><option>기업 교육</option><option>업무 자동화</option><option>제휴 및 기타</option></select></label></div><label className="mt-6 block text-sm font-bold">문의 내용<textarea required rows={7} className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-[#18B7A0]" placeholder="현재 고민하고 있는 업무와 원하는 결과를 알려주세요." /></label><button className="mt-6 w-full rounded-xl bg-[#18B7A0] px-6 py-4 font-black text-white hover:bg-[#109683]">문의 내용 확인</button>{submitted&&<p className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-bold text-emerald-800">폼 화면이 정상적으로 작동합니다. 실제 전송 기능은 백엔드 연결 단계에서 추가합니다.</p>}</form>
        <aside className="h-fit rounded-2xl bg-[#082956] p-7 text-white"><h2 className="text-xl font-black">문의 전에 확인하세요</h2><ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300"><li>✓ 적용하고 싶은 업무</li><li>✓ 현재 사용 중인 도구</li><li>✓ 예상 사용자 수</li><li>✓ 원하는 도입 시기</li></ul><p className="mt-7 border-t border-white/10 pt-6 text-sm text-slate-400">실제 연락처와 개인정보 동의 항목은 운영 준비 단계에서 확정합니다.</p></aside>
      </div></section>
    </main><SiteFooter /></div>
  );
}
