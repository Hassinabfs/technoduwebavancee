import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../connexion/authentification.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: Observable<string>;


constructor(private authService: AuthentificationService,
  private router: Router) {
  this.user = this.authService.getUser(); }

ngOnInit() {
this.router.navigate(['/produits']);
}

disconnect() {
this.authService.disconnect();
this.router.navigate(['/produits']);
}
}
