import { motion } from "framer-motion"

export default function Competition(props: { title: string, location: string, date: string }) {
    return (
        <motion.div className='relative flex flex-col gap-4 bg-bg-img bg-cover bg-center bg-opacity-50 mix-blend-multiply bg-blue px-8 py-4 min-h-[300px] rounded-[50px]'
        whileHover={{
            scale: 1.1,
        }}
        >
            <div className="absolute inset-0 bg-blue/[0.7] rounded-[50px]"></div>
            
            <div className="h-full"></div>
            <h2 className='relative z-10 text-3xl font-bold text-white'>{props.title}</h2>
            <h2 className='relative z-10 text-lg font-bold text-gray-300'>{props.location} | {props.date}</h2>  
        </motion.div>
    )
}