import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="text-gradient font-display text-[clamp(4rem,15vw,9rem)] font-bold leading-none">
          404
        </p>
        <h1 className="mb-2.5 mt-2.5 font-display text-3xl font-bold">Page not found</h1>
        <p className="text-dim mb-7">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <Button variant="primary">Back home</Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
