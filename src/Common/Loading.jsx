import loadingGIF from "../assets/Loading.gif"

const Loading = () => {
    return (
        <div className="w-full py-64 flex justify-center items-center">
            <img src={loadingGIF} className="h-[25vh]"/>
        </div>
    );
};

export default Loading;