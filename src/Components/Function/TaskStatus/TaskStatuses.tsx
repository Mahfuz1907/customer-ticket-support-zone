import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import StatusCard from './StatusCard';

export interface TaskStatusTasksProperties{
    inProgress: CustomerCardTypes[],
    isResolved: CustomerCardTypes[],
    setIsResolved:Dispatch<SetStateAction<CustomerCardTypes[]>>
}

function TaskStatuses({inProgress, isResolved, setIsResolved}:TaskStatusTasksProperties) {
    return (
        <div className='flex flex-col justify-center items-start gap-4 w-full'>
            <h1 className='text-black font-bold text-lg'>Task Status</h1>
            {
                inProgress.length === 0 ? <p>Select a Ticket to add to Task Status</p> : <div className='flex flex-col justify-center items-start gap-2 w-full'>
                {
                    inProgress.map((progressCard) => <StatusCard key={progressCard.id} progressCard={progressCard} isResolved={isResolved} setIsResolved={setIsResolved}/>)
                }
            </div>
            }
        </div>
    );
};

export default TaskStatuses;