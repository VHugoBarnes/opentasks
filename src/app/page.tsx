import { TypographyH1 } from "@/shared/components/ui/typography/h1";
import { TypographyMuted } from "@/shared/components/ui/typography/p-muted";
import { Button } from "@shared/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center space-y-8 h-svh">
      <div className="text-center space-y-4">
        <TypographyH1>
          OpenTasks
        </TypographyH1>
        <TypographyMuted>
          Lorem ipsum your tasks
        </TypographyMuted>
      </div>

      <div className="flex flex-col space-y-2">
        <Button asChild>
          <Link href="/auth/login">
            Login
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/auth/signup">
            Create account
          </Link>
        </Button>
      </div>
    </main>
  );
}
