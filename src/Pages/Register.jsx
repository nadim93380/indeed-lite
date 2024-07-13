import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthSharer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { creatUser, logout } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault()
        
        const email = e.target.email.value
        const name = e.target.name.value
        const photo = e.target.photoURL.value
        const password = e.target.password.value



        if (!/[A-Z]/.test(password)) {
         
            toast.error("Password Must Have One Uppercase")
            e.target.password.value = ""
            return
        }
        else if (!/[a-z]/.test(password)) {
        
            toast.error("Password Must Have One Lowercase")
            e.target.password.value = ""
            return
        }
        else if (password.length < 6) {
            toast.error("Password should atleast 6 character")
            e.target.password.value = ""
            return
        }

        creatUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                })
                logout()
                Swal.fire({
                    icon: "success",
                    title: "User Created Successfully. Please Login",
                    showConfirmButton: false,
                    timer: 2500
                });
                setTimeout(() => {
                    navigate('/login')
                }, 2800)
                

            })
            .catch(()=> {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "User Already Existed!",
                  });
            })
        e.target.reset()
    }


    return (
        <div className="bg-slate-100 h-[70vh] flex justify-center items-center">
            <div>
                <form onSubmit={handleSignUp} className="space-y-3">
                    <h3 className="text-3xl text-center font-bold">Register</h3>
                    <input type="name" name="name" required placeholder="Full Name" className="input input-bordered w-full" />
                    <input type="photoURL" name="photoURL" required placeholder="Photo URL" className="input input-bordered w-full" />
                    <input type="email" name="email" required placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" name="password" required placeholder="Password" className="input input-bordered w-full" />
                    <button className="btn btn-success btn-block text-white">Login</button>
                </form>
                <div className="flex justify-between">
                    <p>Already Resgistered ?</p>
                    <Link to='/login' className="underline hover:text-blue-800">Register</Link>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;