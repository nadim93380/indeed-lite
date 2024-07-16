import axios from "axios";
import { useEffect, useState } from "react";
import JobListCard from "../Components/JobListCard";
import NoData from "../Components/NoData";


const AllJobs = () => {

    const [show, setShow] = useState([])

    const getData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_PASS_BaseURL}/allJobs`)
        setShow(data)
    }

    useEffect(() => {
        getData()
    }, [])

    if (show.length === 0) {
        return <NoData></NoData>
    }

    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-5">
            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {show.map((item,idx)=><JobListCard key={idx} item={item} idx={idx}></JobListCard>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;