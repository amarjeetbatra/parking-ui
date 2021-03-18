import { Booking } from './../model/booking.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../service/booking.service';
import { element } from 'protractor';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  // this line means we don't have default change detection which othwerise keeps checking "View" multiple times. 
  // Hence it used to call getBookings() multiple times from view for loop
  // OnPush means run change detection only is some scenarios like some event from Component or Async pipe |
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class BookingsComponent implements OnInit {

  username: string;
  bookings: Booking[]

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name'];
    // console.log('BookingsComponent#ngOnInit() called ' + this.username);
  }

  public getBookings() : Booking[] {
    // console.log('BookingComponent#getBooking() called for User ' + this.username)
    this.bookings = this.bookingService.getBookingForUser(this.username);
    return this.bookings;
  }
}

// export class Booking {
  
//   constructor(public parkingNumber: string,
//     public user: string,
//     public date: Date) {

//     }
// }
