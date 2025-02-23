import './index.css'
import Message from './comp/Message.tsx'
import Separator from './comp/separator.tsx'
import { HorizontalScroll } from './comp/marquee.tsx'
import Competition from './comp/competition.tsx'
import Form from './comp/form.tsx'

function App() {
  return (
    <main className='bg-offwhite font-inter h-full'>
      <section className='fixed w-full bg-white flex flex-row items-center p-6 z-20'>
        <img src='/iec_logo.jpg' width={173} height={42} />
        <div className='w-full' />
        <div className='flex flex-row gap-10 text-nowrap'>
          <a href='#'>Home</a>
          <a href='#'>About IEC</a>
          <a href='#'>Gallery</a>
          <a href='#'>Contact</a>
        </div>
      </section>

      <section className='flex flex-col gap-4 pt-52 pb-20'>
        <div className='flex flex-row'>
          <h1 className='mx-8 text-8xl text-blue font-extrabold'>THINK</h1>
          <div className='w-full bg-gold' />
        </div>
        <div className='flex flex-row'>
          <div className='w-full bg-gold' />
          <h1 className='mx-8 text-8xl text-blue font-extrabold'>CREATE</h1>
        </div>
        <div className='flex flex-row'>
          <div className='w-1/6 bg-gold' />
          <h1 className='mx-8 text-8xl text-blue font-extrabold'>INNOVATE</h1>
          <div className='w-full bg-gold' />
        </div>
      </section>

      <section className='py-6 px-10'>
        <p className='text-2xl font-normal'>LOREM IPSUM ODOR AMET, CONSECTETUER ADIPISCING ELIT. ULTRICES LOBORTIS SUSCIPIT SUSPENDISSE NISL ETIAM CURABITUR. CONSEQUAT CONSEQUAT PROIN ELEMENTUM PORTTITOR NON. COMMODO LIBERO TORTOR EU IPSUM VARIUS ULTRICIES VARIUS AD CURAE. SOCIOSQU TEMPOR CONDIMENTUM IACULIS; FINIBUS NASCETUR PULVINAR ENIM SODALES.</p>
      </section>

      <section className='flex justify-center pt-10 pb-32'>
        <div className='flex flex-col gap-5 items-center justify-center'>
          <Message title='OUR VISION' message='To inspire life of students to revolutionize the world through new innovative ideas, therefore a brighter future' />
          <Message title='OUR MISSION' message='To develop innovative ideas or innovations through well- organized projects and implement them successfully to the world.' />
        </div>
      </section>

      <Separator />

      <HorizontalScroll />

      <Separator />

      <section className='flex flex-col w-[80%] my-0 mx-auto py-32 justify-center items-center'>
        <h1 className='text-xl text-blue'>GALLERY</h1>
        <h1 className='text-6xl text-blue font-bold'>WHAT WE HAVE BEEN DOING</h1>

        <div className='flex flex-row py-10 justify-between w-full'>
          <Competition title='Competition #1' location='@ Location' date='DD/MM/YYYY' />
          <Competition title='Competition #2' location='@ Location' date='DD/MM/YYYY' />
          <Competition title='Competition #3' location='@ Location' date='DD/MM/YYYY' />
        </div>

        <a href='#' className='text-blue underline'>Explore more →</a>
      </section>

      <Separator />

      <section className='flex flex-col py-32 justify-center items-center'>
        <h1 className='text-6xl text-blue font-bold'>REACH OUT TO US</h1>
        <Form/>
      </section>
    </main>
  )
}

export default App
