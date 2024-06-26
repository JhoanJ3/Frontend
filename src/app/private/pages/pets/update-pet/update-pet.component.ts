import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesPetService } from '../../../../services/services-pet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrl: './update-pet.component.css'
})
export class UpdatePetComponent {

  petForm!: FormGroup
  selectedId!: any

  constructor( 
    private petServices: ServicesPetService,
    private activedRoute: ActivatedRoute
  ) {
    this.petForm = new FormGroup({
      name: new FormControl( '', [] ),
      race: new FormControl( '', [] ),
      age: new FormControl( '', [] ),
      idUser: new FormControl ( '', [] ),
      description: new FormControl( '', [] ),
      urlImage: new FormControl( '', [] )
    })
  }

  ngOnInit() {
    this.activedRoute.params.subscribe( ( data: any ) => {

      this.selectedId = data.id
      console.log( data.id );

      this.petServices.getPetById( this.selectedId ).subscribe( data => {
        console.log( data.data )

        const pet = data.data;

        this.petForm.setValue({
          name: pet.name,
          race: pet.race,
          age: pet.age,
          idUser: pet.idUser,
          description: pet.description,
          urlImage: pet.urlImage
        });

      });
    })
  }

  actualizar() {
    this.petServices.updatePetById( this.selectedId, this.petForm.value ).subscribe( data =>{
      console.log( data )
    })
  }
}
