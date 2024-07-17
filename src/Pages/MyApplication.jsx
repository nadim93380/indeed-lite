import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthSharer";
import axios from "axios";
import MyApplicationListCard from "../Components/MyApplicationListCard";
import NoData from "../Components/NoData";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Common/Loading";

const MyApplication = () => {
    const {user}= useContext(AuthContext)
    
    const { isLoading, isError, data:show=[], error } = useQuery({
        queryKey: ['appliedJobs'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_PASS_BaseURL}/myApplication/${user.email}`)
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
                                <th>Resume URL</th>
                                <th>Employer Email</th>
                                <th>Application Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show.map((item, idx) => <MyApplicationListCard key={idx} item={item} idx={idx}></MyApplicationListCard>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyApplication;