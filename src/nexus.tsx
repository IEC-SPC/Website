import './index.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Nexus() {
    const [disabled, setDisabled] = useState(false)

    const onClick = () => {
        setDisabled(true)
        setTimeout(() => {
            window.location.replace('/')
        }, 1500)
    }

    return (
        <main className='bg-offwhite bg-nexus-img bg-repeat bg-center font-inter w-full min-h-lvh'>
            <div className='flex flex-col py-20 gap-12 items-center'>
                <img src='/nexus/logo.png' width={480} />
                <img src='/nexus/nexus.png' width={720} />
            </div>
            <div className='flex flex-col items-center'>
                <motion.button className='bg-offwhite px-20 py-4 font-bold rounded-xl'
                whileHover={{ scale: 1.2 }}
                onClick={onClick}
                >
                    {disabled ? '...' : 'Enter Site'}
                </motion.button>
            </div>
        </main>
    )
}