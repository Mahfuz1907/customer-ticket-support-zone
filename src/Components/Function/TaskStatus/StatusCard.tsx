import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';

export interface ProgressCardProperty{
    progressCard: CustomerCardTypes
}

function StatusCard({progressCard}:ProgressCardProperty) {
    return (
        <div className='bg-white rounded-lg px-3 py-1 flex flex-col justify-between items-start gap-2 w-full'>
            <h1>{progressCard.title}</h1>
            <button className='bg-green-700 hover:bg-white border border-green-700 rounded-lg px-3 py-1 cursor-pointer text-white hover:text-green-700 w-full'>Complete</button>
        </div>
    );
};

export default StatusCard;