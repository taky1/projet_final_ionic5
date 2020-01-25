import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from './../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiUrl = "http://localhost:5000/etudiants";
  etudiantService: any;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Etudiant[]>(this.apiUrl)
  }
  delete(id){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
  persist(etudiant) {
    return this.http.post<Etudiant>(this.apiUrl, etudiant)
  }
  persistEtudiant(){
    this.etudiantService.persist();
  }
  completed(id, completed){
return this.http.patch(`${this.apiUrl}/${id}`,{completed: !completed})

  }
  update(etudiant){
    return this.http.put(`${this.apiUrl}/${etudiant.id}`,{etudiant})
}
}