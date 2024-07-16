/* eslint-disable react/prop-types */

import { MdDeleteSweep } from "react-icons/md";


const MyApplicationListCard = (props) => {
    const item = props.item
    const idx = props.idx
    return (
        <tr className="hover:bg-slate-50">
                <td>{idx + 1}</td>
                <td>{item.applied_job_title}</td>
                <td className="text-red-600">{item.applicant_CV}</td>
                <td>{item.employer_email}</td>
                <td><span className="bg-sky-300 py-2 px-4 rounded-full">{item.application_status}</span></td>
                <td className="flex justify-start gap-3 items-center">
                    <button className="text-white text-xl p-2 rounded-lg bg-red-600"><MdDeleteSweep /></button>
                </td>
            </tr> 
    );
};

export default MyApplicationListCard;