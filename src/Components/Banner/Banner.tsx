import '../../App.css'
import Progress from './Progress'
import Resolved from './Resolved'

export default function Banner() {
    return (
        <div className='m-20 flex flex-row justify-between items-center gap-4'>
            <Progress />
            <Resolved />
        </div>
    )
}