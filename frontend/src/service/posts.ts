import { Post } from '@/lib/types';
import { apiClient } from './api';

export const postService = {
  // Fetch all posts from the Express API layer
  getAllPosts: async (): Promise<Post[]> => {
    return apiClient<Post[]>('/posts', {
      // 'no-store' ensures Next.js fetches fresh data from Express on every page load
      cache: 'no-store',
    });
  },

  // Example of a future endpoint placeholder
  // getPostById: async (id: string) => apiClient<Post>(`/posts/${id}`),
};
