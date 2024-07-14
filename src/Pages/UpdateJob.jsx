import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateJob = () => {
    const item = useLoaderData()
    const [startDate, setStartDate] = useState(item.application_deadline);
    const navigate = useNavigate()

    // Handle Edit Job
    const handleUpdateJob = e => {
        e.preventDefault()
        const form = e.target
        const job_title = form.job_title.value
        const application_deadline = startDate
        const salary_range = form.salary_range.value
        const job_type = form.job_type.value
        const long_description = form.description.value
        const job_banner = form.job_banner.value
        const newJob = { job_title, application_deadline, salary_range, job_type, long_description, job_banner }


        axios.put(`${import.meta.env.VITE_PASS_BaseURL}/updatejob/${item._id}`, newJob)
            .then(function () {
                Swal.fire({
                    icon: "success",
                    title: "Job Updated Successfully",
                    showConfirmButton: false,
                    timer: 1700
                });
                navigate('/myJobs')
                
            })
            .catch(function () {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!Try Again",
                });
                
            });
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto flex justify-center h-[70vh] items-center">
            <div className="bg-slate-100 py-6 px-7">
                <h3 className="text-2xl font-bold text-center">inDeed Lite</h3>
                <p className="text-center my-3 text-green-500">Update Your Job Information</p>
                <form onSubmit={handleUpdateJob} className="space-y-5 flex flex-col justify-center items-center">
                    <div className="flex gap-5 w-full">
                        <input type="text" defaultValue={item.job_title} name="job_title" placeholder="Job Position" className="w-full py-2 px-4" required />
                        <input type="text" defaultValue={item.salary_range} name="salary_range" placeholder="Salary Range (200-300)" className="w-full py-2 px-4" required />
                    </div>
                    <input type="text" defaultValue={item.job_banner} name="job_banner" placeholder="Job Banner URL" className="w-full py-2 px-4" required />
                    <input type="textarea" defaultValue={item.long_description} name="description" placeholder="Job Description" rows='4' className="w-full py-2 px-4" required />
                    <div className="flex gap-5 w-full">
                        <div className="w-full">
                            <DatePicker selected={item.job_posting_date} dateFormat="dd-MM-yyyy" disabled className="border-y-2 py-2 px-4" />
                        </div>
                        <div className="w-full">
                            <DatePicker placeholderText="Select Deadline" required selected={startDate} dateFormat="dd-MM-yyyy" onChange={(date) => setStartDate(date)} className=" text-red-600 py-2 px-4" />
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
                    <button className="btn btn-block btn-success text-white">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;