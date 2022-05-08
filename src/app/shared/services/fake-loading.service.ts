import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }
    // CRUD (Create, Read,Update, Delete)

    //Callback
    //Promise
    //Observable

    loadingWithPromise(email: string, password: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        let i = 0;
        setTimeout(() => {
          if (email === 'test@gmail.com' && password === '123'){
            resolve(true);
          }else{
            reject(false);
          }
        }, 3000)
      });

    /*loadingWithPromise(email: string, password: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        let i = 0;
        //const interval = setInterval(() => {
        setTimeout(() => {
          i++;
          if(i === 3) {
            //clearInterval(interval);
            if (email === 'test@gmail.com' && password === '123'){
              resolve(true);
            }else{
              //alert('Hibás adatok');
              reject(false);
            }
          }
        }, 1000)
      });*/

    /*loadingWithPromise(): Promise<number> {
      return new Promise((resolve, reject)) => {
        let i = 0;
      setInterval(() => {
        i++;
        if(i==3) {
          // return
        }
      }, 1000)
      }
      /*setTimeout(() => {

      }, 3000);*/
      /*let i = 0;
      setInterval(() => {
        i++;
        if(i==3) {
          // return
        }
      }, 1000)
    }*/
  }
  loadingWithObservable(email: string, password: string): Observable<boolean>{
    //data stream 
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        //subscriber.next(i);
        if ( i===3 ) {
          //clearInterval(interval);
          //subscriber.complete();
          if (email === 'test@gmail.com' && password === '123'){
            subscriber.next(true);
            subscriber.complete();
          }else{
            //alert('Hibás adatok');
            subscriber.error(false);
          }
        }
      }, 1000);
    });
  }
}
