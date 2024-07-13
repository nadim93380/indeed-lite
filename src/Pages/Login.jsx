import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="bg-slate-100 h-[70vh] flex justify-center items-center">
            <div>
                <form className="space-y-3">
                    <h3 className="text-3xl text-center font-bold">Login</h3>
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" name="password" required placeholder="Password" className="input input-bordered w-full" />
                    <button className="btn btn-success btn-block text-white">Login</button>
                </form>
                <div className="flex justify-between">
                    <p>New Here ?</p>
                    <Link to='/register' className="underline hover:text-blue-800">Register</Link>
                </div>
                <button className="btn btn-outline btn-block mt-3"><FcGoogle /> Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;