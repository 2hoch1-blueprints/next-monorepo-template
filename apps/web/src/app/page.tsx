import { Button } from '@workspace/ui/components/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Next Monorepo Template</h1>
        <p className="mt-3 text-lg text-neutral-500">
          pnpm + Turborepo + Next.js 16 + TypeScript 6
        </p>
      </div>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Documentation</Button>
      </div>
    </main>
  );
}
