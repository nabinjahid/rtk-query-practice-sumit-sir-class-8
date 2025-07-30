import { useDispatch } from "react-redux";
import { editeMode } from "../features/editeMode/editeModeSlice";
import { editePost } from "../features/editPost/editePostSlice";

export default function Button({ children, type, id }) {

    const dispatch = useDispatch()
    

    const editePostHandler =() => {
        dispatch(editeMode(true))
        dispatch(editePost(id))
        
    }


    
    const style =
        type === "danger"
            ? "bg-red-500 text-white px-3 py-2 rounded shadow"
            : "bg-blue-500 text-white px-3 py-2 rounded shadow";



    return (
        <button className={style} onClick={editePostHandler}>
            {children}
        </button>
    );
}
