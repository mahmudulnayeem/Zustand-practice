'use-client'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'
import { shallow } from 'zustand/shallow'
import { usePostsStore } from '../../zustandStore/postStore'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const fetchPosts = usePostsStore((state: any) => state.fetchPosts, shallow)
  const posts = usePostsStore((state: any) => state.posts)

  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">{posts?.length} Posts here</h1>
      <div >

        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3" href={'/posts'}>
          Posts
        </Link>

      </div>

    </main>
  )
}
