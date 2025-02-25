import Message from "./Message"
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from "react"

export function HorizontalScroll() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

    return (
        <section ref={targetRef} className="relative h-[600vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    <div className="min-w-[54rem]">
                        <Message title='RECTOR&apos;S MESSAGE' message='Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices lobortis suscipit suspendisse nisl etiam curabitur. Consequat consequat proin elementum porttitor non. Commodo libero tortor eu ipsum varius ultricies varius ad curae. Sociosqu tempor condimentum iaculis; finibus nascetur pulvinar enim sodales.' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='PRIEST IN-CHARGE' message='Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices lobortis suscipit suspendisse nisl etiam curabitur. Consequat consequat proin elementum porttitor non. Commodo libero tortor eu ipsum varius ultricies varius ad curae. Sociosqu tempor condimentum iaculis; finibus nascetur pulvinar enim sodales.' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='MASTER IN-CHARGE' message='Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices lobortis suscipit suspendisse nisl etiam curabitur. Consequat consequat proin elementum porttitor non. Commodo libero tortor eu ipsum varius ultricies varius ad curae. Sociosqu tempor condimentum iaculis; finibus nascetur pulvinar enim sodales.' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='PRESIDENT OF THE IEC' message='Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices lobortis suscipit suspendisse nisl etiam curabitur. Consequat consequat proin elementum porttitor non. Commodo libero tortor eu ipsum varius ultricies varius ad curae. Sociosqu tempor condimentum iaculis; finibus nascetur pulvinar enim sodales.' />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}