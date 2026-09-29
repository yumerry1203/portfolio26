# NAYUHYEONG Portfolio 2026

프론트엔드 개발과 UI 퍼블리싱 경험을 소개하는 개인 포트폴리오입니다.

실무 프로젝트, 프로젝트 아카이브, 개인 프로젝트, 경력과 기술 역량을 반응형 인터페이스와 인터랙션으로 구성했습니다.

## Live Site

[Portfolio 바로가기](https://yumerry1203.github.io/portfolio26/)

## 주요 기능

- GSAP 타임라인을 활용한 인트로 및 Hero 등장 모션
- ScrollTrigger 기반 섹션·카드 스크롤 애니메이션
- 모바일, 태블릿, 데스크톱에 대응하는 반응형 레이아웃
- 모바일 전용 햄버거 메뉴와 우측 슬라이드 드로어
- 주요 프로젝트 상세 모달 및 프로젝트별 Live Service 링크
- 프로젝트별 주요 작업 내용과 개발·문제 해결 사례 관리
- 프로젝트 아카이브 배경 전환 및 콘텐츠 등장 효과
- 개인 프로젝트 상태 배지와 상세 모달
- `prefers-reduced-motion` 환경을 고려한 모션 처리

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Core | React 19, TypeScript 6 |
| Build | Vite 8 |
| Styling | Tailwind CSS 4, CSS |
| Animation | GSAP, ScrollTrigger |
| Quality | ESLint |
| Deployment | GitHub Actions, GitHub Pages |

## 반응형 기준

Tailwind CSS의 모바일 우선 방식으로 구현했습니다.

| 구간 | 너비 | 주요 대응 |
| --- | ---: | --- |
| Mobile | `0px ~ 639px` | 모바일 Hero, 햄버거 메뉴, 단일 컬럼 카드 |
| `sm` | `640px 이상` | 여백·글자·컴포넌트 크기 확장 |
| `md` | `768px 이상` | 태블릿 프로젝트 아카이브 2열 구성 |
| `lg` | `1024px 이상` | Hero 및 섹션별 데스크톱 전환 시작 |
| `xl` | `1280px 이상` | 주요 프로젝트 좌우 배치, Skills 양쪽 구성 |
| `2xl` | `1536px 이상` | 넓은 데스크톱 레이아웃 유지 |

## 화면 구성

| 섹션 | 설명 |
| --- | --- |
| Intro | 3D 로고와 원형 타이포그래피 인트로 |
| Home | 포트폴리오 Hero, 프로필, 협업사 로고 |
| About Me | 소개, 경력 타임라인, 교육 및 자격증 |
| Projects | 주요 프로젝트 카드와 상세 모달 |
| Project Archive | 이전 프로젝트와 담당 범위 아카이브 |
| Side Projects | 개인 프로젝트 카드, 상태 배지, 상세 모달 |
| Skills | Core Stack 차트, 도구, 협업 도구, 기술 목록 |
| Contact | 연락처와 마무리 메시지 |

## 프로젝트 구조

```text
src/
├── App.tsx                         # 전체 섹션 구성 및 인트로 상태 관리
├── main.tsx                        # React 애플리케이션 진입점
├── index.css                       # Tailwind 및 전역 스타일 진입점
│
├── assets/
│   ├── fonts/                      # 로컬 웹폰트
│   └── images/                     # 로고, 아이콘, 프로젝트 이미지
│
├── components/
│   ├── common/                     # Button, Badge, DotLabel 등 공통 UI
│   └── layout/                     # Header, SectionTitle
│
├── data/
│   ├── AboutMe/                    # 경력, 교육, 자격증 데이터
│   ├── Projects/                   # 주요 프로젝트 및 아카이브 데이터
│   └── SideProjects/               # 개인 프로젝트 데이터
│
├── sections/
│   ├── Intro/                      # 첫 진입 인트로
│   ├── Home/                       # Hero 및 Worked With
│   ├── AboutMe/                    # 소개와 경력 정보
│   ├── Projects/                   # 주요 프로젝트와 상세 모달
│   ├── ProjectArchive/             # 프로젝트 아카이브
│   ├── SideProjects/               # 개인 프로젝트와 상세 모달
│   ├── Skills/                     # 차트와 기술 목록
│   └── Contact/                    # 연락처 및 Footer
│
├── styles/
│   ├── reset.css                   # 기본 스타일 초기화 및 컨테이너
│   └── tokens.css                  # 컬러, 폰트, 간격, 그림자 토큰
│
└── type/
    ├── project.ts                  # 주요 프로젝트 타입
    ├── showcase.ts                 # 프로젝트 쇼케이스 타입
    └── sideproject.ts              # 개인 프로젝트 타입
```

## 데이터 관리

프로젝트 콘텐츠와 화면 UI를 분리해 데이터 파일만 수정해도 카드와 모달에 동일하게 반영되도록 구성했습니다.

- 주요 프로젝트: `src/data/Projects/projects.tsx`
- 프로젝트 아카이브: `src/data/Projects/projectArchiveData.ts`
- 개인 프로젝트: `src/data/SideProjects/sideprojects.ts`
- 경력·교육·자격증: `src/data/AboutMe/aboutme.ts`

주요 프로젝트의 `role`, `category`, `skills`는 메인 카드와 상세 모달이 동일한 데이터를 공유합니다.

## 시작하기

### 요구 환경

- Node.js 22 권장
- npm

### 설치 및 실행

```bash
npm install
npm run dev
```

### 코드 검사

```bash
npm run lint
```

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 결과 미리보기

```bash
npm run preview
```

## 배포

`main` 브랜치에 코드가 푸시되면 GitHub Actions가 다음 과정을 자동으로 실행합니다.

1. Node.js 22 환경 구성
2. `npm ci`로 의존성 설치
3. `npm run build` 실행
4. `dist` 디렉터리를 GitHub Pages에 배포

Vite의 배포 기본 경로는 `/portfolio26/`으로 설정되어 있습니다.

## Fonts

- LINE Seed KR
- SEBANG Gothic
- Sarina
