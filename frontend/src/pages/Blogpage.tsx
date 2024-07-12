import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Fullblog } from "../components/Fullblog";
import { Spinner } from "../components/Spinner";
import { Appbar } from "../components/Appbar";

export const Blogpage = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id : id|| ""
    });
    if(loading) {
        return <div> <Appbar></Appbar>
        <div className="flex h-screen justify-center items-center">
          <Spinner></Spinner>
        </div>
        </div>
    }
    return <div>
        <Fullblog blog={blog} ></Fullblog>
    </div>
}

