import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthSharer";
import Swal from "sweetalert2";


const Login = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const to = location.state

    // Handle Email Pass Sign In
    const handleSignIn = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1700
                  });
                setTimeout(() => {
                    navigate(`${to ? to : "/"}`)
                }, 2000)
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
                console.log(err.message)
            })
        e.target.reset()

    }
    
     // Handle Google Sign In
     const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1700
                  });
                setTimeout(() => {
                    navigate(`${to ? to : "/"}`)
                }, 2000)
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                  });
            })
    }

    return (
        <div className="bg-slate-100 h-[70vh] flex justify-center items-center">
            <div>
                <form onSubmit={handleSignIn} className="space-y-3">
                    <h3 className="text-3xl text-center font-bold">Login</h3>
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" name="password" required placeholder="Password" className="input input-bordered w-full" />
                    <button className="btn btn-success btn-block text-white">Login</button>
                </form>
                <div className="flex justify-between">
                    <p>New Here ?</p>
                    <Link to='/register' className="underline hover:text-blue-800">Register</Link>
                </div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-block mt-3"><FcGoogle /> Continue With GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;