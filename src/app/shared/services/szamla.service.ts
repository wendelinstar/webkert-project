import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Szamla } from '../models/szamlak';

@Injectable({
  providedIn: 'root'
})
export class SzamlaService {

  collectionName = "Szamlak";

  constructor(private afs: AngularFirestore) { }

  create(szamla: Szamla){
    szamla.id = this.afs.createId();
    return this.afs.collection<Szamla>(this.collectionName).doc(szamla.id).set(szamla);
    //return this.afs.collection<Szamla>(this.collectionName).add(szamla);
  }

  getAll(){
    return this.afs.collection<Szamla>(this.collectionName).valueChanges();
  }

  update(szamla: Szamla){
    return this.afs.collection<Szamla>(this.collectionName).doc(szamla.id).set(szamla);
  }

  delete(id: string){
    return this.afs.collection<Szamla>(this.collectionName).doc(id).delete();
  }
  getSzamlak(userId: string){
    return this.afs.collection<Szamla>(this.collectionName, ref => ref.where('userId', "==", userId).orderBy('sorszam')).valueChanges();
  }
}
