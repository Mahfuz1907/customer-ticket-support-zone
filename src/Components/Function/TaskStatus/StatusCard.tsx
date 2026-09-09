import type { Dispatch, SetStateAction } from 'react';
import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import { toast } from 'react-toastify';

export interface ProgressCardProperty{
    progressCard: CustomerCardTypes, 
    isResolved: CustomerCardTypes[],
    setIsResolved:Dispatch<SetStateAction<CustomerCardTypes[]>>,
    inProgress:CustomerCardTypes[],
    setInProgress:Dispatch<SetStateAction<CustomerCardTypes[]>>,
    updatedTickets:CustomerCardTypes[],
    setUpdatedTickets:Dispatch<SetStateAction<CustomerCardTypes[]>>
}

function StatusCard({progressCard, isResolved, setIsResolved, inProgress, setInProgress, updatedTickets, setUpdatedTickets}:ProgressCardProperty) {

    const handleConfirmButton = (card:CustomerCardTypes):void => {
        const isAlreadyIn = isResolved.some((item) => item.id === card.id)

        const ticketAfterRemove = updatedTickets.filter((item) => item.id !== card.id)
        setUpdatedTickets(ticketAfterRemove)

        const updatedProgressArray = inProgress.filter((item) => item.id!== card.id)
        setInProgress(updatedProgressArray)

        if(!isAlreadyIn){
            const resolvedArray = [...isResolved, card]
            toast.success(`${card.title} is resolved successfully`)
            setIsResolved(resolvedArray)
        }
    }

    return (
        <div className='bg-white rounded-lg px-3 py-1 flex flex-col justify-between items-start gap-2 w-full'>
            <h1>{progressCard.title}</h1>
            <button onClick={() => handleConfirmButton(progressCard)} className='bg-green-700 hover:bg-white border border-green-700 rounded-lg px-3 py-1 cursor-pointer text-white hover:text-green-700 w-full'>Complete</button>
        </div>
    );
};

export default StatusCard;