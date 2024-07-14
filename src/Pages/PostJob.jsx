import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthSharer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";


const PostJob = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(null);
    const today = new Date()

    const handlePostJob = e => {
        e.preventDefault()
        const form = e.target
        const name = user.displayName 
        const job_title = form.job_title.value
        const job_posting_date = today
        const application_deadline = startDate
        const salary_range= form.salary_range.value
        const job_applicants_number = 0
        const job_type = form.job_type.value
        const posted_by_email = user.email
        const posted_by_photo = user.photoURL
        const long_description = form.description.value
        const job_banner = form.job_banner.value
        const newJob = { name, job_title, job_posting_date, application_deadline, salary_range, job_applicants_number, job_type, posted_by_email, posted_by_photo, long_description, job_banner }
        

        axios.post(`${import.meta.env.VITE_PASS_BaseURL}/addjob`, newJob)
          .then(function () {
            Swal.fire({
                icon: "success",
                title: "Job Uploaded Successfully",
                showConfirmButton: false,
                timer: 1700
            });
              form.reset()
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
                <h3 className="text-2xl font-bold text-center mb-3">inDeed Lite</h3>
                <p className="text-center my-3 text-green-500">Post A Job For Recruitment.</p>
                <form onSubmit={handlePostJob} className="space-y-5 flex flex-col justify-center items-center">
                    <div className="flex gap-5">
                        <input type="text" name="job_title" placeholder="Job Position" className=" py-2 px-4" required/>
                        <input type="text" name="salary_range" placeholder="Salary Range (200-300)" className=" py-2 px-4" required/>
                    </div>
                    <input type="text" name="job_banner" placeholder="Job Banner URL" className="w-full py-2 px-4"  required/>
                    <input type="textarea" name="description" placeholder="Job Description" rows='4' className="w-full py-2 px-4"  required/>
                    <div className="flex gap-5 w-full">
                        <DatePicker selected={today} dateFormat="dd-MM-yyyy" onChange={(date) => setStartDate(date)} disabled className="border-y-2 w-full py-2 px-4"/>
                        <DatePicker placeholderText="Select Deadline" required selected={startDate} dateFormat="dd-MM-yyyy" onChange={(date) => setStartDate(date)} className="w-full text-red-600 py-2 px-4"/>
                    </div>
                    <select name="job_type" className="w-full py-2 px-4" required>
                        <option value="On Site">On Site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                    <div className="flex gap-5">
                        <input type="text" defaultValue={user.displayName} className="border-y-2 py-2 px-4" disabled/>
                        <input type="email" defaultValue={user.email} className="border-y-2 py-2 px-4" disabled/>
                    </div>
                    <button className="btn btn-block btn-success text-white">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default PostJob;