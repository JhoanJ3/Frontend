import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingsService } from '../../../../services/bookings.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {

  bookingForm!: FormGroup

  constructor( private bookingServices: BookingsService ) {
    this.bookingForm = new FormGroup({
      day: new FormControl( '', [] ),
      hour: new FormControl( '', [] ),
      idServicio: new FormControl( '', [] ),
      idUser: new FormControl( '', [] ),
      idPet: new FormControl( '', [] )
    })
  }

  registerBooking() {
    console.log( this.bookingForm.value),
    this.bookingServices.newBooking( this.bookingForm.value ).subscribe( data => {
      console.log( data )
    })
  }

}
