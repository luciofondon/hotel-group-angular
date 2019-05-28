import { Hotel } from '../../shared/models/hotel.model';

export class Room {
    id: number;
    name: string;
    checkin: boolean;
    doubleBed: boolean;
    cleaning: boolean;
    hotel: Hotel;
}