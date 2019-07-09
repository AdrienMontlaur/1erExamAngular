import { Injectable } from '@angular/core';
import { Actu } from '../modele/actu';

@Injectable({
  providedIn: 'root'
})
export class ActuService{

  public listeTitreActu=[];  
  listeActu:Array<Actu>;
  objet:Actu;
  constructor() {
     
    this.listeActu = [
      {
        titre:"Mon actualité",
        alias:"Le lien vers mon actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg",
        auteur:"Barbara la machine !"
      },
      {
        titre:"Ma deuxième actualité",
        alias:"Le lien vers ma deuxième actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg"
      },
      {
        titre:"Ma troisieme actualité",
        alias:"Le lien vers ma deuxième actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg"
      },
      {
        titre:"Ma quatrieme actualité",
        alias:"Le lien vers ma deuxième actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg"
      },
      {
        titre:"Ma cinquieme actualité",
        alias:"Le lien vers ma deuxième actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg"
      },
      {
        titre:"Ma sixieme actualité",
        alias:"Le lien vers ma deuxième actualité",
        description:"Cette actualité parle d'un événement qui s'est produit quelque part dans le monde et qui a fait que les gens s'en sont émus par les actualités maintenant sont moins des informations que des mouvements d'émotions",
        img:"assets/images/actu1.jpg"
      }
    ];
  }
 
  
}
