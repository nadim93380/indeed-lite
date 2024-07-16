/* eslint-disable react/no-unknown-property */


const NoData = () => {
    
    return (
        <div className="flex justify-center items-center py-14 flex-col gap-4">
            <div className="w-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.7 26.4" id="paste-cancel"><line x1="22.05" x2="22.05" y1="8.66" y2="16.72" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><line x1="7.59" x2="15.64" y1="2.14" y2="2.14" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M132.67 517.14h-9.58a2.64 2.64 0 01-2.64-2.64V498.73M137.55 501.61h-6.3a.11.11 0 01-.11-.11v-6.41l3.22 3.26z" transform="translate(-115.5 -492.95)"></path><line x1="1.5" x2="25.2" y1="1.5" y2="24.9" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></line></svg>
            </div>
            <h3 className="text-2xl ">No Data Found!</h3>
        </div>
    );
};

export default NoData;