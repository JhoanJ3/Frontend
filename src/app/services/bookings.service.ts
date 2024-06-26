import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(
    private http: HttpClient
  ) { }

  newBooking( booking: any ) {
    return this.http.post<any>( 'http://localhost:3000/api/reservas', booking )
  }

  getBookings() {
    return this.http.get<any>( 'http://localhost:3000/api/reservas' )
  }
  
  removeBooking (id: any){
    return this.http.delete<any>( `http://localhost:3000/api/reservas/${ id }` )
  }

  getBookingById( id: any ) {
    return this.http.get<any>( `http://localhost:3000/api/reservas/${ id }` )
  }

  updateBookingById( id: String, updateBooking: any ) {
    return this.http.patch<any>( `http://localhost:3000/api/reservas/${ id }`, updateBooking )
  }
}
