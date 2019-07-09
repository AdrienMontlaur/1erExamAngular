import { Component, OnInit } from '@angular/core';
import { ConnexionService } from './services/connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  intro:object = {
    titre:"Découverte d'Angular",
    soustitre:"Développer une application simple"
  }
  constructor(public conServ: ConnexionService ) { }
    ngOnInit() {
    }
}
