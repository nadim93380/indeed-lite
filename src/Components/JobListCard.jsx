/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const JobListCard = (props) => {

    const item = props.item
    const idx = props.idx
    return (
        <tr className="hover:bg-slate-50">
            <th>{idx+1}</th>
            <td>{item.job_title}</td>
            <td>{new Date(item.job_posting_date).toLocaleDateString("en-GB")}</td>
            <td className="text-red-600">{new Date(item.application_deadline).toLocaleDateString("en-GB")}</td>
            <td>{item.salary_range}$</td>
            <td><Link to={`/jobDetails/${item._id}`} className="btn btn-sm btn-outline">View Details</Link></td>
        </tr>
    );
};

export default JobListCard;