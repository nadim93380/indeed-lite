/* eslint-disable react/prop-types */


const JobCard = ({item}) => {
    return (
        <div className="bg-white p-6 space-y-2">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{item.job_title}</h3>
                <p>Type : <span className="text-green-600">{item.job_type}</span></p>
            </div>
            <h1>Posted By : <span className="text-sky-400">{item.name}</span></h1>
            
            <div className="flex justify-between items-center">
                <p>Salary Range : <span className="font-bold">{item.salary_range}$/year</span></p>
                <p className="text-red-600">Deadline : {item.application_deadline}</p>
            </div>
            <button className="bg-slate-300 p-2">View Details</button>
        </div>
    );
};

export default JobCard;