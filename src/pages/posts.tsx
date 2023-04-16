'use-client'
import PostCart from '@/components/postCart'
import Link from 'next/link'
import { usePostsStore } from '../../zustandStore/postStore'
const Posts = () => {
    const posts = usePostsStore((state: any) => state.posts)

    return (
        <div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3 my-8" href={'/'}>
                Back
            </Link>


            {
                posts.map((post: any) => {
                    return (
                        <PostCart key={post.id} post={post} />
                    )
                })
            }
        </div>
    )
}

export default Posts;