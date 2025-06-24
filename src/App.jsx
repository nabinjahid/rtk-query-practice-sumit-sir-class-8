import { useState } from "react";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";

export default function App() {
    const [showPosts, setShowPosts] = useState(true);

    return (
        <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                RTK Query
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <button
                    onClick={() => setShowPosts((prevState) => !prevState)}
                    className="bg-blue-600 text-white rounded py-2 px-3"
                >
                    Toggle Posts
                </button>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                {showPosts && <Posts />}
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
                <AddPost />
            </div>
        </div>
    );
}
