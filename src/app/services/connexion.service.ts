import { Injectable } from '@angular/core';
import { Utilisateur } from '../modele/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  user:Utilisateur;
  connecte:boolean;
  

  constructor() {
    this.connecte = false;
    this.user = {
      identifiant:'',
      mdp:''
    }
  }

  envoieConne(){
    console.log("Ma conne = ", this.user);
    this.connecte = true;
    sessionStorage.setItem('connecte', this.connecte.toString());
  }
 
  getConnecte():boolean{
    return eval(sessionStorage.getItem('connecte'));
  }
  
  getName(){
      return this.user.identifiant;
  }

  getDisconnect(){
      this.connecte = false;
      this.user = {
        identifiant:'',
        mdp:''
      }
      sessionStorage.setItem('connecte', this.connecte.toString());
  }

  toutLeMondePeutChanger(){
    console.log("Mon ID = ", this.user.identifiant);
  }

}
