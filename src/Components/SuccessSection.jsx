
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const SuccessSection = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 86, { duration: 10 });

        return animation.stop;
    }, []);

    return <div className="w-11/12 md:w-10/12 mx-auto flex justify-center items-center bg-sky-100 py-11 my-6 rounded-r-full">
        <div className="space-y-3">
            <h3 className="flex justify-center items-center text-5xl font-bold"><motion.h1>{rounded}</motion.h1>+</h3>
            <h2 className="text-xl font-bold">Successfully Vacancy Filled</h2>
        </div>
    </div>;
}
export default SuccessSection