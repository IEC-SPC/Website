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
                        <Message title='RECTOR&apos;S MESSAGE' message='It is with immense pride and heartfelt joy that I welcome you to the inaugural Innovation and Entrepreneurship Day, celebrated on the 28th of February. This event marks a significant milestone in our journey towards an education that empowers every student to explore, innovate, and excel. Today, we honour not only the spirit of innovation but also our deep-rooted commitment to providing an education that nurtures every facet of a child’s growth.

                            At St. Peter’s College, we believe that education must extend far beyond the traditional classroom. Our philosophy of integral learning encompasses rigorous academics, active participation in sports, and a rich spectrum of extra-curricular activities. This holistic approach ensures that each student develops not only intellectually but also emotionally and physically, preparing them to face the challenges of the world with resilience and creativity. It is this comprehensive vision that lays the foundation for a well-rounded, fulfilling educational experience.

                            The Innovation and Entrepreneurship Club is a vibrant reflection of this ethos. Over the years, our students have demonstrated their capabilities by excelling in various competitions and quizzes organized by institutions. Today, they proudly take the initiative to organize this event themselves, paving the way for future success in entrepreneurship, innovation, and invention. The club’s aim to foster a better world through innovative minds and its vision to inspire a transformative approach to learning truly encapsulates our school’s commitment to revolutionizing education.

                            I would like to extend my sincere gratitude to Mr. Krishan Chanaka, the Master in Charge, whose visionary leadership and meticulous planning have been instrumental in making today’s event a reality. His dedication to igniting enthusiasm and guiding our students in their creative pursuits has not only elevated the standards of the club but also instilled in our young innovators the confidence to dream big. 

                            As we celebrate this momentous day, I wish the Innovation and Entrepreneurship Club every success today and in all future endeavours. May this event be a launchpad for many more innovative initiatives that will continue to inspire our students to push the boundaries of what is possible. 

                            Together, let us build a future enriched with creativity, leadership, and the unwavering pursuit of excellence.

                            ‘Virtus et Veritas’

                            God Bless You.

                            REV. FR. ROHITHA RODRIGO
                            RECTOR / PRINCIPAL   
                        ' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='PRIEST IN-CHARGE' message='With great pride and enthusiasm, I extend my heartfelt congratulations to the Innovation & Entrepreneurship Club of St. Peter’s College on launching its official website. This marks a significant milestone in our continuous efforts to nurture creativity, critical thinking, and entrepreneurial spirit among our students.
                            Innovation and entrepreneurship are at the heart of progress and transformation in today’s world. Through this platform, I am confident that our young innovators will find inspiration, collaboration, and the necessary resources to bring their ideas to life. This website will serve as a dynamic space where students can explore new opportunities, showcase their projects, and connect with like-minded individuals.
                            I commend the Innovation & Entrepreneurship Club for its dedication and commitment to fostering a culture of ingenuity and leadership within our college. May this initiative empower our students to dream big, take bold steps, and create a meaningful impact in society.
                            Wishing the club and its members every success in their endeavours.

                            May God Bless you!

                            Rev. Fr. Indunil Sampath Perera
                            Vice Rector
                            St. Peter’s College, Colombo 04
                        ' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='MASTER IN-CHARGE' message='Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices lobortis suscipit suspendisse nisl etiam curabitur. Consequat consequat proin elementum porttitor non. Commodo libero tortor eu ipsum varius ultricies varius ad curae. Sociosqu tempor condimentum iaculis; finibus nascetur pulvinar enim sodales.' />
                    </div>
                    <div className="min-w-[54rem]">
                        <Message title='PRESIDENT OF THE IEC' message='Welcome to the Innovation and Entrepreneurship Club at St. Peter&apos;s College, Colombo 04!

                            As the President of this dynamic club, I am thrilled to be leading a group of passionate students dedicated to exploring the world of innovation, creativity, and entrepreneurship. Our club serves as a hub for aspiring entrepreneurs, innovators, and thinkers who seek to transform their ideas into impactful ventures.

                            Through workshops, networking events, and hands-on projects, we aim to cultivate a spirit of innovation and empower students to become future leaders in business and technology. Whether you&apos;re looking to start your own venture, collaborate with like-minded individuals, or simply learn more about the entrepreneurial landscape, this club is the place for you.

                            I encourage all students to get involved, share their ideas, and embrace the opportunities that will help shape the future of innovation at St. Peter’s College. Together, we can turn vision into action and make a meaningful impact.

                            Thank you for visiting, and I look forward to seeing all the incredible ideas we will bring to life!

                            Aqeel Rahim 
                            President 24/25,
                            Innovation and Entrepreneurship Club , 
                            St. Peter&apos;s College, Colombo 04.' 
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}