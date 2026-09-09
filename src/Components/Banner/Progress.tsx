import '../../App.css'

export default function Progress() {
    return (
        <div className='bg-[url(/asset/vector1.png)] bg-blue-500 flex flex-col justify-center items-center gap-4 rounded-md px-10 py-5 w-full'>
            <h1 className='text-base font-normal text-white'>In Progress</h1>
            <h1 className='text-6xl font-bold text-white'>0</h1>
        </div>
    )
}