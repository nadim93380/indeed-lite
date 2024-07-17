import loadingGIF from "../assets/Loading.gif"

const Loading = () => {
    return (
        <div className="w-full py-52 flex justify-center items-center">
            <img src={loadingGIF} className="h-[20vh]"/>
        </div>
    );
};

export default Loading;