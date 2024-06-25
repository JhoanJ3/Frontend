import { Component } from '@angular/core';
import { ServicesPetService } from '../../../services/services-pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

  pets: any 

  constructor(
    private petService: ServicesPetService
  ){}

  ngOnInit(){
    this.loadData(); 
  }

  loadData() {
    this.petService.getPets().subscribe(data => {
      console.log( data )
      this.pets = data.data
    });
  }

  onDelete( id: any ) {
    this.petService.removePet( id ).subscribe( data => {
      console.log( data )
      this.loadData()
    })
  }

}
