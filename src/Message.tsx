function Message(props: { title: string, message: string }) {
  return (
    <div className='flex flex-col gap-4 justify-center bg-black px-8 py-4 w-11/12 min-h-[275px] rounded-[50px]'>
      <h2 className='text-4xl font-bold text-white'>{props.title}</h2>
      <p className='text-xl font-normal text-white'>{props.message}</p>
    </div>
  )
}

export default Message