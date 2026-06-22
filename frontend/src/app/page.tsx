import { Post } from '../lib/types';
import { postService } from '../service/posts';
import { PostCard } from '../components/PostCard';

export default async function Home() {
  let posts: Post[] = [];
  let errorMsg = '';

  try {
    // Fetch directly from the modular Express endpoint
    posts = await postService.getAllPosts();
  } catch (error) {
    errorMsg = 'Could not load blog posts. Ensure your Express server is running on port 5000.';
    console.error(error);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">Welcome to Blog Hub</h1>
      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
        Explore the latest insights and updates on web development, programming, and technology
        trends. Dive into our in-depth articles, tutorials, and expert opinions to stay ahead in the
        tech world.
      </p>
      <div className="mt-8 w-full max-w-2xl">
        {!errorMsg && posts.length === 0 ? (
          <p className="text-center text-zinc-500 dark:text-zinc-400">No posts available.</p>
        ) : errorMsg ? (
          <p className="text-center text-red-500">{errorMsg}</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
}
