import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Users } from '../../shared/models/Users';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrls: ['./regisztracio.component.css']
})
export class RegisztracioComponent implements OnInit {

  regisztracioForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      vezeteknev: new FormControl(''),
      keresztnev: new FormControl('')
    }),
    bornDate: new FormControl(''),
    szerzodesszam: new FormControl('')
  })

  constructor(private location: Location, private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regisztracioForm.value);
    this.authService.regisztral(this.regisztracioForm.get('email')?.value, this.regisztracioForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: Users = {
        id: cred.user?.uid as string,
        email: this.regisztracioForm.get('email')?.value,
        bornDate: this.regisztracioForm.get('bornDate')?.value,
        szerzodesszam: this.regisztracioForm.get('szerzodesszam')?.value,
        name: {
          vezeteknev: this.regisztracioForm.get('name.vezeteknev')?.value,
          keresztnev: this.regisztracioForm.get('name.keresztnev')?.value
        }
        
      };
      this.userService.create(user).then(_ => {
        console.log('User sikeresen hozzáadva.');
      }).catch(error => {
        console.error(error);
      });
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
