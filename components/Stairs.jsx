
import { animate, motion } from "framer-motion"

const stairTransition = {

    initial:{

    top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit:{
        top: ["100%", "0%"],
    },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}


const Stairs = () => {
  return (
    <>
    {/* animation render */}

    {[...Array(6)].map((_, index) => {
        return (
        <motion.div 
        key={index} 
        variants={stairTransition} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1
        }}
        className="h-full w-full bg-accent relative"
        />
    );
    })}
    </>
  )
}

export default Stairs