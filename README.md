# 비디오 스트림

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://video-stream-kappa.vercel.app)

## 개요

비디오 스트림은 Next.js, Livekit, Tailwind CSS를 사용하여 실시간 비디오 스트리밍을 제공하는 애플리케이션입니다. 이 프로젝트는 매끄럽고 반응형인 사용자 경험을 목표로 합니다.

## 주요 기능

- **실시간 비디오 스트리밍**: Livekit을 사용한 저지연 비디오 스트림
- **반응형 디자인**: 다양한 기기에서 일관된 사용자 경험 제공
- **확장 가능한 아키텍처**: 최적의 성능과 확장성을 위한 Next.js 기반

## 시작하기

### 필수 조건

- Node.js
- npm 또는 yarn

### 설치

1. 레포지토리 클론:
   ```bash
   git clone https://github.com/cqrita/video-stream.git
   cd video-stream
   ```

2. 의존성 설치:
   ```bash
   npm install
   # 또는
   yarn install
   ```

3. 환경 변수 설정:
   루트 디렉토리에 `.env` 파일을 생성하고 다음을 추가:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=

   CLERK_WEBHOOK_SECRET=

   DATABASE_URL= 

   LIVEKIT_API_URL=
   LIVEKIT_API_KEY=
   LIVEKIT_API_SECRET=
   NEXT_PUBLIC_LIVEKIT_WS_URL=

   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=
   ```

### 애플리케이션 실행

```bash
npm run dev
# 또는
yarn dev
```
`http://localhost:3000`에서 애플리케이션을 확인할 수 있습니다.

## 프로젝트 구조

```plaintext
.
├── actions         # 비동기 작업 관리
├── app             # Next.js 애플리케이션 설정 및 초기화
├── components      # 재사용 가능한 컴포넌트
├── hooks           # 커스텀 훅
├── lib             # 라이브러리 및 헬퍼 함수
├── prisma          # Prisma ORM 설정
├── public          # 정적 자산
├── store           # 상태 관리
├── README.md       # 프로젝트 문서
└── ... 기타 파일
```
### TODOs
- [ ] 문서화 강화
- [ ] UI/UX 개선
- [ ] Livekit이 아닌 커스텀 미디어 서버 추가