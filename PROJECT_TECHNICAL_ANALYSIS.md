# Portfolio26 프로젝트 기술 분석 문서

> 분석 기준: 현재 저장소의 `package.json`, 설정 파일, `src` 전체 소스, GitHub Pages 배포 워크플로를 직접 확인했다.  
> 작성 원칙: **코드에서 확인되는 사실**과 **코드를 근거로 한 해석**을 구분한다. 프로젝트 화면에 적힌 경력·기술 소개 문구는 현재 애플리케이션의 실제 구현 기술과 별개로 본다.

---

## 1. 프로젝트 개요

### 1.1 어떤 프로젝트인가

이 프로젝트는 프론트엔드 개발자 나유형의 경력, 주요 프로젝트, 과거 프로젝트 아카이브, 개인 프로젝트, 기술 역량과 연락처를 보여주는 **개인 포트폴리오 단일 페이지 애플리케이션(SPA 형태의 한 페이지 사이트)**이다.

- React가 화면을 렌더링하지만 URL별 페이지를 나누는 Router는 사용하지 않는다.
- 모든 콘텐츠는 `App` 안에서 섹션 순서대로 렌더링된다.
- 메뉴 이동은 `#home`, `#about`, `#projects`, `#skills`, `#contact` 해시 링크와 `scrollIntoView`를 사용한다.
- 프로젝트 데이터는 별도의 `src/data` 파일에 두고 카드와 모달이 같은 데이터를 공유한다.
- GSAP과 ScrollTrigger를 사용해 인트로, Hero, 스크롤 등장, 배경 전환, 마키 등의 인터랙션을 구현한다.
- Tailwind CSS v4 유틸리티와 CSS 변수 기반 디자인 토큰을 함께 사용한다.

근거 파일:

- `src/main.tsx`: React 애플리케이션 진입점
- `src/App.tsx`: 전체 섹션 조립과 인트로 완료 상태 관리
- `src/components/layout/Header.tsx`: 해시 기반 섹션 내비게이션
- `vite.config.ts`: `/portfolio26/` 배포 base와 플러그인 설정

### 1.2 주요 기능

1. **첫 진입 인트로**
   - 3D 로고와 원형 배치 텍스트가 GSAP 타임라인으로 등장한다.
   - 애니메이션 종료 콜백이 실행된 뒤 본문을 렌더링한다.
   - 관련 파일: `src/sections/Intro/Intro.tsx`, `src/sections/Intro/Intro.css`, `src/App.tsx`

2. **반응형 Hero와 CTA**
   - 1024px 미만과 이상에서 서로 다른 모션 순서를 사용한다.
   - 1024~1279px에서는 `ResizeObserver`로 전체 Hero 블록의 비율을 계산한다.
   - Project, Contact 버튼은 해당 섹션으로 부드럽게 스크롤한다.
   - 관련 파일: `src/sections/Home/Hero.tsx`, `src/index.css`

3. **모바일 내비게이션 드로어**
   - 모바일에서 햄버거 버튼을 누르면 오른쪽 메뉴가 열린다.
   - Escape, 오버레이 클릭, 메뉴 링크 클릭으로 닫힌다.
   - 관련 파일: `src/components/layout/Header.tsx`

4. **경력·교육·자격증 표시**
   - 데이터 배열을 공통 카드로 렌더링한다.
   - 경력은 데스크톱에서는 중앙 타임라인 좌우 교차, 모바일에서는 왼쪽 선과 오른쪽 카드 구조다.
   - 관련 파일: `src/data/AboutMe/aboutme.ts`, `src/sections/AboutMe/*`

5. **주요 프로젝트 카드와 상세 모달**
   - 카드의 DETAIL 버튼을 누르면 선택한 프로젝트 데이터를 상세 모달에 표시한다.
   - Escape, 배경 클릭, 닫기 버튼을 지원하고 모달이 열린 동안 문서 스크롤을 막는다.
   - 관련 파일: `src/sections/Projects/Projects.tsx`, `ProjectsCard.tsx`, `ProjectDetailModal.tsx`

6. **프로젝트 아카이브**
   - 과거 프로젝트를 정적 데이터에서 렌더링하며 링크, 기술, 기여도, 업무 내용을 보여준다.
   - 섹션 진입 시 배경 wipe와 콘텐츠 등장 애니메이션이 실행된다.
   - 관련 파일: `src/sections/ProjectArchive/*`, `src/data/Projects/projectArchiveData.ts`

7. **개인 프로젝트 카드와 작업 과정 모달**
   - `hidden` 값으로 데이터를 삭제하지 않고 노출 여부만 제어한다.
   - 링크가 없거나 작업 이미지가 없으면 해당 동작을 비활성화한다.
   - 관련 파일: `src/sections/SideProjects/*`, `src/data/SideProjects/sideprojects.ts`

8. **Skills와 Contact**
   - 기술 태그, 기술 설명 카드, 연락처와 푸터 내비게이션을 제공한다.
   - 관련 파일: `src/sections/Skills/*`, `src/sections/Contact/*`

### 1.3 사용자/관리자 화면과 역할

현재 애플리케이션에는 인증된 사용자 화면이나 관리자 화면이 없다. 방문자는 포트폴리오 콘텐츠를 탐색하고, 프로젝트 상세를 열고, 외부 서비스 링크나 연락처 링크를 이용한다.

`모꼬지 Web Admin`, `모바일 APP` 등의 내용은 `src/data/Projects/projects.tsx`에 기록된 **포트폴리오 프로젝트 설명**이다. 이 저장소에 해당 관리자 기능, 로그인, 권한 처리, API 구현이 포함되어 있다는 뜻은 아니다.

### 1.4 전체 프론트엔드 구성

```text
index.html
  → src/main.tsx
    → src/App.tsx
      ├─ Intro (완료 전)
      └─ 완료 후 전체 섹션
         ├─ Home
         ├─ AboutMe
         ├─ Projects
         ├─ ProjectArchive
         ├─ SideProjects
         ├─ Skills
         └─ Contact
```

현재 구조는 페이지 라우팅 중심이 아니라 **섹션 중심 컴포넌트 구조**다. 반복되는 콘텐츠는 `data`와 `type`으로 분리하고, 반복 UI는 `components/common`에 배치했다.

---

## 2. 기술 스택 및 버전

버전은 현재 설치 상태(`npm list --depth=0`)를 기준으로 적었고, 괄호 안에는 `package.json` 범위를 병기했다.

| 항목 | 기술명 | 버전 | 프로젝트에서의 역할 | 실제 사용 파일/위치 |
|---|---|---:|---|---|
| React | React | 19.2.8 (`^19.2.7`) | 함수 컴포넌트, 조건부/반복 렌더링, 로컬 UI 상태와 Effect 구성 | `src/main.tsx`, `src/App.tsx`, `src/sections/**` |
| React DOM | react-dom | 19.2.8 (`^19.2.7`) | `createRoot`로 `#root`에 앱 마운트 | `src/main.tsx` |
| TypeScript | TypeScript | 6.0.3 (`~6.0.2`) | Props, 프로젝트 데이터, 상세 섹션 데이터 타입 정의 및 빌드 전 타입 검사 | `src/type/*`, 각 컴포넌트의 Props interface, `tsconfig.app.json` |
| Vite | Vite | 8.1.5 (`^8.1.1`) | 개발 서버와 프로덕션 번들, GitHub Pages base 설정 | `vite.config.ts`, `package.json` scripts |
| React Vite plugin | `@vitejs/plugin-react` | 6.0.4 (`^6.0.3`) | Vite에서 React 변환 지원 | `vite.config.ts` |
| CSS / Styling | Tailwind CSS | 4.3.3 | 대부분의 레이아웃, 색상, 타이포그래피, 반응형 스타일 | 거의 모든 `.tsx`, `src/styles/tokens.css`의 `@theme` |
| CSS / Styling | `@tailwindcss/vite` | 4.3.3 | Tailwind v4를 Vite 빌드에 연결 | `vite.config.ts` |
| CSS / Styling | 일반 CSS | 별도 패키지 없음 | 전역 reset, 토큰, Hero 초기 상태, Intro 전용 스타일 | `src/index.css`, `src/styles/reset.css`, `src/styles/tokens.css`, `src/sections/Intro/Intro.css` |
| Router | Router 라이브러리 없음 | 해당 없음 | 해시 앵커와 DOM 스크롤로 섹션 이동 | `Header.tsx`, `Hero.tsx`, `ContactFooter.tsx` |
| 상태관리 | React `useState` | React 내장 | 인트로 완료, 메뉴 열림, 선택 프로젝트, Toast 표시, 슬라이더 fill 관리 | `App.tsx`, `Header.tsx`, `Projects.tsx`, `SideProjects.tsx`, 공통 컴포넌트 |
| 전역 상태관리 | 없음 | 해당 없음 | Context, Redux, Zustand를 현재 앱에서 사용하지 않음 | 전체 `src` import 검색 결과 없음 |
| 서버 상태관리 | 없음 | 해당 없음 | TanStack Query를 현재 앱에서 사용하지 않음 | `projects.tsx`와 `SkillBox.tsx`에는 소개 문구로만 존재 |
| API 통신 | 없음 | 해당 없음 | `fetch`, Axios, API client가 없음 | 전체 `src` 검색 결과 없음 |
| Form | 없음 | 해당 없음 | 실제 입력 폼과 폼 상태관리 없음 | React Hook Form은 프로젝트 설명/기술 태그 문자열로만 존재 |
| Validation | 없음 | 해당 없음 | Zod schema와 validation 코드 없음 | Zod는 프로젝트 설명/기술 태그 문자열로만 존재 |
| UI Component | 자체 구현 컴포넌트 | 내부 코드 | Button, Badge, DotLabel, Toast, 상태 배지 등 반복 UI 제공 | `src/components/common/*` |
| Table / Grid | Tailwind CSS Grid | Tailwind 내장 | 카드와 상세 정보 레이아웃 구성 | `ProjectsCard.tsx`, `ProjectDetailModal.tsx`, `SideProjects.tsx`, `ProjectArchiveCard.tsx` |
| Table / Grid 라이브러리 | 없음 | 해당 없음 | TanStack Table/Kendo UI 실제 구현 없음 | `projects.tsx`, `SkillBox.tsx`의 포트폴리오 설명에만 등장 |
| Animation | GSAP | 3.15.0 | 타임라인, 진입 애니메이션, 무한 마키, 반응형 모션 | `Intro.tsx`, `Hero.tsx`, `WorkedWith.tsx` 등 |
| Animation | GSAP ScrollTrigger | GSAP에 포함 | 스크롤 위치 기반 섹션/카드 등장과 reverse | `AboutMe.tsx`, `ProjectsCard.tsx`, `ProjectArchive.tsx`, `SideProjects.tsx`, `SkillList.tsx`, `Thankyou.tsx` |
| Browser API | IntersectionObserver | 브라우저 내장 | ExpandingToast를 화면 진입 시 한 번 확장 | `src/components/common/ExpandingToast.tsx` |
| Browser API | ResizeObserver | 브라우저 내장 | 좁은 데스크톱 Hero 비율 계산 | `src/sections/Home/Hero.tsx` |
| 품질 | ESLint | 10.8.0 (`^10.6.0`) | JS/TS 권장 규칙, React Hooks, React Refresh 검사 | `eslint.config.js`, `npm run lint` |
| 배포 | GitHub Actions / Pages | 액션 v4/v3 | main push 시 Node 22에서 설치·빌드 후 `dist` 배포 | `.github/workflows/deploy-pages.yml` |

### package.json에도 없는 소개용 기술명

Zustand, TanStack Query, React Hook Form, Zod, shadcn/ui, Kendo UI, TOAST UI Calendar, TanStack Router, Swiper, Chart.js 등은 화면의 프로젝트 설명 또는 기술 태그에 적혀 있지만 이 포트폴리오 저장소의 설치 의존성이나 실행 코드로 확인되지 않는다.

---

## 3. 프로젝트 폴더 구조

```text
src/
├─ App.tsx
├─ main.tsx
├─ index.css
├─ assets/
│  ├─ fonts/
│  └─ images/
├─ components/
│  ├─ common/
│  │  ├─ Badge.tsx
│  │  ├─ Button.tsx
│  │  ├─ ContributionSlider.tsx
│  │  ├─ DotLabel.tsx
│  │  ├─ ExpandingToast.tsx
│  │  └─ ProjectStatusBadge.tsx
│  └─ layout/
│     ├─ Header.tsx
│     └─ SectionTitle.tsx
├─ data/
│  ├─ AboutMe/aboutme.ts
│  ├─ Projects/
│  │  ├─ projectArchiveData.ts
│  │  ├─ projects.tsx
│  │  └─ projectsshowcase.ts
│  └─ SideProjects/sideprojects.ts
├─ sections/
│  ├─ Intro/
│  ├─ Home/
│  ├─ AboutMe/
│  ├─ Projects/
│  ├─ ProjectArchive/
│  ├─ SideProjects/
│  ├─ Skills/
│  └─ Contact/
├─ styles/
│  ├─ reset.css
│  └─ tokens.css
├─ type/
│  ├─ project.ts
│  ├─ showcase.ts
│  └─ sideproject.ts
```

### 구조가 나뉜 이유

- `components/common`: 특정 섹션의 데이터에 종속되지 않는 시각 단위다. Variant와 Props로 여러 화면에서 재사용한다.
- `components/layout`: 사이트 전체 내비게이션과 섹션 제목처럼 화면 구조를 형성하는 컴포넌트다.
- `sections`: URL 페이지 대신 한 페이지를 구성하는 큰 화면 단위다. 각 폴더 안에서 해당 섹션 전용 카드·모달을 함께 관리한다.
- `data`: 콘텐츠를 JSX 구조에서 분리한다. 주요 프로젝트는 카드와 모달이 같은 객체를 공유한다.
- `type`: 여러 파일에서 공유해야 하는 데이터 계약을 둔다. 예를 들어 `Project`는 데이터 파일, 카드, 모달, 선택 상태가 함께 사용한다.
- `styles`: 전체 앱에 적용되는 토큰과 reset을 분리한다.
- `assets`: 번들에 포함되는 폰트·이미지를 한곳에서 관리한다.

현재 공통 Hook이나 유틸리티만을 위한 별도 폴더는 없다.

---

## 4. 라우팅 구조

### 4.1 사용 Router

Router 라이브러리를 사용하지 않는다. `react-router-dom`도 package.json에 없다.

### 4.2 라우트 정의 위치

URL path 라우트 정의는 없다. 대신 `App.tsx`에서 섹션 렌더링 순서를 고정한다.

```tsx
// src/App.tsx
{isIntroComplete && (
  <>
    <Home />
    <AboutMe />
    <Projects />
    <ProjectArchive />
    <SideProjects />
    <Skills />
    <Contact />
  </>
)}
```

### 4.3 페이지 이동 구조

Header와 Footer는 섹션 id를 가리키는 해시 링크를 사용한다.

```tsx
// src/components/layout/Header.tsx
const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
```

Hero의 CTA는 DOM을 찾아 스크롤한다.

```tsx
// src/sections/Home/Hero.tsx
document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
```

### 4.4 동적·중첩·인증 라우팅

- 동적 라우팅: 없음
- 중첩 라우팅: 없음
- 인증 기반 라우팅: 없음
- Not Found 처리: 없음
- 브라우저 path 변경: 없음. 해시만 바뀐다.

`vite.config.ts`의 `base: "/portfolio26/"`는 Router 설정이 아니라 GitHub Pages 하위 경로에서 정적 자산을 올바르게 로드하기 위한 빌드 base다.

---

## 5. 데이터 흐름

### 5.1 전체 데이터 흐름

요청에서 제시한 `API → 서버 상태 → 클라이언트 상태 → 컴포넌트 → UI` 구조는 현재 프로젝트에는 적용되지 않는다. API와 서버 상태가 없기 때문이다.

실제 흐름은 다음과 같다.

```text
src/data의 정적 객체 배열
  → 섹션 컴포넌트에서 import
  → map으로 카드 생성
  → 사용자 클릭 시 선택 객체를 useState에 저장
  → 선택 객체를 모달 Props로 전달
  → UI 렌더링
```

### 5.2 실제 기능 추적: 주요 프로젝트 상세 열기

1. **데이터 정의**  
   `src/data/Projects/projects.tsx`가 `Project[]`를 export한다.
2. **목록 렌더링**  
   `Projects.tsx`가 데이터를 import하고 `projects.map`으로 `ProjectsCard`를 만든다.
3. **사용자 액션**  
   `ProjectsCard`의 DETAIL 버튼이 `onDetailClick(project)`를 호출한다.
4. **클라이언트 상태 변경**  
   부모 `Projects`의 `setSelectedProject`가 클릭한 `Project` 객체를 저장한다.
5. **조건부 UI 업데이트**  
   `selectedProject`가 null이 아니면 `ProjectDetailModal`을 렌더링한다.
6. **상세 데이터 표시**  
   모달은 같은 객체의 `detail.heroImage`, `sections`, `development`, `liveServices`를 표시한다.
7. **닫기**  
   Escape, 배경 클릭, 닫기 버튼이 `setSelectedProject(null)`을 실행해 모달을 제거한다.

이 흐름에는 네트워크 요청, 로딩 상태, 캐시, 서버 오류 상태가 없다.

### 5.3 정적 데이터와 UI 분리의 효과

코드에서 확인되는 효과는 다음과 같다.

- 주요 프로젝트의 `role`, `category`, `skills`를 카드와 모달이 같은 객체에서 읽는다.
- 개인 프로젝트의 `hidden` 값만 바꾸어 데이터는 보존하고 목록 노출만 제어한다.
- 타입을 통해 카드와 모달이 기대하는 필드 구조를 맞춘다.

---

## 6. 상태관리

### 6.1 React `useState`

| 상태 | 파일 | 역할 |
|---|---|---|
| `isIntroComplete` | `src/App.tsx` | 인트로가 끝나기 전/후 렌더링 전환 |
| `isMenuOpen` | `src/components/layout/Header.tsx` | 모바일 메뉴 열림/닫힘 |
| `selectedProject: Project \| null` | `src/sections/Projects/Projects.tsx` | 주요 프로젝트 상세 모달 대상 |
| `selectedProject: Sideproject \| null` | `src/sections/SideProjects/SideProjects.tsx` | 개인 프로젝트 작업 과정 모달 대상 |
| `isVisible` | `src/components/common/ExpandingToast.tsx` | IntersectionObserver 감지 후 Toast 확장 |
| `fill` | `src/components/common/ContributionSlider.tsx` | 0에서 실제 퍼센트로 전환해 너비 애니메이션 유도 |

모두 특정 화면 가까이에서만 필요한 상태이므로 상위 전역 Store 없이 로컬 상태로 관리한다. 이 판단은 상태가 각 컴포넌트 또는 가까운 부모 안에서만 소비된다는 코드 구조에 근거한다.

### 6.2 `useRef`

`useRef`는 데이터 저장소보다는 DOM 참조에 사용된다.

- GSAP 대상: `Intro`, `Hero`, `WorkedWith`, `AboutMe`, `ProjectsCard`, `ProjectArchive`, `SideProjects`, `SkillList`, `Thankyou`
- Observer 대상: `ExpandingToast`, `Hero`
- 배열 ref: `Intro`의 원형 텍스트 글자 DOM 저장

### 6.3 Context / Zustand / TanStack Query

- React Context: 사용하지 않음
- Zustand: 사용하지 않음
- TanStack Query: 사용하지 않음
- Redux 등 기타 상태관리: 사용하지 않음

`projects.tsx`의 모꼬지 기술 설명에 Zustand와 TanStack Query가 나오지만, 이는 소개 대상 프로젝트의 기술 설명이지 현재 포트폴리오 앱의 상태관리 구현이 아니다.

### 6.4 서버 상태와 클라이언트 상태 구분

현재 서버 상태는 없다. 모든 앱 상태는 UI 제어용 클라이언트 상태다. 따라서 로딩, refetch, 캐시 무효화, stale time, optimistic update 같은 서버 상태 개념도 구현되어 있지 않다.

---

## 7. API 통신

### 7.1 확인 결과

전체 `src`에서 다음을 확인하지 못했다.

- Axios import
- `fetch()` 호출
- 공통 API client
- baseURL
- interceptor
- 인증 토큰 저장/첨부
- API 에러 처리
- Query/Mutation Hook

따라서 현재 프로젝트는 **API가 없는 정적 콘텐츠 포트폴리오**다.

### 7.2 외부 URL 사용 방식

외부 연결은 API가 아니라 `<a>` 링크다.

- 주요 프로젝트 Live Service: `ProjectDetailModal.tsx`
- 프로젝트 아카이브 사이트: `ProjectArchiveCard.tsx`
- 개인 프로젝트 사이트: `SideProjectCard.tsx`
- 전화/메일: `ContactFooter.tsx`

외부 사이트 링크에는 대부분 `target="_blank"`와 `rel="noreferrer"`가 적용되어 있다.

### 7.3 요청된 API 흐름 예시의 적용 여부

`컴포넌트 → hook/query → API 함수 → 서버` 형태의 예시는 현재 코드에서 만들 수 없다. 해당 계층이 존재하지 않기 때문이다. 면접에서도 “API 연동 포트폴리오”라고 설명하면 안 되고, “정적 데이터 기반의 UI 포트폴리오라 API 계층은 두지 않았다”고 답하는 것이 코드와 일치한다.

---

## 8. 컴포넌트 설계

### 8.1 구분

#### 공통 컴포넌트

- `Button`: gradient/white/purple/purpleLine variant와 이벤트 Props
- `Badge`: default/black/gradient variant
- `DotLabel`: 상태·카테고리용 색상 dot variant
- `ExpandingToast`: 섹션 안내 문구와 진입 확장 효과
- `ContributionSlider`: 기여도 퍼센트 표시
- `ProjectStatusBadge`: NEW/작업중 코너 배지
- `SectionTitle`: 섹션 번호, 제목, 선택적 부제와 선

#### Layout

- `Header`: 데스크톱 메뉴와 모바일 드로어
- `ContactFooter`: Footer 내비게이션과 연락처. 위치상 `sections/Contact`에 있으므로 공통 Layout 폴더에 있지는 않다.

#### 섹션 전용 컴포넌트

- About: `AboutmeCard`, `Experience`, `Education`, `Certifications`
- Projects: `ProjectsCard`, `ProjectDetailModal`
- Archive: `ProjectArchiveCard`
- Side Projects: `SideProjectCard`, `SideProjectModal`
- Skills: `SkillBox`, `SkillList`, `SkillCard`

#### Form / Input / Table

현재 실제 Form, Input, 데이터 테이블 컴포넌트는 없다.

### 8.2 재사용 사례 1: `Button`

1. **문제**: Hero와 프로젝트 카드에서 서로 다른 시각의 버튼이 필요하다.
2. **공통화 방식**: `variantStyles` 객체로 variant별 Tailwind 클래스를 선택한다.
3. **Props**: `children`, `variant`, `className`, `onClick`, `onMouseEnter`, `onFocus`.
4. **재사용 위치**: `Hero.tsx`의 PROJECT/CONTACT, `ProjectsCard.tsx`의 DETAIL.

코드상 한계도 있다. Props interface 이름이 `BadgeProps`로 되어 있어 컴포넌트명과 일치하지 않고, native button의 `type`, `disabled`, `aria-*` 전체를 전달하는 구조는 아니다.

### 8.3 재사용 사례 2: `AboutmeCard`

1. **문제**: 경력, 교육, 자격증이 날짜·제목·설명 구조는 비슷하지만 색상과 배치는 다르다.
2. **공통화 방식**: `variantStyles`로 색과 Dot variant를 선택하고 조건부 렌더링으로 레이아웃을 바꾼다.
3. **Props**: `variant`, `date`, `title`, `description`, `isRight`, `className`.
4. **재사용 위치**: `Experience.tsx`, `Education.tsx`, `Certifications.tsx`.

### 8.4 재사용 사례 3: 프로젝트 데이터 계약

`Project` interface 하나를 `projects.tsx`, `Projects.tsx`, `ProjectsCard.tsx`, `ProjectDetailModal.tsx`가 공유한다. 카드와 모달을 하나의 거대한 컴포넌트로 합친 것이 아니라, 데이터 계약을 공유하면서 표시 책임을 나눈 구조다.

### 8.5 Modal 설계

`ProjectDetailModal`과 `SideProjectModal`은 다음 동작을 각각 직접 구현한다.

- `role="dialog"`, `aria-modal="true"`
- Escape 닫기
- backdrop 자신을 클릭했을 때 닫기
- `html`, `body` overflow 저장 후 hidden 적용
- cleanup에서 기존 overflow 복원

공통 Modal 컴포넌트나 공통 Hook으로 추출되지는 않았다. 또한 focus trap, 최초 포커스 이동, 닫힌 뒤 트리거로 포커스 복원은 확인되지 않는다. `ProjectDetailModal`에는 `aria-labelledby`가 있지만 `SideProjectModal`에는 제목 연결 속성이 없다.

---

## 9. Form과 Validation

### 9.1 현재 앱의 구현 여부

현재 포트폴리오 앱에는 사용자 입력 Form이 없다. React Hook Form과 Zod도 package.json에 없고 import/Schema/Submit 코드가 없다.

### 9.2 혼동하기 쉬운 위치

- `src/data/Projects/projects.tsx`: 모꼬지 프로젝트 설명에 “React Hook Form + Zod 스키마”가 문자열로 기록됨
- `src/sections/Skills/SkillBox.tsx`: `Zod`, `React Hook Form`이 기술 태그 문자열로 표시됨

이것은 현재 포트폴리오 코드의 Form 구현 근거가 아니다. 따라서 Schema → Form → UI 흐름을 현재 저장소 코드로 분석할 수 없다.

면접 답변 예시:

> 이 포트폴리오 자체에는 입력 폼과 API가 없어 React Hook Form이나 Zod를 설치하지 않았습니다. 해당 기술명은 제가 소개하는 별도 실무 프로젝트 경험을 표시하는 콘텐츠입니다.

---

## 10. 디자인 시스템 / 디자인 토큰

### 10.1 토큰 정의

`src/styles/tokens.css`가 프로젝트 디자인 토큰의 중심이다.

#### Color

- primitive: `--white`, `--black`, `--gray-dark`, `--gray`, `--muted`, `--purple`, `--purple-light`, `--red`, `--green`, `--gradient`
- semantic alias: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--destructive`, `--border`

#### Typography

- 로컬 폰트: LINE Seed KR, SEBANG Gothic, Sarina
- 역할 토큰: `--font-body`, `--font-heading`, `--font-point`
- Tailwind text scale: `--text-xs`부터 `--text-7xl`

#### Spacing

- Tailwind v4 `--spacing: 0.1rem`
- 따라서 `p-20`, `gap-12`, `mt-40` 같은 클래스는 이 프로젝트 spacing 단위를 사용한다.
- 컨테이너: `--container-width: 130rem`, `--container-padding: 2rem`

#### Radius

- `--radius-sm: 0.8rem`
- `--radius-md: 1.6rem`
- `--radius-lg: 2.4rem`
- `--radius-xl: 3.2rem`
- `--radius-full: 99rem`

#### Shadow

- `--shadow-white`
- `--shadow-base`
- `--shadow-gray`

#### Breakpoint

커스텀 breakpoint 토큰은 정의하지 않았다. 코드의 `sm`, `md`, `lg`, `xl`은 Tailwind 기본 breakpoint를 사용한다.

- `sm`: 640px 이상
- `md`: 768px 이상
- `lg`: 1024px 이상
- `xl`: 1280px 이상
- `2xl`: 1536px 이상(현재 컴포넌트에서 실질 사용은 확인되지 않음)

#### z-index

z-index는 공통 토큰으로 정의하지 않았다. `z-10`, `z-20`, `z-40`, `z-50`과 Intro CSS의 `z-index: 100`을 각 컴포넌트에서 직접 사용한다.

### 10.2 Tailwind 연결 흐름

```text
tokens.css의 :root primitive/semantic 변수
  → tokens.css의 @theme에서 --color-primary 등으로 노출
  → 컴포넌트에서 bg-primary, text-accent, rounded-md, shadow-gray 사용
```

예시:

- 정의: `--purple: #CEA6E0` → `--color-primary: var(--purple)`
- 사용: `Hero.tsx`의 `bg-primary`, `ProjectDetailModal.tsx`의 `text-primary`

`src/index.css`가 `@import "tailwindcss"`, `reset.css`, `tokens.css`를 불러온다.

### 10.3 실제 컴포넌트 연결 사례

- `Badge.tsx`: `bg-white`, `bg-black`, `bg-gradient`
- `DotLabel.tsx`: `bg-accent`, `bg-green`, `bg-primary`, `bg-secondary`
- `SkillBox.tsx`: 그룹별 테두리 색과 CSS gradient border
- `reset.css`: `body`에 `--background`, `--foreground`, `--font-body` 적용
- `SectionTitle.tsx`: heading font, primary color, gradient line 사용

### 10.4 shadcn/ui 사용 여부

현재 저장소에서 shadcn/ui 컴포넌트 import나 `components/ui` 구조를 확인하지 못했다. `shadcn/ui`는 프로젝트 설명과 기술 태그 문자열로만 존재한다. 따라서 기본 컴포넌트 사용 또는 커스텀 여부를 이 저장소로 증명할 수 없다.

---

## 11. 스타일링 구조

### 11.1 Tailwind CSS

주요 스타일링 방식이다. JSX의 `className`에서 레이아웃, 색, 간격, 반응형, hover/focus, transition을 구성한다.

특징:

- 모바일 우선: 기본 클래스 후 `sm:`, `md:`, `lg:`, `xl:`로 확장
- arbitrary value: `rounded-[24px]`, `text-[clamp(...)]`, `shadow-[...]`, `grid-cols-[...]`
- 상태 variant: `hover:`, `focus-visible:`, `group-hover:`, `disabled:`, `motion-reduce:`
- pseudo element: Header 링크의 `after:*`

### 11.2 일반 CSS

- `reset.css`: html/body, scrollbar, `.content-container`
- `tokens.css`: 폰트, 색상, 간격, radius, shadow, Tailwind theme
- `index.css`: Hero의 애니메이션 전 초기 상태와 1024~1279px 스케일 보정, Skills scrollbar
- `Intro.css`: 원형 글자 배치와 인트로 전용 반응형 스타일

### 11.3 Inline style

제한적으로 사용한다.

- `Intro.tsx`: 글자별 CSS 변수 `--character-angle`
- `ContributionSlider.tsx`: 진행률 width
- `Thankyou.tsx`: clip-path polygon
- `SkillBox.tsx`: 다중 background를 이용한 gradient border
- `Hero.tsx`: DOM style property `--hero-scale`

### 11.4 사용하지 않는 방식

- CSS Module: 없음
- styled-components/emotion: 없음
- SCSS 빌드: 없음. SCSS는 포트폴리오 콘텐츠에 기술명으로만 등장한다.

### 11.5 반응형 구현

대표적인 구조 변화:

- Header: 640px 미만 모바일 드로어, `sm` 이상 가로 메뉴
- Hero: 1024px 미만 단일 패널에 이미지/이름 통합, `lg` 이상 별도 프로필 패널
- About: `lg` 미만 세로, `lg` 이상 경력과 교육/자격증 좌우
- Experience: 640px 미만 왼쪽 타임라인 + 단일 방향, `sm` 이상 중앙선 + 좌우 교차
- ProjectsCard: 기본 상하 배치, `xl` 이상 좌우 교차
- ProjectArchiveCard: 기본 1열, `md` 2열, `lg` 3영역
- SideProjects: 기본 1열, `sm` 2열, `lg` 3열
- Skills: `xl` 미만 상하, `xl` 이상 SkillBox와 SkillList 좌우

---

## 12. 주요 라이브러리 실제 활용 사례

### React

- **왜 사용**: 정적 데이터 배열을 컴포넌트로 반복 렌더링하고 모달·메뉴·인트로 같은 UI 상태를 관리한다.
- **실제 기능**: 프로젝트 카드/모달, 모바일 메뉴, 조건부 본문 렌더링.
- **대표 위치**: `App.tsx`, `Projects.tsx`, `SideProjects.tsx`, `Header.tsx`.

### TypeScript

- **왜 사용**: 데이터 파일과 표시 컴포넌트 사이의 필드 계약, Props 형태를 고정한다.
- **실제 기능**: `Project`, `Sideproject`, `Showcase`, 공통 컴포넌트 Props.
- **대표 위치**: `src/type/project.ts`, `src/type/sideproject.ts`, 각 컴포넌트 interface.

### GSAP

- **왜 사용**: 여러 요소의 순차 모션, DOM transform/opacity, 무한 반복을 세밀하게 제어한다.
- **실제 기능**: 인트로 타임라인, Hero 진입 순서, 로고 마키.
- **대표 위치**: `Intro.tsx`, `Hero.tsx`, `WorkedWith.tsx`.

### ScrollTrigger

- **왜 사용**: 특정 요소가 viewport에 도달할 때 애니메이션을 시작하고 일부 구간은 역방향 스크롤 시 되돌린다.
- **실제 기능**: About 순차 등장, 프로젝트 카드, Archive wipe, 개인 프로젝트/Skills 카드, Contact 선.
- **대표 위치**: `AboutMe.tsx`, `ProjectsCard.tsx`, `ProjectArchive.tsx`, `SideProjects.tsx`, `SkillList.tsx`, `Thankyou.tsx`.

### Tailwind CSS v4

- **왜 사용**: 컴포넌트 가까이에서 반응형과 상태 스타일을 조합하고 토큰을 유틸리티로 재사용한다.
- **실제 기능**: 전 화면 레이아웃과 반응형, hover/focus, modal, grid.
- **대표 위치**: 전체 `.tsx`, `tokens.css`, `vite.config.ts`.

---

## 13. 프로젝트에서 중요한 구현 사례 TOP 5

### 1위. 반응형 Hero와 초기 깜빡임 방지

- **기능**: 데스크톱 패널 이동, 모바일 요소별 등장, 1024~1279px 비율 축소
- **관련 파일**: `src/sections/Home/Hero.tsx`, `src/index.css`
- **사용 기술**: GSAP timeline, `matchMedia`, `ResizeObserver`, CSS custom property
- **구현 방식**: CSS에서 패널을 초기 hidden/opacity 0으로 두고 GSAP이 visibility와 opacity를 함께 바꾼다. 모바일과 데스크톱 모션을 분기하고 ResizeObserver가 `--hero-scale`을 계산한다.
- **해결하려던 문제**: 로딩 순간 최종 위치가 먼저 보이는 깜빡임, 화면 폭에 따른 레이아웃 붕괴, 모바일과 PC의 다른 정보 배치.
- **면접 핵심**: CSS 초기 상태와 JS 애니메이션 상태를 어떻게 맞췄는지, observer cleanup, breakpoint 분기 이유.

### 2위. 데이터 기반 프로젝트 카드와 상세 모달

- **기능**: 목록에서 선택한 프로젝트의 상세 정보, 이미지, 섹션, 문제 해결, 라이브 링크 표시
- **관련 파일**: `src/type/project.ts`, `src/data/Projects/projects.tsx`, `Projects.tsx`, `ProjectsCard.tsx`, `ProjectDetailModal.tsx`
- **사용 기술**: TypeScript, React Props, `useState`, 조건부 렌더링
- **구현 방식**: `Project` 객체를 단일 데이터 원천으로 두고 카드에서 선택 객체를 부모 state에 저장한 뒤 모달로 전달한다.
- **해결하려던 문제**: 프로젝트마다 별도 상세 컴포넌트를 만드는 중복과 카드/모달 정보 불일치.
- **면접 핵심**: 데이터와 UI를 분리한 이유, `Project` 타입의 역할, 선택 객체 state 흐름.

### 3위. 모달 UX와 문서 스크롤 제어

- **기능**: Escape/배경/버튼 닫기, 모달 동안 배경 스크롤 방지, cleanup 복원
- **관련 파일**: `ProjectDetailModal.tsx`, `SideProjectModal.tsx`
- **사용 기술**: `useEffect`, DOM event, accessibility attribute
- **구현 방식**: mount 시 keydown 등록과 html/body overflow 저장·변경, unmount 시 원래 값 복원.
- **해결하려던 문제**: 모달 뒤 페이지가 함께 스크롤되거나 전역 스타일이 닫힌 뒤에도 남는 문제.
- **면접 핵심**: cleanup의 필요성과 현재 부족한 focus trap/포커스 복원.

### 4위. GSAP ScrollTrigger의 반응형·접근성 처리

- **기능**: 각 섹션의 순차 등장과 스크롤 역방향 재생
- **관련 파일**: `AboutMe.tsx`, `ProjectsCard.tsx`, `ProjectArchive.tsx`, `SideProjects.tsx`, `SkillList.tsx`
- **사용 기술**: `gsap.context`, ScrollTrigger, `gsap.matchMedia`, `prefers-reduced-motion`
- **구현 방식**: context 범위 안에서 애니메이션을 만들고 cleanup에서 revert한다. SideProjects는 모바일과 그 이상을 다른 방식으로 등록한다. 여러 주요 섹션은 reduced motion일 때 최종 상태를 바로 적용한다.
- **해결하려던 문제**: 긴 단일 페이지의 정보 밀도, viewport별 노출 타이밍, 컴포넌트 해제 후 animation 잔존.
- **면접 핵심**: `useLayoutEffect` 선택 이유, context/revert, start 위치와 toggleActions의 의미.

### 5위. CSS 변수와 Tailwind v4의 디자인 토큰 연결

- **기능**: 색, 폰트, 크기, spacing, radius, shadow를 공통 사용
- **관련 파일**: `src/styles/tokens.css`, `src/styles/reset.css`, `src/index.css`, 공통 UI 컴포넌트
- **사용 기술**: CSS custom properties, Tailwind v4 `@theme`
- **구현 방식**: primitive → semantic alias → Tailwind theme utility 순서로 연결한다.
- **해결하려던 문제**: 색상과 타이포그래피 값을 컴포넌트마다 반복하고 디자인 변경 시 여러 파일을 고쳐야 하는 문제.
- **면접 핵심**: `--purple`과 `--color-primary`의 차이, `--spacing: 0.1rem`이 유틸리티에 미치는 영향.

---

## 14. 내가 반드시 이해해야 할 코드

| 파일 | 반드시 이해해야 하는 이유 |
|---|---|
| `src/App.tsx` | 인트로 완료 전후 렌더링과 전체 섹션 구조의 출발점이다. |
| `src/sections/Home/Hero.tsx` | 이 프로젝트에서 반응형 구조, GSAP, Observer, DOM ref가 가장 복합적으로 만나는 파일이다. |
| `src/index.css` | Hero가 처음 깜빡이지 않는 이유와 좁은 데스크톱 scaling을 이해하려면 필요하다. |
| `src/type/project.ts` | 데이터 기반 UI의 계약이며 카드와 모달이 어떤 필드를 공유하는지 보여준다. |
| `src/data/Projects/projects.tsx` | 콘텐츠가 어떤 구조로 UI에 공급되는지, ReactNode를 데이터에 사용한 이유와 trade-off를 설명해야 한다. |
| `src/sections/Projects/Projects.tsx` | 목록 → 선택 state → 모달의 가장 명확한 단방향 데이터 흐름이다. |
| `src/sections/Projects/ProjectDetailModal.tsx` | 모달 렌더링, 접근성 속성, 스크롤 lock, cleanup, 중첩 데이터 map을 포함한다. |
| `src/sections/AboutMe/AboutMe.tsx` | 하나의 ScrollTrigger timeline으로 여러 그룹을 순차 제어한다. |
| `src/sections/SideProjects/SideProjects.tsx` | `gsap.matchMedia`를 이용해 모바일/데스크톱 애니메이션을 분리한다. |
| `src/styles/tokens.css` | 디자인 토큰과 Tailwind v4 연결의 중심이다. |
| `src/components/common/Button.tsx` | variant 기반 공통 컴포넌트의 장점과 현재 Props 설계 한계를 함께 설명할 수 있다. |
| `vite.config.ts` | Tailwind/React 플러그인, `@` alias, GitHub Pages base를 설명하는 설정이다. |

추가로 알아야 할 현재 한계:

- `ProjectShowcaseCard.tsx`와 `projectsshowcase.ts`는 현재 `Projects.tsx`에서 주석 처리되어 실제 화면에 렌더링되지 않는다.
- `projectsshowcase.ts`의 여러 항목은 동일한 id를 반복하므로 다시 활성화하면 React key 중복 문제가 발생할 수 있다.
- 테스트 파일과 테스트 스크립트가 없다.
- GSAP이 사용되는 모든 곳이 reduced motion을 처리하는 것은 아니다. 예를 들어 `WorkedWith.tsx`, `Thankyou.tsx`에는 별도 분기가 없다.
- 모든 이미지가 정적 import로 연결되고 별도 lazy loading 속성은 확인되지 않는다.

---

## 15. 면접 대비 질문

### 구조와 데이터

1. Router 없이 단일 페이지 섹션 구조를 선택한 이유는 무엇인가요?
2. 프로젝트 데이터와 화면 컴포넌트를 분리했을 때 얻은 장점은 무엇인가요?
3. `Project`의 `title`이나 `overview`에 `ReactNode`를 허용한 이유는 무엇인가요? 문자열만 사용할 때와 trade-off는 무엇인가요?
4. 카드와 모달이 동일한 `Project` 객체를 공유하도록 한 이유는 무엇인가요?
5. 프로젝트가 더 많아지면 현재 정적 import 구조를 어떻게 개선하겠나요?
6. `hidden` 필드로 개인 프로젝트를 숨기는 방식과 데이터를 삭제하는 방식의 차이는 무엇인가요?

### React와 상태

7. 전역 상태관리 라이브러리를 사용하지 않은 이유는 무엇인가요?
8. `selectedProject`에 id가 아니라 객체 전체를 저장한 이유는 무엇인가요?
9. Intro 완료 상태가 `App`에 있어야 하는 이유는 무엇인가요?
10. `ExpandingToast`에서 DOM class만 바꾸지 않고 `useState`를 사용한 이유는 무엇인가요?
11. `ContributionSlider`에서 `requestAnimationFrame` 뒤에 width를 바꾸는 이유는 무엇인가요?

### GSAP과 브라우저 API

12. GSAP 코드를 `useLayoutEffect` 안에 둔 이유는 무엇인가요?
13. `gsap.context()`와 `context.revert()`는 무엇을 해결하나요?
14. ScrollTrigger의 `start: "top 82%"`는 어떤 의미인가요?
15. `toggleActions: "play none none reverse"`를 사용한 화면과 한 번만 재생하는 화면의 차이는 무엇인가요?
16. SideProjects에서 `gsap.matchMedia()`를 사용한 이유는 무엇인가요?
17. Hero의 `ResizeObserver`가 계산하는 값은 무엇이고 CSS에서 어떻게 사용되나요?
18. `prefers-reduced-motion`을 처리한 이유와 현재 빠진 곳은 어디인가요?
19. CSS에서 요소를 먼저 숨긴 뒤 GSAP으로 보이게 한 이유는 무엇인가요?

### 모달과 접근성

20. 모달을 열었을 때 html과 body 모두 overflow를 막은 이유는 무엇인가요?
21. cleanup에서 이전 overflow 값을 복원하는 이유는 무엇인가요?
22. backdrop 클릭을 `event.target === event.currentTarget`으로 확인하는 이유는 무엇인가요?
23. 현재 모달 접근성에서 추가로 개선해야 할 것은 무엇인가요?
24. 모바일 메뉴의 `aria-expanded`, `aria-controls`, `aria-hidden`, `tabIndex`는 각각 어떤 역할인가요?

### 스타일과 반응형

25. Tailwind v4 `@theme`과 일반 `:root` 변수는 각각 어떤 역할인가요?
26. `--spacing: 0.1rem`을 정의하면 `p-20`의 실제 값은 어떻게 되나요?
27. Hero에서 1024px 미만과 이상에 서로 다른 DOM 배치를 사용한 이유는 무엇인가요?
28. 주요 프로젝트를 기본 상하 배치하고 xl 이상에서만 좌우 배치한 이유는 무엇인가요?
29. gradient border를 단일 `border-color`가 아니라 다중 background와 `border-box`로 구현한 이유는 무엇인가요?
30. z-index를 토큰화하지 않은 현재 구조에서 규모가 커질 때 어떤 문제가 생길 수 있나요?

### 의존성과 품질

31. SkillBox에 적힌 Zod/React Hook Form과 현재 앱 구현 기술을 어떻게 구분해서 설명하겠나요?
32. 현재 테스트가 없다면 어떤 기능부터 테스트하겠나요?
33. 프로젝트 이미지 용량과 초기 로딩을 개선하려면 무엇을 확인하겠나요?
34. 코드 스플리팅을 도입한다면 어떤 컴포넌트가 첫 후보인가요?
35. README와 실제 코드가 달라지는 문제를 어떻게 방지하겠나요?

---

## 16. 마지막 요약

### A. 이력서용 기술 스택 요약

> React 19, TypeScript 6, Vite 8, Tailwind CSS 4, GSAP/ScrollTrigger를 사용해 반응형 단일 페이지 포트폴리오를 구현했습니다. CSS 변수와 Tailwind `@theme`을 연결해 디자인 토큰을 관리하고, 정적 프로젝트 데이터를 타입으로 정의해 카드와 상세 모달에서 재사용했습니다. GitHub Actions와 GitHub Pages를 통해 main 브랜치 빌드·배포를 자동화했습니다.

주의: Zustand, TanStack Query, React Hook Form, Zod, shadcn/ui는 현재 포트폴리오 앱 자체의 구현 기술로 적으면 안 된다. 화면 안에서 소개하는 별도 프로젝트 경험의 기술명이다.

### B. 포트폴리오에 넣을 수 있는 프로젝트 기술 설명

> 프로젝트 콘텐츠와 UI를 분리하고 TypeScript interface로 데이터 구조를 정의해 주요 프로젝트 카드와 상세 모달이 하나의 데이터를 공유하도록 구성했습니다. GSAP timeline과 ScrollTrigger로 인트로·Hero·섹션별 스크롤 인터랙션을 구현했으며, `matchMedia`, `ResizeObserver`, Tailwind breakpoint를 활용해 모바일부터 데스크톱까지 레이아웃과 모션을 분기했습니다. 모달에는 Escape/배경 클릭 닫기와 배경 스크롤 잠금을 적용하고, 주요 애니메이션에는 reduced-motion 대응과 cleanup을 구현했습니다.

이 문장은 코드에서 확인되는 구현을 요약한 것이며, 누가 직접 설계했는지까지 코드는 증명하지 않으므로 “직접 설계했다”는 표현은 사용하지 않았다.

### C. 면접 직전 핵심 기술/구조 요약

```text
앱 성격
- API·인증·Router가 없는 정적 단일 페이지 포트폴리오
- App이 Intro 완료 후 7개 섹션을 순서대로 렌더링

데이터
- src/data 정적 배열 → map → 카드
- DETAIL 클릭 → selectedProject state → 모달 Props → 상세 UI
- Project/Sideproject interface로 데이터 계약 공유

상태
- 전부 로컬 useState
- 전역/서버 상태관리 없음
- useRef는 주로 GSAP/Observer용 DOM 참조

스타일
- Tailwind CSS v4 + CSS 변수
- tokens.css: primitive → semantic → @theme utility
- 기본 모바일, sm 640 / md 768 / lg 1024 / xl 1280

모션
- GSAP timeline: Intro, Hero
- ScrollTrigger: About, Projects, Archive, SideProjects, Skills, Contact
- context.revert로 cleanup
- 여러 주요 구간에서 prefers-reduced-motion 처리

모달
- 선택 객체 상태로 조건부 렌더링
- Escape, backdrop, 닫기 버튼
- html/body overflow 잠금과 cleanup 복원
- focus trap/포커스 복원은 미구현

의존성 주의
- React Hook Form/Zod/Zustand/TanStack Query 등은 소개 문구이지 현재 앱 구현 아님

배포
- Vite base /portfolio26/
- main push → GitHub Actions → npm ci/build → GitHub Pages
```

---

## 부록: 사실과 해석 구분

### 코드에서 직접 확인되는 사실

- React/TypeScript/Vite/Tailwind/GSAP 사용
- 정적 데이터 기반 렌더링
- 로컬 state 기반 모달과 메뉴
- API/Router/전역 Store/Form 없음
- 디자인 토큰과 반응형 breakpoint 사용
- GitHub Pages 자동 배포

### 코드를 근거로 한 해석

- 상태 소비 범위가 작아 로컬 state가 현재 규모에 적합하다는 평가는 구조를 근거로 한 해석이다.
- 데이터 분리가 카드/모달 정보 불일치를 줄인다는 것은 구조에서 기대되는 유지보수 효과다.
- Hero의 초기 hidden 스타일이 깜빡임을 방지하기 위한 것이라는 설명은 CSS 초기 상태와 GSAP 전환 방식에 근거한 해석이다.

### 코드만으로 증명할 수 없는 것

- 특정 코드를 누가 직접 설계·작성했는지
- `projects.tsx`에 서술된 외부 실무 프로젝트의 실제 내부 저장소 구현
- 화면에 기술 태그로 표시된 모든 기술의 숙련도
