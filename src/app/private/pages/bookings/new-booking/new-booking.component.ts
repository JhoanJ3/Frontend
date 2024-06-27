import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      day: new FormControl( '', [ Validators.required ] ),
      hour: new FormControl( '', [ Validators.required ] ),
      idServicio: new FormControl( '', [ Validators.required ] ),
      idUser: new FormControl( '', [ Validators.required ] ),
      idPet: new FormControl( '', [ Validators.required ] )
    })
  }

  registerBooking() {
    console.log( this.bookingForm.value),
    this.bookingServices.newBooking( this.bookingForm.value ).subscribe( data => {
      console.log( data )
    })
  }

}
