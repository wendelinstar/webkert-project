import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { FakeLoadingService } from 'src/app/shared/services/fake-loading.service';

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.css']
})
export class BejelentkezesComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.loading = true;
    /*this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
      /*if (data === 3){
        if (this.email.value === 'test@gmail.com' && this.password.value === '123'){
          this.router.navigateByUrl('/hirek');
        }else{
          //alert('Hibás adatok');
          console.error('Hibás adatok!');
        }
      }****
      this.router.navigateByUrl('/hirek');
    }).catch(error => {
      console.error(error, 'Hibás adatok!');
    }).finally(() => {
      console.log('this is executed finally.');
    });*/

    //async-await
    /*try{
    //const bool = await this.loadingService.loadingWithPromise(this.email.value, this.password.value);
    //console.log(bool);
    const _ = await this.loadingService.loadingWithPromise(this.email.value, this.password.value);
    this.router.navigateByUrl('/hirek');
    }catch(error){
      console.error(error, 'Hibás adatok!');
    }
    console.log('this is executed finally.');*/

    /*const bool = await this.loadingService.loadingWithPromise(this.email.value, this.password.value)/*.then((_: boolean) => {
      this.router.navigateByUrl('/hirek');
    }).catch(error => {
      console.error(error, 'Hibás adatok!');
    }).finally(() => {
      console.log('this is executed finally.');
    });*/

    //Observable
    //this.loadingService.loadingWithObservable(this.email.value, this.password.value).subscribe((data: number) => {
    /*this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value, this.password.value)
    this.loadingSubscription = this.loadingObservation.subscribe(
      {
        next: (data: boolean) => {
          console.log(data);
          this.router.navigateByUrl('/hirek');
        }, error: (error) => {
          console.error(error);
          this.loading = false;
        }, complete: () => {
          console.log('finally');
          this.loading = false;
        }
      }
    );*/
    //subscription.unsubscribe();

    this.authService.login(this.email.value, this.password.value).then(cred => {
      console.log(cred);
      this.router.navigateByUrl('/hirek');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    });

  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
