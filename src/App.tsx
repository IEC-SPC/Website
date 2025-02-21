import './index.css'

function App() {
  return (
    <main className='bg-offwhite font-inter h-lvh'>
      <section className='fixed w-full flex flex-row p-10'>
        <img src='/iec_logo.png' width={173} height={42} />
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
    </main>
  )
}

export default App
