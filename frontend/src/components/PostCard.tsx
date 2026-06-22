import { Post } from '../lib/types';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="mb-6 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{post.title}</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">{post.content}</p>
    </div>
  );
};
