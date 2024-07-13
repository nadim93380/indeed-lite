import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthSharer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostJob = () => {
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="w-11/12 md:w-10/12 mx-auto flex justify-center h-[70vh] items-center">
            <div className="bg-slate-100 py-6 px-7">
                <h3 className="text-2xl font-bold text-center mb-3">inDeed Lite</h3>
                <form className="space-y-5 flex flex-col justify-center items-center">
                    <div className="flex gap-5">
                        <input type="text" name="job_title" placeholder="Job Position" className=" py-2 px-4"/>
                        <input type="number" name="job_title" placeholder="Salary Range (200-300)" className=" py-2 px-4"/>
                    </div>
                    <input type="text" placeholder="Job Banner URL" className="w-full py-2 px-4" />
                    <input type="textarea" placeholder="Job Description" className="w-full py-2 px-4" />
                    <div className="flex gap-5 w-full">
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} disabled className="w-full py-2 px-4"/>
                        <DatePicker selected={startDate} defaultValue="Hello" onChange={(date) => setStartDate(date)} className="w-full py-2 px-4"/>
                    </div>
                    <select className="w-full py-2 px-4">
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