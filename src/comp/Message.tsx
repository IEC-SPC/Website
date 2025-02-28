import { useRef } from "react"

function Message(props: { title: string, message: string }) {
  const ref = useRef<HTMLDialogElement>(null)

  return (
    <div className='relative flex flex-col gap-4 justify-center bg-bg-img bg-cover bg-center bg-opacity-50 mix-blend-multiply bg-blue px-8 py-4 w-[80%] max-w-full min-h-[275px] rounded-[50px]'>
      <div className="absolute inset-0 bg-blue/[0.7] rounded-[50px]"></div>
      
      <h2 className='relative z-10 text-4xl font-bold text-white pt-10'>{props.title}</h2>
      <p className='relative z-10 text-xl font-normal text-gray-300'>{props.message.slice(0, 310)}</p>

      <a className='relative z-10 text-xl font-normal text-gray-400 pb-20 underline'>Read more...</a>
    </div>
  )
}

export default Message