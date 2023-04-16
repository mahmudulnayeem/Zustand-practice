import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const usePostsStore = create(
  devtools(
    persist(
      (set, get: any) => ({
        posts: [],
        fetchPosts: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const data = await response.json();
          set({ posts: data });
        },
        removePost: (id: number) => {
          const posts = get().posts.filter((post: any) => post.id !== id);
          set({ posts });
        },
      }),
      { name: "cart" }
    )
  )
);
