import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      name: new FormControl( '', [] ),
      race: new FormControl( '', [] ),
      age: new FormControl( '', [] ),
      idUser: new FormControl ( '', [] ),
      description: new FormControl( '', [] ),
      urlImage: new FormControl( '', [] )
    })
  }

  registerPets() {
    console.log( this.petForm.value ),
    this.petServices.newPet( this.petForm.value ).subscribe( data => {
      console.log( data )
    })
  }

}
