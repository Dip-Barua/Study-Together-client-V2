import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center text-center h-screen">
            <div id="error-page">
                <h1 className="my-4 font-bold text-8xl">404</h1>
                <h1 className="my-2 font-bold text-3xl">Oops! Page not found.</h1>
                <p className="text-2xl">Sorry, the page you are looking for does not exists in our directory</p>
                <button onClick={() => window.history.back()} 
                  className="bg-purple-600 text-white font-bold px-10 py-3 flex items-center gap-2 text-xl my-5 mx-auto rounded-full hover:bg-transparent disabled:hover:border-none disabled:hover:text-wh hover:text-purple-700 hover:border-2 hover:border-purple-700 disabled:hover:bg-purple-600  disabled:opacity-50"
                  >Go Back</button>
            </div>
        </div>

    );
};

export default Error;