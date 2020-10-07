import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  types: Object[];

  constructor(private produitsService: ProduitsService) { }


  ngOnInit(){
    console.log("Dans ngOnInit() du composant types");
    this.produitsService.getTypes().subscribe(types =>{
      this.types = types;
    })
  }

}