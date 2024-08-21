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
    return this.http.post<any>( 'http://54.234.221.116:3000/api/reservas', booking )
  }

  getBookings() {
    return this.http.get<any>( 'http://54.234.221.116:3000/api/reservas' )
  }
  
  removeBooking (id: any){
    return this.http.delete<any>( `http://54.234.221.116:3000/api/reservas/${ id }` )
  }

  getBookingById( id: any ) {
    return this.http.get<any>( `http://54.234.221.116:3000/api/reservas/${ id }` )
  }

  updateBookingById( id: String, updateBooking: any ) {
    return this.http.patch<any>( `http://54.234.221.116:3000/api/reservas/${ id }`, updateBooking )
  }
}
