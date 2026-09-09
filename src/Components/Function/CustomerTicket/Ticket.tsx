import '../../../App.css';
import type { CustomerCardTypes } from '../../../type';
import { SlCalender } from "react-icons/sl";

export interface TicketProperty{
    ticket:CustomerCardTypes
}

function Ticket({ticket}:TicketProperty) {
    return (
        <div className='bg-white rounded-lg px-4 py-2'>
            <div>
                <h1>{ticket.title}</h1>
                <button>{ticket.status}</button>
            </div>
            <p>{ticket.description}</p>
            <div>
                <div>
                    <h1>#{ticket.id}</h1>
                    <h1>{ticket.priority}</h1>
                </div>
                <div>
                    <h1>{ticket.customer}</h1>
                    <div><SlCalender /><span>{ticket.createdAt}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;