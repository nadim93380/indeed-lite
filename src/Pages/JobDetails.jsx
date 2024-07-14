import { useLoaderData } from "react-router-dom";
import { VscGitStashApply } from "react-icons/vsc";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const JobDetails = () => {
    const item = useLoaderData()
    // For Job Apply
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    return (
        <div className="w-11/12 md:w-10/12 mx-auto">
            <div>
                <img src={item.job_banner} alt="" className="w-full object-cover h-[30vh]" />
            </div>
            <div>
                <div className="bg-slate-100 p-5 space-y-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{item.job_title}</h3>
                        <p>Type : <span className={`text-green-600 ${(item.job_type === 'Hybrid') ? "text-blue-500" : ""} ${(item.job_type === 'Remote') ? "text-purple-500" : ""}`}>{item.job_type}</span></p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Vacancies : <span className="text-sky-500">02</span></h1>
                        <p>Applicants : {item.job_applicants_number}</p>
                    </div>

                    <div className="flex justify-between items-center">
                        <p>Salary Range : <span className="font-bold text-green-600">{item.salary_range}$/year</span></p>
                        <p className="text-red-600 flex justify-center items-center gap-2">Deadline : {item.application_deadline}</p>
                    </div>
                    <div className="border-t py-3">
                        <h2 className="font-bold text-xl underline">Job Description : </h2>
                        <p>{item.long_description}</p>
                    </div>
                    {/* Employer info */}
                    <div className="flex justify-between items-center border-t py-3">
                        <div className="flex justify-start gap-4 items-center">
                            <img src={item.posted_by_photo} className="h-24 w-24 rounded-full object-cover" />
                            <div>
                                <h4 className="font-bold">Name : {item.name}</h4>
                                <p className="text-sm">Human Resource Management</p>
                                <p className="text-sm">Email : {item.posted_by_email}</p>
                                <p className="text-sm">InDeed Lite Corporation.</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleOpen} className="btn btn-block btn-success text-white">Apply Now <VscGitStashApply /></button>
                            <div>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    slots={{ backdrop: Backdrop }}
                                    slotProps={{
                                        backdrop: {
                                            timeout: 500,
                                        },
                                    }}
                                >
                                    <Fade in={open}>
                                        <Box sx={style}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;