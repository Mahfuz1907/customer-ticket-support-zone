import '../../App.css'

export default function Navbar () {
    return (
        <div className="bg-white px-20 py-4 flex flex-row justify-between items-center">
            <h1 className='text-lg font-bold'>CS-Ticket System</h1>
            <ul className='flex flex-row justify-between items-center gap-4 text-base font-normal cursor-pointer'>
                <li>Home</li>
                <li>FAQ</li>
                <li>ChangeLog</li>
                <li>Blog</li>
                <li>Download</li>
                <li>Contact</li>
                <button className='font-bold bg-blue-600 hover:bg-white border border-blue-600 text-white hover:text-blue-600 rounded-lg cursor-pointer px-3 py-1 flex flex-row justify-between items-center gap-2'><span>+</span>New Ticket</button>
            </ul>
        </div>
    )
}