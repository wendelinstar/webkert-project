import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SzamlaService } from '../../shared/services/szamla.service';
import { UserService } from '../../shared/services/user.service';
import { Szamla } from '../../shared/models/szamlak'
import { Users } from '../../shared/models/Users';


@Component({
  selector: 'app-szamlak',
  templateUrl: './szamlak.component.html',
  styleUrls: ['./szamlak.component.css']
})
export class SzamlakComponent implements OnInit, OnChanges {

  @Input() szamlaInput: any;
  user?: Users;

  // szamlakObject: any = {};
  szamlak: Array<Szamla> = [];
  kobmeter = 300;

  szamlakForm = this.createForm({
    id: '',
    userId: this.user?.id as string,
    sorszam: Number(''),
    vizora: Number(''),
    ar: Number(''),
    date: new Date()
  });

  constructor(private fb: FormBuilder, private szamlaService: SzamlaService, private userService: UserService) { }

  ngOnChanges(): void {
    const userId = this.szamlakForm.get('userId')?.setValue(this.user?.id);
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.szamlaService.getSzamlak(this.user?.id as string).subscribe(szamlak => {
        this.szamlak = szamlak;
      })
    }, error => {
      console.error(error);
    })
  }

  ngOnInit(): void {
    
  }

  createForm(model: Szamla){
    let FormGroup = this.fb.group(model)
    FormGroup.get('vizora')?.addValidators([Validators.required]);
    return FormGroup;
  }

  diktal() {
    var allas = 0;
    for (var i=0;i<this.szamlak.length; i++){
      if (this.szamlak[i]['sorszam'] == this.szamlak.length){
        allas = this.szamlak[i]['vizora'];
      }
    }
    if(this.szamlakForm.get('vizora')?.value >= allas) {
      this.szamlakForm.get('sorszam')?.setValue(this.szamlak.length+1);
      if(this.szamlak.length == 0){
        this.szamlakForm.get('ar')?.setValue(this.szamlakForm.get('vizora')?.value * this.kobmeter);
      }else{
        var szamla = 0;
        for (var i=0;i<=this.szamlak.length-1; i++){
          szamla += this.szamlak[i]['ar'];
        }
        //console.log(szamla);
        this.szamlakForm.get('ar')?.setValue((this.szamlakForm.get('vizora')?.value * this.kobmeter) - szamla);
      }
      this.szamlakForm.get('date')?.setValue(new Date());
      this.szamlak.push({...this.szamlakForm.value});

      this.szamlaService.create(this.szamlakForm.value).then(_ => {
        console.log('Sikeres diktálás!')
      }).catch(error => {
        console.error(error);
      });
    }else{
      alert('Nem lehet kisebb a korábbi állásnál!');
    }
  }

}
