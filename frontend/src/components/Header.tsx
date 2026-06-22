import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          Blog <span className="text-blue-600 dark:text-blue-400">Hub</span>
        </Link>
      </div>
    </header>
  );
};
