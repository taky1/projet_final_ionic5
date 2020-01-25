import { Component, OnInit } from '@angular/core';
import { EtudiantService } from './../services/etudiant.service';
import { Etudiant } from './../models/etudiant';
import * as etudiant from './../models/etudiant';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.page.html',
  styleUrls: ['./etudiants.page.scss'],
})
export class EtudiantsPage implements OnInit {
  editForm = false;
  showForm = false;

  searchText = '';

  myEtudiant: Etudiant = {
    id: '',
    nom: '',
    class: '',
    completed: false
  }

etudiants:Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit() {
    this.getEtudiants();
  }
getEtudiants() {
  this.etudiantService.findAll()
  .subscribe(etudiants => this.etudiants = etudiants
  )
}

deleteEtudiant(id){
  this.etudiantService.delete(id)
  .subscribe(() => {
    this.etudiants = this.etudiants.filter(etudiant => etudiant.id != id)
  })
}
persistEtudiant(){
  this.etudiantService.persist(this.myEtudiant)
  .subscribe((etudiant) => {
this.etudiants = [etudiant, ...this.etudiants]
this.resetEtudiant();

})
}

resetEtudiant() {
  this.myEtudiant = {
    id: '',
    nom: '',
    class: '',
    completed: false
  }
}
toggleCompleted(etudiant){
  this.etudiantService.completed(etudiant.id, etudiant.completed)
  .subscribe(() =>{
 etudiant.completed = !etudiant.completed
  })
}

editEtudiant(etudiant) {
  this.myEtudiant = etudiant
  this.editForm = true;
  
}
updateEtudiant(){
   this.etudiantService.update(this.myEtudiant)
   .subscribe(etudiant => {
    this.resetEtudiant();
    this.editForm = false;
   })}

}

