
const Heading = ({ name, heading_desc }: { name: string, heading_desc: string }) => {
  return (
    <div className='mb-6'>
      <div className='text-center flex justify-items-start items-center gap-3'>
        <img src="./images/folder.svg" alt="" className='h-6 w-6 md:h-8 md:w-8' />
        {/* <LinearGradient
      gradient={[ 'to left', '#101010, #909090']}
      className="text-4xl md:text-6xl font-black"
    >
      /{name}
    </LinearGradient> */}

        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-brand via-[#8f1111] to-[#181818] inline-block text-transparent bg-clip-text">{name}</h1>
      </div>

      <span className='flex items-center text-sm md:text-base text-[#5f5f5f]'>
        {heading_desc}
      </span>
    </div>
  )
}

export default Heading