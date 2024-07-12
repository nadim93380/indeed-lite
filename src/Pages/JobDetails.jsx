import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const item = useLoaderData()
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-10">
            <div>
                <div className="bg-slate-100 p-6 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold">{item.job_title}</h3>
                        <p>Type : <span className={`text-green-600 ${(item.job_type === 'Hybrid') ? "text-blue-500" : ""} ${(item.job_type === 'Remote') ? "text-purple-500" : ""}`}>{item.job_type}</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Posted By : <span className="text-sky-500">{item.name}</span></h1>
                        <p>Applicants : {item.job_applicants_number}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Salary Range : <span className="font-bold">{item.salary_range}$/year</span></p>
                        <p className="text-red-600">Deadline : {item.application_deadline}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;