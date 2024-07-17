/* eslint-disable react/no-unescaped-entities */


const HomeBanner = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcCUyMGRlc2t8ZW58MHx8MHx8fDA%3D)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Make Future</h1>
                    <p className="mb-5">
                        ejobs.com.bd is Bangladesh's leading job search and recruitment platform, connecting job seekers with employers from all over the country. With a mission to make job search easier and more efficient, ejobs.com.bd provides an easy-to-use platform for job seekers to find their perfect job match and employers to find the right talent for their organization.
                    </p>
                    <div className="flex justify-around items-center">
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-20 h-20 md:w-28 md:h-28">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" id="paper" fill="black">
                                    <path d="M52 64c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4H26c-1.638 0-3.668.841-4.828 2L10 13.171C8.841 14.33 8 16.36 8 18v42c0 2.206 1.794 4 4 4h40zm0-60v56H12V18h10c2.206 0 4-1.794 4-4V4h26zM22 6.828V14h-7.172L22 6.828z"></path>
                                    <path d="M32 16h12a2 2 0 0 0 0-4H32a2 2 0 0 0 0 4zM44 22H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 32H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 42H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 52H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"></path>
                                </svg>
                            </div>
                            <h3 className="text-center">Create Resume</h3>
                        </div>

                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-20 h-20 md:w-28 md:h-28">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="paper-plane"><path fill="#231f20" d="M19.7,40c-0.1,0-0.3,0-0.4-0.1L1.6,32.4C1.2,32.3,1,31.9,1,31.5c0-0.4,0.3-0.7,0.6-0.9L61.7,7.3
			c0.5-0.2,1,0,1.2,0.4c0.2,0.4,0.1,1-0.3,1.2l-42.4,31C20.1,40,19.9,40,19.7,40z M4.4,31.6l15.1,6.5l36.2-26.4L4.4,31.6z"></path><path fill="#231f20" d="M24.8,56.7c-0.4,0-0.8-0.3-0.9-0.7l-5.2-16.7c-0.1-0.4,0-0.8,0.4-1.1L61.5,7.4c0.4-0.3,1-0.2,1.3,0.1
			c0.3,0.4,0.3,1,0,1.3L29.6,42.9l-3.9,13.2C25.7,56.5,25.3,56.7,24.8,56.7C24.9,56.7,24.8,56.7,24.8,56.7z M20.8,39.5l4.1,13.1
			l3-10.4c0-0.2,0.1-0.3,0.2-0.4l25.6-26.2L20.8,39.5z"></path><path fill="#231f20" d="M52.2,52.4c-0.1,0-0.2,0-0.3-0.1l-23.4-9c-0.3-0.1-0.5-0.4-0.6-0.7c-0.1-0.3,0-0.7,0.3-0.9L61.3,7.6
			c0.3-0.3,0.8-0.4,1.2-0.2S63.1,8,63,8.5l-9.8,43.2c-0.1,0.3-0.2,0.5-0.5,0.6C52.5,52.3,52.4,52.4,52.2,52.4z M30.5,42.1l21.1,8.1
			l8.8-38.9L30.5,42.1z"></path><path fill="#231f20" d="M24.8,56.7c-0.1,0-0.3,0-0.4-0.1c-0.4-0.2-0.6-0.7-0.5-1.1l3.9-13.4c0.1-0.3,0.3-0.5,0.5-0.6
			c0.2-0.1,0.5-0.1,0.8,0l4.5,1.7c0.3,0.1,0.5,0.3,0.6,0.6s0,0.6-0.1,0.8l-8.4,11.6C25.4,56.6,25.1,56.7,24.8,56.7z M29.4,43.6
			l-2.1,7.2l4.6-6.2L29.4,43.6z"></path></svg>

                            </div>
                            <div>
                                <h3>Apply Jobs</h3>
                            </div>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-20 h-20 md:w-28 md:h-28">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="pencil-case"><path d="M39 20h-2.915l3.754-12.878a4 4 0 0 0-7.68-2.239L29 15.722V3a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v17h-.137l-.918-6.2c-.243-1.04-.779-2.321-2.028-2.608a3.974 3.974 0 0 0 .663-3.235c-.326-1.4-2.806-6.537-5.488-5.906a1 1 0 0 0-.746 1.2 6.051 6.051 0 0 1-.777 3.032A5.988 5.988 0 0 0 8.79 9.78a3.792 3.792 0 0 0 2.029 2.62 4.068 4.068 0 0 0-.641 3.3l1.39 4.3H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.054L11 45.056A1 1 0 0 0 12 46h24a1 1 0 0 0 1-.944L37.946 28H39a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-9.164 0L32.96 9.283 36.8 10.4 34 20h-4.164Zm6.723-15.918a2 2 0 0 1 1.36 2.48l-.56 1.92-3.84-1.119.56-1.92a2 2 0 0 1 2.48-1.361ZM21 18h2v-2h-2v-3h2v-2h-2V8h2V6h-2V4h6v16h-6v-2ZM11.409 7.07a12.705 12.705 0 0 0 .892-2.6 10.355 10.355 0 0 1 2.332 3.946 2 2 0 0 1-3.9.911 5.652 5.652 0 0 1 .676-2.257Zm.694 8.1a2 2 0 0 1 3-2.153 1.964 1.964 0 0 1 .877 1.162L16.842 20h-3.173ZM35.054 44H12.946l-.889-16h23.886ZM38 26H10v-4h28v4Z"></path></svg>

                            </div>
                            <div>
                                <h3>Post Jobs</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;