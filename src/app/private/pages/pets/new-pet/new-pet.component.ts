import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesPetService } from '../../../../services/services-pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrl: './new-pet.component.css'
})
export class NewPetComponent {

  petForm!: FormGroup

  constructor( private petServices: ServicesPetService ) {
    this.petForm = new FormGroup({
      name: new FormControl( '', [ Validators.required, Validators.minLength( 4 )]),
      race: new FormControl( '', [ Validators.required, Validators.minLength( 4 )] ),
      age: new FormControl( '', [ Validators.required, Validators.minLength( 1 )] ),
      idUser: new FormControl ( '', [ Validators.required, Validators.minLength( 3 )] ),
      description: new FormControl( '', [] ),
      urlImage: new FormControl( '', [ Validators.required, Validators.minLength( 4 )] )
    })
  }

  registerPets() {
    console.log( this.petForm.value ),
    this.petServices.newPet( this.petForm.value ).subscribe( data => {
      console.log( data )
    })
  }

}
