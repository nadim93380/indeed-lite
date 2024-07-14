/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthSharer";


const MyJobListCard = (props) => {

    const item = props.item
    const idx = props.idx
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(item.application_deadline);


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

    // Handle Edit Job
    const handleUpdateJob = e => {
        e.preventDefault()
        const form = e.target
        const name = user.displayName
        const job_title = form.job_title.value
        const application_deadline = startDate
        const salary_range = form.salary_range.value
        const job_type = form.job_type.value
        const posted_by_email = user.email
        const posted_by_photo = user.photoURL
        const long_description = form.description.value
        const job_banner = form.job_banner.value
        const newJob = { name, job_title, application_deadline, salary_range, job_type, posted_by_email, posted_by_photo, long_description, job_banner }
        console.log(newJob)


        axios.put(`${import.meta.env.VITE_PASS_BaseURL}/updatejob/${item._id}`, newJob)
            .then(function () {
                Swal.fire({
                    icon: "success",
                    title: "Job Updated Successfully",
                    showConfirmButton: false,
                    timer: 1700
                });
                document.getElementById('my_modal_2').close()
            })
            .catch(function () {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!Try Again",
                });
                document.getElementById('my_modal_2').close()
            });
    }

    return (
        <>
            <tr className="hover:bg-slate-50">
                <th>{idx + 1}</th>
                <td>{item.job_title}</td>
                <td className="text-red-600">{item.application_deadline}</td>
                <td>{item.salary_range}$</td>
                <td>{item.job_applicants_number} Person</td>
                <td className="flex justify-start gap-3 items-center">
                    <button onClick={handleDeleteJob} className="text-white text-xl p-2 rounded-lg bg-red-600"><MdDeleteSweep /></button>
                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="text-black text-xl p-2 rounded-lg border"><CiEdit /></button>
                    <Link to={`/jobDetails/${item._id}`} className="btn btn-sm btn-outline">View Details</Link>
                </td>
            </tr>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-slate-100">
                    <h3 className="font-bold text-lg text-center">inDeeD Lite</h3>
                    <p className="py-4 text-center">Update Your Job Details</p>
                    {/* Update Form */}
                    <form onSubmit={handleUpdateJob} className="space-y-5 flex flex-col justify-center items-center">
                        <div className="flex gap-5 w-full">
                            <input type="text" defaultValue={item.job_title} name="job_title" placeholder="Job Position" className="w-full py-2 px-4" required />
                            <input type="text" defaultValue={item.salary_range} name="salary_range" placeholder="Salary Range (200-300)" className="w-full py-2 px-4" required />
                        </div>
                        <input type="text" defaultValue={item.job_banner} name="job_banner" placeholder="Job Banner URL" className="w-full py-2 px-4" required />
                        <input type="textarea" defaultValue={item.long_description} name="description" placeholder="Job Description" rows='4' className="w-full py-2 px-4" required />
                        <div className="flex gap-5 w-full">
                            <div className="w-full">
                                <DatePicker selected={item.job_posting_date} dateFormat="yyyy-MM-dd" disabled className="border-y-2 py-2 px-4" />
                            </div>
                            <div className="w-full">
                                <DatePicker placeholderText="Select Deadline" required selected={item.application_deadline} dateFormat="yyyy-MM-dd" onChange={(date) => setStartDate(date)} className=" text-red-600 py-2 px-4" />
                            </div>
                        </div>
                        <select name="job_type" defaultValue={item.job_type} className="w-full py-2 px-4" required>
                            <option value="On Site">On Site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                        </select>
                        <div className="flex gap-5 w-full">
                            <input type="text" defaultValue={item.name} className="border-y-2 py-2 px-4 w-full" disabled />
                            <input type="email" defaultValue={item.posted_by_email} className="border-y-2 py-2 px-4 w-full" disabled />
                        </div>
                        <button className="btn btn-block btn-success text-white">Submit</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default MyJobListCard;