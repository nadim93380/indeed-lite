import { Link } from "react-router-dom";
import errorGIF from "../assets/ConnectionError.gif"

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="flex justify-center items-center gap-5">
                <img src={errorGIF} className="w-full object-cover h-[50vh]" alt="" />
                <Link to='/' className="btn text-xl font-bold">Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;