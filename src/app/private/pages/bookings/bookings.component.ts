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
    this.dataLoad();
  }

  dataLoad(){
    this.bookingService.getBookings().subscribe( data => {
      console.log( data )
      this.bookings = data.data
    })
  }


  onDeleteBooking (id: any){
    this.bookingService.removeBooking( id ).subscribe( data => {
      console.log ( data )
      this.dataLoad()
    })
  }

}
