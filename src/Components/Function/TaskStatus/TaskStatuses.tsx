import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import StatusCard from './StatusCard';

export interface TaskStatusTasksProperties{
    inProgress: CustomerCardTypes[]
}

function TaskStatuses({inProgress}:TaskStatusTasksProperties) {
    return (
        <div className='flex flex-col justify-center items-start gap-4 w-full'>
            <h1 className='text-black font-bold text-lg'>Task Status</h1>
            {
                inProgress.length === 0 ? <p>Select a Ticket to add to Task Status</p> : <div className='flex flex-col justify-center items-start gap-2 w-full'>
                {
                    inProgress.map((progressCard) => <StatusCard key={progressCard.id} progressCard={progressCard} />)
                }
            </div>
            }
        </div>
    );
};

export default TaskStatuses;