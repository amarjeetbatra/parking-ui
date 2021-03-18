import { Booking } from './../model/booking.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // this line
})
export class HomeComponent implements OnInit {

  allBookings: Booking[]

  constructor(public bookingService: BookingService) { }

  ngOnInit(): void {
    // console.log('HomeComponent#ngOnInit() called')
  }

  public getBookings() : Booking[] {
    // console.log('HomeComponent#getBookings() called')
    // this.allBookings = this.bookingService.getAllBookings();
    // console.log('HomeComponent#getBookings()  starting loop');
    // this.allBookings.forEach(element => {
    //   console.log(element.parking.id)
    //   console.log(element.user.name)
    //   console.log(element.date)
    // });
    // console.log('HomeComponent#getBookings()  ending loop');
    this.allBookings = this.bookingService.getAllBookings();
    return this.allBookings;
  }

}
