import axios from "axios";
import JobListCard from "../Components/JobListCard";
import NoData from "../Components/NoData";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Common/Loading";


const AllJobs = () => {

    const { isLoading, isError, data:show=[], error } = useQuery({
        queryKey: ['allJobs'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_PASS_BaseURL}/allJobs`)
            return data
        },
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    if (error || isError) {
        return <NoData></NoData>
    }
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