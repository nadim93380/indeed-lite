/* eslint-disable no-undef */
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';
import NoData from './NoData';

const FeaturedJobs = () => {

    const [value, setValue] = useState(0);
    const [show, setShow] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            getData('alljobs')
            return
        }
        if (newValue === 1) {
            getData('jobs/Onsite')
            return
        }
        if (newValue === 2) {
            getData('jobs/Remote')
            return
        }
        if (newValue === 3) {
            getData('jobs/Hybrid')
            return
        }
    };

    const getData = async (jobType) => {
        const { data } = await axios.get(`${import.meta.env.VITE_PASS_BaseURL}/${jobType}`)
        setShow(data)
    }

    useEffect(() => {
        getData('alljobs')
    }, [])

    if (show.length === 0) {
        return <NoData></NoData>
    }

    return (
        <div className="bg-slate-200 py-9 space-y-5">
            <div className='text-center space-y-4 '>
                <h1 className="text-4xl font-bold">Featured <span className="text-green-600">Jobs</span></h1>
                <p className="w-[65%] mx-auto">eJobs featured jobs are shown here, You select the job according to your skill. Apply by clicking on & Apply Now If you have not created your CV at eJobs, create a CV .</p>
            </div>
            <div className='border-t border-black'>
                <Box sx={{ width: '100%', bgcolor: '' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="All Jobs" />
                        <Tab label="On Site Jobs" />
                        <Tab label="Remote Jobs" />
                        <Tab label="Hybrid Jobs" />
                    </Tabs>
                </Box>
            </div>
            <div className='w-11/12 md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    show.map((item, idx) => <JobCard key={idx} item={item}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;