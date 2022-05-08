import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent implements OnInit {

  complainInput: any;
  complainObject:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
