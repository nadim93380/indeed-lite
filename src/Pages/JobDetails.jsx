import { useLoaderData, useNavigate } from "react-router-dom";
import { VscGitStashApply } from "react-icons/vsc";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthSharer";
import Swal from "sweetalert2";
import axios from "axios";



const JobDetails = () => {
    const item = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const today = Date.now()
    const deadline = item.application_deadline
    const Deadline = deadline instanceof Date ? deadline.getTime() : new Date(deadline).getTime()

    // For Job Apply

    const handleApply = async(e) => {
        e.preventDefault()
        const form = e.target
        const applicant_CV = form.applicant_CV.value
        const applicant_name = user.displayName
        const applicant_email = user.email
        const applied_job_id = item._id
        const applied_job_title = item.job_title
        const employer_email = item.posted_by_email
        const application_status = "Submitted"
        const newApplication = { applicant_CV, applicant_name, applicant_email, applied_job_id, employer_email, application_status,applied_job_title }


        if (today > Deadline) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Deadline Expired",
            });
            form.reset()
            document.getElementById('my_modal_2').close()
            return
        }
        else {

            try {
                axios.patch(`${import.meta.env.VITE_PASS_BaseURL}/updateJobApplicant/${item._id}`)
                const { data } =await axios.post(`${import.meta.env.VITE_PASS_BaseURL}/addApplication`,newApplication)
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Application Has Been Submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myApplication')
                }
                
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something Went Wrong! Try Again Later.",
                });
            }
            form.reset()
            document.getElementById('my_modal_2').close()
        }
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div>
                <img src={item.job_banner} alt="" className="w-full object-cover h-[30vh]" />
            </div>
            <div>
                <div className="bg-slate-100 p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{item.job_title}</h3>
                        <p>Type : <span className={`text-green-600 ${(item.job_type === 'Hybrid') ? "text-blue-500" : ""} ${(item.job_type === 'Remote') ? "text-purple-500" : ""}`}>{item.job_type}</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Vacancies : <span className="text-sky-500">02</span></h1>
                        <p>Applicants : {item.job_applicants_number}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Salary Range : <span className="font-bold text-green-600">{item.salary_range}$/year</span></p>
                        <p className="text-red-600 flex justify-center items-center gap-2">Deadline : {new Date(item.application_deadline).toLocaleDateString("en-GB")}</p>
                    </div>
                    <div className="border-t py-3">
                        <h2 className="font-bold text-xl underline">Job Description : </h2>
                        <p>{item.long_description}</p>
                    </div>
                    {/* Employer info */}
                    <div className="flex justify-between items-center border-t py-3">
                        <div className="flex justify-start gap-4 items-center">
                            <img src={item.posted_by_photo} className="h-24 w-24 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold">Name : {item.name}</h4>
                                <p className="text-sm">Human Resource Management</p>
                                <p className="text-sm">Email : {item.posted_by_email}</p>
                                <p className="text-sm">InDeed Lite Corporation.</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => document.getElementById('my_modal_2').showModal()} className="btn btn-block btn-success text-white" disabled={user.email === item.posted_by_email}>Apply Now <VscGitStashApply /></button>
                            <div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box bg-slate-100">
                                        <h3 className="text-2xl font-bold text-center mb-3">inDeed Lite</h3>
                                        <p className="text-center my-3 text-green-500">Apply To This Job.</p>
                                        <form onSubmit={handleApply} className="space-y-5 flex flex-col justify-center items-center">
                                            <input type="text" name="applicant_CV" placeholder="Resume URL" rows='4' className="w-full py-2 px-4" required />
                                            <div className="flex gap-5">
                                                <input type="text" defaultValue={user.displayName} className="border-y-2 py-2 px-4" disabled />
                                                <input type="email" defaultValue={user.email} className="border-y-2 py-2 px-4" disabled />
                                            </div>
                                            <button className="btn btn-block btn-success text-white">Submit</button>
                                        </form>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;