/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../Authentication/AuthSharer";
import Loading from "../Common/Loading";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Login First To Continue.",
          });
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    if (user) {
        return children
    }

};

export default PrivateRoute;