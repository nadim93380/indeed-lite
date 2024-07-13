/* eslint-disable react/prop-types */

import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";


const JobListCard = (props) => {

    const item = props.item
    const idx = props.idx
    return (
        <tr className="hover:bg-slate-50">
            <th>{idx+1}</th>
            <td>{item.job_title}</td>
            <td>{item.job_posting_date}</td>
            <td className="text-red-600">{item.application_deadline}</td>
            <td>{item.salary_range}$</td>
            <td><Link to={`/jobDetails/${item._id}`} className="btn btn-sm btn-outline">View Details</Link></td>
        </tr>
    );
};

export default JobListCard;