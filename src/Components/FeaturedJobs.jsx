import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';

const FeaturedJobs = () => {

    const [value, setValue] = useState(0);
    const [show,setShow]=useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
        .then(data=>setShow(data))
    },[])

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
                    show.map((item,idx)=><JobCard key={idx} item={item}></JobCard>)
            }
            </div>
        </div>
    );
};

export default FeaturedJobs;