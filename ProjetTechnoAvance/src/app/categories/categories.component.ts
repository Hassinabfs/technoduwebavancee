import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProduitsService } from '../produits/produits.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {
  categories: Object[];

  constructor(private produitsService: ProduitsService) { }

  ngOnInit(){
    console.log("Dans ngOnInit() du composant categories");
    this.produitsService.getCategories().subscribe(categories =>{
      this.categories = categories;
    })
  }

}
