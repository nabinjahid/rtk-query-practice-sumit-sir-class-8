import { useGetPostQuery } from "../features/api/apiSlice";
import Button from "./Button";

export default function Post({ id }) {
    const { data: post, isError, isLoading, error } = useGetPostQuery(id);

    let content;

    if (isLoading) {
        content = <h1>Loading post...</h1>;
    }
    if (!isLoading && isError) {
        content = (
            <h1 className="text-red-500">Something wrong happened - {error}</h1>
        );
    }
    if (!isLoading && !isError) {
        if (post.id) {
            content = <p>{post.body}</p>;
        } else {
            content = <h1>No post found!</h1>;
        }
    }

    return (
        <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
            <Button type={"danger"} id={id}>Edite</Button>
        </div>
    );
}
