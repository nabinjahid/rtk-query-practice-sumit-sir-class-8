import { useEffect, useState } from "react";
import {
  useAddPostMutation,
  useEditPostMutation,
  useGetPostQuery,
} from "../features/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { editeMode } from "../features/editeMode/editeModeSlice";
import { editePost } from "../features/editPost/editePostSlice";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const isEditedMode = useSelector((state) => state.editeMode.editeMode);
  const editedPostId = useSelector((state) => state.editePost.editepost);
  const dispatch = useDispatch();

  //   post that have to be edited
  const { data: editedPost } = useGetPostQuery(editedPostId, {
    skip: !editedPostId,
  });

 
 useEffect(() => {
  if (isEditedMode && editedPost) {
    setTitle(editedPost.title);
    setContent(editedPost.body);
  }
}, [isEditedMode, editedPost]);

  const [addPost, { data: post, isLoading, isError, isSuccess }] =
    useAddPostMutation();

  const [editPost] = useEditPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditedMode) {
      editPost({
        id: editedPostId,
        data: {
          title,
          body: content,
        },
      });

      dispatch(editeMode(false));
      dispatch(editePost(""));
      setTitle("");
      setContent("");
    } else {
      addPost({
        title,
        body: content,
      });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="p-10 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-full"
          type="text"
          placeholder="Enter post title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter post content"
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
          disabled={isLoading}
        >
          {isEditedMode ? "Update" : "Save Post"}
        </button>
      </form>

      {isSuccess && (
        <h1 className="text-green-600">
          Post id {post.id} was created successfully!
        </h1>
      )}
      {isError && <h1 className="text-red-600">An error occured!</h1>}
    </div>
  );
}
