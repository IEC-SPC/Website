function Message(props: { title: string, message: string }) {
  return (
    <div className='relative flex flex-col gap-4 justify-center bg-bg-img bg-cover bg-center bg-opacity-50 mix-blend-multiply bg-blue px-8 py-4 w-[92%] min-w-[92%] min-h-[275px] rounded-[50px]'>
      <div className="absolute inset-0 bg-blue/[0.7] rounded-[50px]"></div>
      
      <h2 className='relative z-10 text-4xl font-bold text-white pt-10'>{props.title}</h2>
      <p className='relative z-10 text-xl font-normal text-white pb-20'>{props.message}</p>
    </div>
  )
}

export default Message