import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesPetService {

  constructor(
    private httpPet: HttpClient
  ) { }

  newPet( pet: any )
   {return this.httpPet.post<any>( 'http://100.24.32.88:3000/api/pets', pet)}
   
  getPets() {
    return this.httpPet.get<any>( 'http://100.24.32.88:3000/api/pets' )
  }
  removePet( id: any ) {
    return this.httpPet.delete<any>( `http://100.24.32.88:3000/api/pets/${ id }` )
  }

  getPetById( id: any ) {
    return this.httpPet.get<any>( `http://100.24.32.88:3000/api/pets/${ id }` )
  }

  updatePetById( id: any, updatedPet: any ) {
    return this.httpPet.patch<any>( `http://100.24.32.88:3000/api/pets/${ id }`, updatedPet )
  }

}
