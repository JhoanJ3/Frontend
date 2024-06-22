import { Component } from '@angular/core';
import { BookingsService } from '../../../services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  bookings: any

  constructor(
    private bookingService: BookingsService
  ) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe( data => {
      console.log( data )
      this.bookings = data.data
    })
  }

}
