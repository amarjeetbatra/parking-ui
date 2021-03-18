import { Booking } from './../model/booking.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  // bookings = [
  //   new Booking("A101", "Amar", new Date()),
  //   new Booking("A102", "Liam", new Date()),
  //   new Booking("A103", "Naveen", new Date()),
  //   new Booking("A104", "mara", new Date())
  // ]
  bookings: Booking[]
  userBookings: Booking[]

  getAllBookings() : Booking[] {

    // console.log('Start getAllBookings');
    // this.httpClient.get('http://localhost:8080/bookings').subscribe();
    this.httpClient.get<Booking[]>('http://localhost:8080/bookings').subscribe(
      response => this.bookings = response
    );

    // console.log('End getAllBookings');
    
    return this.bookings;
  }

  getBookingForUser(userAcronym: string) : Booking[] {

    this.httpClient.get<Booking[]>(`http://localhost:8080/bookings/${userAcronym}`).subscribe(
      response => this.userBookings = response
    )

    // this.bookings.forEach(element => {
    //   if (element.user === user) {
    //     userBookings.push(element);
    //   }
    // });
    return this.userBookings;
  }

}
