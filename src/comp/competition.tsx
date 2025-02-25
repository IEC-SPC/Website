import { motion } from "framer-motion"

export default function Competition(props: { title: string, location: string, date: string }) {
    return (
        <motion.div className='flex flex-col gap-4 bg-bg-img bg-cover bg-center bg-opacity-50 bg-blue px-8 py-4 min-h-[300px] rounded-[50px]'
        whileHover={{
            scale: 1.1,
        }}
        >   
            <div className="h-full"></div>
            <h2 className='text-3xl font-bold text-white'>{props.title}</h2>
            <h2 className='text-lg font-bold text-gray-300'>{props.location} | {props.date}</h2> 
        </motion.div>
    )
}