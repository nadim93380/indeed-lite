import { useContext } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Authentication/AuthSharer";
import { toast, ToastContainer } from "react-toastify";



const Profile = () => {

    const { user, updateUserData } = useContext(AuthContext)

    const handleUpdate = (status = true) => {

        if (status) {
            const name = prompt("Enter New Name");
            updateUserData(name, false)
                .then(() => {
                    toast("Name Updated Successfully")
                })
        }
        if (!status) {
            const photo = prompt("Enter New Photo Name");
            updateUserData(false, photo)
                .then(() => {
                    toast("Photo Updated Successfully")
                })

        }


    }

    return (
        <div className="py-8">
            <div className="flex justify-center mb-7">
                <div className="w-20">
                    <img referrerPolicy="no-referer" className="rounded-full object-cover w-full border" src={user?.photoURL ? user.photoURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} />
                </div>
            </div>
            <div className="w-full md:w-10/12  mx-auto">
                <table className=" w-full sm:bg-white  overflow-hidden ">
                    <thead className="text-black">

                        <tr className="bg-[#222E3A]/[6%] table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="py-3 px-1 md:px-5 text-left border border-b">
                                Category
                            </th>
                            <th className="py-3 px-5 text-left w-[75%] border border-b">Data</th>
                            <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                                Action
                            </th>
                        </tr>

                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                        {/* Row 2 */}
                        <tr
                            className="table-row mb-2 sm:mb-0"

                        >
                            <td className="border hover:bg-[#222E3A]/[6%] text-xs md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                Name
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%] text-xs md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                {user.displayName ? user.displayName : "Name Not Provided"}
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-sm" onClick={handleUpdate}>Edit</button>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr
                            className="table-row mb-2 sm:mb-0"

                        >
                            <td className="border hover:bg-[#222E3A]/[6%] text-xs md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                Photo URL
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%] text-[8px] md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                {user?.photoURL ? user.photoURL : "Photo Not Provided"}
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                                <button className="btn btn-sm" onClick={() => handleUpdate(false)}>Edit</button>
                            </td>
                        </tr>
                        {/* Row 1 */}
                        <tr
                            className="table-row mb-2 sm:mb-0"

                        >
                            <td className="border hover:bg-[#222E3A]/[6%] text-xs md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                Email
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%] w-14 text-xs md:text-xl  hover:sm:bg-transparent py-3 px-1 md:px-5">
                                {user?.email}
                            </td>
                            <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Profile;