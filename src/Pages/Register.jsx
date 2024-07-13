import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="bg-slate-100 h-[70vh] flex justify-center items-center">
            <div>
                <form className="space-y-3">
                    <h3 className="text-3xl text-center font-bold">Register</h3>
                    <input type="name" name="name" required placeholder="Full Name" className="input input-bordered w-full" />
                    <input type="photoURL" name="photoURL" required placeholder="Photo URL" className="input input-bordered w-full" />
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" name="password" required placeholder="Password" className="input input-bordered w-full" />
                    <button className="btn btn-success btn-block text-white">Login</button>
                </form>
                <div className="flex justify-between">
                    <p>Already Resgistered ?</p>
                    <Link to='/login' className="underline hover:text-blue-800">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;