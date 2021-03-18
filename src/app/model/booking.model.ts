import { Parking } from './parking.model';
import { User } from './user.model';


export class Booking {
    id: number;
    parking: Parking;
    user: User;    
    date: Date;
}