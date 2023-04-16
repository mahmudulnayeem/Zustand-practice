import { usePostsStore } from "../../zustandStore/postStore"

const PostCart = ({ post }: { post: any }) => {
    const { title, body, id } = post
    const removePost = usePostsStore((state: any) => state.removePost)
    return (
        <div className="border-2 border-gray-500 my-2 mx-3 p-2 flex items-center justify-between">
            <div>
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{body}</p></div>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-3 "
                onClick={() => removePost(id)}
            >
                Remove
            </button>
        </div>
    )
}

export default PostCart