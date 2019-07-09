import { Component, OnInit } from '@angular/core';
import { Actu } from '../../../modele/actu';
import { ActuService } from '../../../services/actu.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})



export class EditComponent implements OnInit {
  
  news:Actu;

  constructor(public actu:ActuService) { 
       
  } 

  ngOnInit() { 
      this.news = {
      titre:'',
      alias:'',
      description:'',
      img:'',
      auteur:''   
  }
  
}

    onSubmit(form: NgForm,objet){
      const formValue = form.value;
      let values={
      titre:formValue['titre'],
      alias:formValue['alias'],
      description:formValue['description'],
      auteur:formValue['auteur']
      }
      Object.keys(values).forEach(function(key){
          if (values[key]!==''){
              objet[key]=values[key];
          }
          
      });
      console.log(objet);
    
      
      

    //indexModif=index;


    //return indexModif;
 /*
  envoyerModif(){
      console.log(this.f.titre);
      //this.actu.updateData(this.getNews(indexModif),indexModif);
      console.log("ok");*/
  }   
    

}
