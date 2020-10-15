import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user= {"email": "", "password": ""};
  message: string="";

  constructor(private authentificationService: AuthentificationService,private router : Router) { }

  ngOnInit(){
    console.log("Dans ngOnInit() du composant authentificationService");
    
  }
  onSubmit(){
    this.authentificationService.verificationConnexion(this.user).subscribe(response=>{
      this.message =response['message'];
      if (response['result']){
        this.authentificationService.connect(this.user.email);
        this.router.navigate(['/categories']);

      }
      setTimeout(() => {this.router.navigate(['/categories']);}, 1000);
    })
  }

}




