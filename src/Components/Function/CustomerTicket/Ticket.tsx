import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import { SlCalender } from "react-icons/sl";

export interface TicketProperty{
    ticket:CustomerCardTypes
}

function Ticket({ticket}:TicketProperty) {
    return (
        <div className='bg-white rounded-lg px-4 py-2 flex flex-col justify-between items-start gap-3'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='font-bold text-lg'>{ticket.title}</h1>
                <button className={`${ticket.status === 'OPEN' ? 'bg-green-300' : ticket.status === 'IN_PROGRESS' ? 'bg-yellow-300' : ticket.status === 'CLOSED' ? 'bg-red-300' : 'bg-blue-300'} status-button flex flex-row justify-center items-center gap-1`}>
                    <span className={`${ticket.status === 'OPEN' ? 'bg-green-700' : ticket.status === 'IN_PROGRESS' ? 'bg-yellow-700' : ticket.status === 'CLOSED' ? 'bg-red-700' : 'bg-blue-700'} status-dot`}></span>{ticket.status}
                </button>
            </div>
            <p>{ticket.description}</p>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row justify-between items-start gap-3'>
                    <h1>#{ticket.id}</h1>
                    <h1 className={`${ticket.priority === 'HIGH' ? 'text-red-700' : ticket.priority === 'MEDIUM' ? 'text-yellow-700' : ticket.priority === 'LOW' ? 'text-green-700' : 'text-blue-700'} text-base font-semibold`}>{ticket.priority} PRIORITY</h1>
                </div>
                <div className='flex flex-row justify-between items-end gap-3'>
                    <h1>{ticket.customer}</h1>
                    <div className='flex flex-row justify-between items-center gap-1'><SlCalender /><span>{ticket.createdAt}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;