/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";



const MyJobListCard = (props) => {

    const item = props.item
    const idx = props.idx


    const handleDeleteJob = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_PASS_BaseURL}/remove/${item._id}`)
                    .then(response => {
                        if (response.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }


    return (
        <>
            <tr className="hover:bg-slate-50">
                <td>{idx + 1}</td>
                <td>{item.job_title}</td>
                <td className="text-red-600">{new Date(item.application_deadline).toLocaleDateString("en-GB")}</td>
                <td>{item.salary_range}$</td>
                <td>{item.job_applicants_number} Person</td>
                <td className="flex justify-start gap-3 items-center">
                    <button onClick={handleDeleteJob} className="text-white text-xl p-2 rounded-lg bg-red-600"><MdDeleteSweep /></button>
                    <Link to={`/updateJob/${item._id}`} className="text-black text-xl p-2 rounded-lg border"><CiEdit /></Link>
                    <Link to={`/jobDetails/${item._id}`} className="btn btn-sm btn-outline">View Details</Link>
                </td>
            </tr> 
        </>
    );
};

export default MyJobListCard;