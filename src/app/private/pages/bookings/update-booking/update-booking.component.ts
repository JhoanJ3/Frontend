import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingsService } from '../../../../services/bookings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrl: './update-booking.component.css'
})
export class UpdateBookingComponent {

  bookingForm!: FormGroup
  selectedId!: any 

  constructor( 
    private bookingServices: BookingsService,
    private activedRoute: ActivatedRoute
  ) {
    this.bookingForm = new FormGroup({
      day: new FormControl( '', [] ),
      hour: new FormControl( '', [] ),
      idServicio: new FormControl( '', [] ),
      idUser: new FormControl( '', [] ),
      idPet: new FormControl( '', [] )
    })
  }

 ngOnInit() {
  this.activedRoute.params.subscribe( ( data: any ) => {

    this.selectedId = data.id
    console.log( data.id );

    this.bookingServices.getBookingById( this.selectedId ).subscribe( data => {
      console.log( data.data )

      const booking = data.data;

      this.bookingForm.setValue({

        day: booking.day,
        hour: booking.hour,
        idServicio: booking.idServicio,
        idUser: booking.idUser,
        idPet: booking.idPet
      });
    });
  })
 }

 actulizar() {
  this.bookingServices.updateBookingById( this.selectedId, this.bookingForm.value ).subscribe( data => {
    console.log( data )
  })
 }

}
