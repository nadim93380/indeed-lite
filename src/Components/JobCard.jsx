/* eslint-disable react/prop-types */
import { SlCalender } from "react-icons/sl";

import { Link } from "react-router-dom";


const JobCard = ({ item }) => {
    return (
        <div className="bg-white p-6 space-y-3">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{item.job_title}</h3>
                <p>Type : <span className={`text-green-600 ${(item.job_type === 'Hybrid')?"text-blue-500":""} ${(item.job_type === 'Remote')?"text-purple-500":""}`}>{item.job_type}</span></p>
            </div>
            <div className="flex justify-between items-center">
                <h1>Posted By : <span className="text-sky-500">{item.name}</span></h1>
                <p>Applicants : {item.job_applicants_number}</p>
            </div>

            <div className="flex justify-between items-center">
                <p>Salary Range : <span className="font-bold">{item.salary_range}$/year</span></p>
                <p className="text-red-600 flex justify-center items-center gap-2"><SlCalender /> {new Date(item.application_deadline).toLocaleDateString("en-GB")}</p>
            </div>
            <div className="flex justify-start">
            <button><Link to={`/jobDetails/${item._id}`} className="bg-slate-300 p-2">View Details</Link></button>
            </div>
        </div>
    );
};

export default JobCard;