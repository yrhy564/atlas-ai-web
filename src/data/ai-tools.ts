/*
 * ATLAS AI 공통 데이터
 *
 * 앞으로 AI 이름, 설명, 난이도, 장점, 추천 대상 등을 수정할 때
 * 이 파일만 변경하면 AI 찾기·비교·진단 페이지에 함께 반영됩니다.
 *
 * 실제 홈페이지 공개 전에는 공식 홈페이지를 기준으로
 * 기능, 가격과 이용 조건을 검증해야 합니다.
 */

export type AiTool = {
  name: string;
  initial: string;
  color: string;
  category: string;
  summary: string;
  categories: string[];
  difficulty: "쉬움" | "보통" | "어려움";
  pricing: string;
  bestFor: string;
  purpose: string;
  strengths: string[];
  cautions: string[];
  profiles: {
    purpose: string[];
    experience: string[];
    budget: string[];
    priority: string[];
  };
};

export const AI_CATEGORIES = [
  "전체",
  "문서·보고서",
  "자료조사",
  "이미지 제작",
  "PPT 제작",
  "코딩",
  "업무 자동화",
];

export const aiTools: AiTool[] = [
  {
    name: "ChatGPT",
    initial: "C",
    color: "#0B1831",
    category: "범용 AI",
    summary:
      "문서 작성, 아이디어 정리, 질문 답변과 코딩 등 다양한 업무에 활용할 수 있습니다.",
    categories: ["문서·보고서", "자료조사", "코딩", "업무 자동화"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "AI를 처음 사용하는 개인과 직장인",
    purpose: "문서 초안, 아이디어 정리, 질문 답변과 코딩 지원",
    strengths: [
      "다양한 업무에 폭넓게 활용 가능",
      "초보자가 시작하기 쉬움",
    ],
    cautions: [
      "중요한 정보는 별도로 사실 확인 필요",
      "민감한 개인정보 입력 주의",
    ],
    profiles: {
      purpose: ["document", "research", "coding", "automation"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["easy", "speed", "automation"],
    },
  },
  {
    name: "Claude",
    initial: "A",
    color: "#A85F3B",
    category: "문서 분석",
    summary:
      "긴 문서 분석, 내용 정리와 자연스러운 글쓰기에 활용할 수 있습니다.",
    categories: ["문서·보고서", "자료조사", "코딩"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "긴 문서와 글을 자주 다루는 사용자",
    purpose: "긴 문서 분석, 글쓰기, 내용 요약과 코딩 지원",
    strengths: [
      "긴 문서 중심의 작업에 활용 가능",
      "자연스러운 문장 구성에 활용",
    ],
    cautions: [
      "결과물의 정확성을 직접 검토해야 함",
      "서비스별 사용 한도 확인 필요",
    ],
    profiles: {
      purpose: ["document", "research", "coding"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["quality", "easy"],
    },
  },
  {
    name: "Gemini",
    initial: "G",
    color: "#2864DC",
    category: "검색·업무",
    summary:
      "자료 탐색, 문서 작성과 다양한 업무 지원에 활용할 수 있습니다.",
    categories: ["문서·보고서", "자료조사", "코딩"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "다양한 업무 도구를 사용하는 사용자",
    purpose: "자료 탐색, 문서 작성, 아이디어 정리와 코딩 지원",
    strengths: [
      "다양한 업무에 활용 가능",
      "자료 탐색과 문서 작성 지원",
    ],
    cautions: [
      "출처와 답변의 정확성 검토 필요",
      "기능과 제공 범위가 변경될 수 있음",
    ],
    profiles: {
      purpose: ["document", "research", "coding"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "Perplexity",
    initial: "P",
    color: "#168C91",
    category: "자료조사",
    summary:
      "질문을 바탕으로 정보를 탐색하고 관련 출처를 확인할 때 활용합니다.",
    categories: ["자료조사"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "빠르게 자료를 조사하고 싶은 사용자",
    purpose: "질문 기반 검색, 자료조사와 출처 확인",
    strengths: [
      "정보 탐색 과정에 활용하기 쉬움",
      "자료 출처 확인에 도움",
    ],
    cautions: [
      "표시된 출처 내용을 직접 확인해야 함",
      "전문적인 판단을 완전히 대신할 수 없음",
    ],
    profiles: {
      purpose: ["research"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["quality", "speed", "easy"],
    },
  },
  {
    name: "Midjourney",
    initial: "M",
    color: "#111827",
    category: "이미지 제작",
    summary:
      "콘셉트 이미지와 다양한 스타일의 시각 자료를 제작할 때 활용합니다.",
    categories: ["이미지 제작"],
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "디자인과 콘텐츠를 제작하는 사용자",
    purpose: "이미지 생성, 콘셉트 제작과 시각적 아이디어 표현",
    strengths: [
      "다양한 스타일의 이미지 제작 가능",
      "콘셉트 시각화에 활용",
    ],
    cautions: [
      "원하는 결과를 위한 설명 작성 연습 필요",
      "상업적 사용 조건 확인 필요",
    ],
    profiles: {
      purpose: ["image"],
      experience: ["intermediate", "advanced"],
      budget: ["paid"],
      priority: ["quality"],
    },
  },
  {
    name: "Canva",
    initial: "C",
    color: "#7C3AED",
    category: "디자인·PPT",
    summary:
      "이미지, 카드뉴스와 프레젠테이션을 쉽게 디자인할 때 활용합니다.",
    categories: ["이미지 제작", "PPT 제작"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "디자인 비전문가, 소상공인과 콘텐츠 제작자",
    purpose: "이미지, 카드뉴스와 프레젠테이션 디자인",
    strengths: [
      "템플릿을 활용해 쉽게 시작 가능",
      "다양한 디자인 작업을 한곳에서 진행",
    ],
    cautions: [
      "일부 기능은 요금제 확인 필요",
      "사용하는 자료의 라이선스 확인 필요",
    ],
    profiles: {
      purpose: ["image", "presentation"],
      experience: ["beginner", "intermediate"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "Gamma",
    initial: "G",
    color: "#7C55E7",
    category: "PPT 제작",
    summary:
      "발표자료, 제안서와 간단한 웹 문서를 빠르게 구성할 때 활용합니다.",
    categories: ["PPT 제작", "문서·보고서"],
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "발표자료와 제안서를 빠르게 구성하려는 사용자",
    purpose: "발표자료, 제안서와 간단한 웹 문서 구성",
    strengths: [
      "자료 구조와 초안을 빠르게 구성",
      "디자인 경험이 적어도 시작 가능",
    ],
    cautions: [
      "최종 내용과 디자인 검토 필요",
      "세부 편집 범위 확인 필요",
    ],
    profiles: {
      purpose: ["presentation", "document"],
      experience: ["beginner", "intermediate"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "GitHub Copilot",
    initial: "G",
    color: "#24292F",
    category: "코딩",
    summary:
      "코드 작성과 개발 작업을 지원하는 프로그래밍 보조 도구입니다.",
    categories: ["코딩"],
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "개발자와 코딩 학습자",
    purpose: "코드 작성, 개발 보조와 프로그래밍 학습",
    strengths: [
      "코드 작성 과정의 생산성 향상 지원",
      "개발 환경에서 활용 가능",
    ],
    cautions: [
      "생성된 코드는 반드시 검토하고 테스트해야 함",
      "보안과 라이선스 확인 필요",
    ],
    profiles: {
      purpose: ["coding"],
      experience: ["intermediate", "advanced"],
      budget: ["paid"],
      priority: ["speed", "automation"],
    },
  },
  {
    name: "Zapier",
    initial: "Z",
    color: "#FF4F00",
    category: "업무 자동화",
    summary:
      "여러 업무 서비스를 연결해 반복 작업을 자동화할 때 활용합니다.",
    categories: ["업무 자동화"],
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "반복 업무를 줄이려는 개인과 기업",
    purpose: "여러 서비스 연결과 반복 업무 자동화",
    strengths: [
      "다양한 업무 도구 연결에 활용",
      "코딩 없이 자동화를 시작할 수 있음",
    ],
    cautions: [
      "자동화 실행 전 충분한 테스트 필요",
      "서비스 연결 조건과 요금 확인 필요",
    ],
    profiles: {
      purpose: ["automation"],
      experience: ["intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["automation", "speed"],
    },
  },
];

export function getAiToolSlug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}
