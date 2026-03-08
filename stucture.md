shadowing-app
│
├── app
│   ├── layout.tsx
│   │
│   ├── page.tsx
│   │
│   ├── login
│   │   └── page.tsx
│   │
│   ├── dashboard
│   │   └── page.tsx
│   │
│   ├── video
│   │   └── [videoId]
│   │       └── page.tsx
│   │
│   ├── favorites
│   │   └── page.tsx
│   │
│   ├── history
│   │   └── page.tsx
│   │
│   └── api
│       ├── auth
│       │   └── [...nextauth]
│       │       └── route.ts
│       │
│       ├── video
│       │   ├── parse
│       │   │   └── route.ts
│       │   └── recommend
│       │       └── route.ts
│       │
│       ├── transcript
│       │   └── route.ts
│       │
│       ├── history
│       │   └── route.ts
│       │
│       └── favorites
│           └── route.ts
│
├── components
│   ├── player
│   ├── transcript
│   ├── video
│   └── ui
│
├── models
│   ├── User.ts
│   ├── Video.ts
│   ├── Transcript.ts
│   ├── History.ts
│   └── Favorite.ts
│
├── lib
│   ├── mongodb.ts
│   ├── auth.ts
│   └── youtube.ts
│
├── services
│   ├── videoService.ts
│   ├── transcriptService.ts
│   ├── historyService.ts
│   └── recommendationService.ts
│
├── hooks
│
├── utils
│
├── types
│
├── middleware.ts
│
└── package.json