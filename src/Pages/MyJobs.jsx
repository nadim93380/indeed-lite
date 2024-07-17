import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Authentication/AuthSharer";
import MyJobListCard from "../Components/MyJobListCard";
import NoData from "../Components/NoData";
import { useQuery } from "@tanstack/react-query"
import Loading from "../Common/Loading";


const MyJobs = () => {

    const { user } = useContext(AuthContext)

    const { isLoading, isError, data:show=[], error } = useQuery({
        queryKey: ['ownListedJob'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_PASS_BaseURL}/jobsOf/${user.email}`)
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
        <div>
            <div className="w-11/12 md:w-10/12 mx-auto py-5">
                <div className="overflow-x-auto">
                    <table className="table table-md">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Job Title</th>
                                <th>Deadline</th>
                                <th>Salary Range</th>
                                <th>Applicants</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show.map((item, idx) => <MyJobListCard key={idx} item={item} idx={idx}></MyJobListCard>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyJobs;