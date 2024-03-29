import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  logo:string = 'assets/images/Logo.png';
  
  
  constructor(public conServ: ConnexionService ) { }
  
    ngOnInit() {
        console.log(this.conServ.getConnecte());
        console.log(this.conServ.user);
    }


}
