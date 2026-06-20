export default function Home() {
  const mockPosts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
    },
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Welcome to Blog Hub</h1>
      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
        A simple blog hub built with Next.js 13, Tailwind CSS, and TypeScript.
      </p>
      <div className="mt-8 w-full max-w-2xl">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="mb-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              {post.title}
            </h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
