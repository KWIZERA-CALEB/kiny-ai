
const Footer = () => {
  return (
    <div className='w-full bg-[#fff] mt-[60px] h-[80px] pr-[74px] pl-[74px]'>
        <div className='border-t-[2px] h-full w-full border-solid flex flex-row items-center justify-between'>
            <div>
                <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>&copy; Copyright KINY AI 2024</p>
            </div>
            <div>
                <p className='font-inter selection:bg-primary/50 selection:text-[#fff] font-semibold text-[12px]'>Terms of Service | Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
