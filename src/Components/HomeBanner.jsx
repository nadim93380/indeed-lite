/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

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
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-28 h-28">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" id="paper" fill="black">
                                    <path d="M52 64c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4H26c-1.638 0-3.668.841-4.828 2L10 13.171C8.841 14.33 8 16.36 8 18v42c0 2.206 1.794 4 4 4h40zm0-60v56H12V18h10c2.206 0 4-1.794 4-4V4h26zM22 6.828V14h-7.172L22 6.828z"></path>
                                    <path d="M32 16h12a2 2 0 0 0 0-4H32a2 2 0 0 0 0 4zM44 22H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 32H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 42H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zM44 52H20a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z"></path>
                                </svg>
                            </div>
                            <h3 className="text-center">Create Resume</h3>
                        </div>

                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-28 h-28">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="paper-plane"><g><polygon fill="#d3ebe4" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" points="484.76 8.5 161.45 339.03 161.3 339.03 9.24 287.81 484.76 8.5"></polygon><polygon fill="#d3ebe4" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" points="484.76 8.5 492.13 450.56 300.09 385.77 235.03 363.84 484.76 8.5"></polygon><polygon fill="#454b80" points="484.76 8.5 235.03 363.84 209.06 503.5 161.45 339.17 161.45 339.03 484.76 8.5"></polygon><polygon fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" points="484.76 8.5 235.03 363.84 209.06 503.5 161.45 339.17 161.45 339.03 484.76 8.5"></polygon><line x1="161.45" x2="161.3" y1="339.03" y2="339.03" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"></line><polygon fill="#454b80" points="300.09 385.77 209.06 503.5 235.03 363.84 300.09 385.77"></polygon><polygon fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" points="235.03 363.84 209.06 503.5 300.09 385.77 235.03 363.84"></polygon></g></svg>

                            </div>
                            <div>
                                <h3>Apply Jobs</h3>
                            </div>
                        </div>
                        <div className="space-y-2 flex flex-col items-center">
                            <div className="flex items-center justify-center p-5 rounded-full bg-green-500 hover:bg-green-600 border-4 border-blue-950 w-28 h-28">

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