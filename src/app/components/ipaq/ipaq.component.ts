import { Component, OnInit } from '@angular/core';
import { IpaqForm } from '../../classes/ipaq-form';

@Component({
  selector: 'app-ipaq',
  templateUrl: './ipaq.component.html',
  styleUrls: ['./ipaq.component.scss']
})
export class IpaqComponent implements OnInit {

  ipaqForm: IpaqForm = new IpaqForm();

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.dir(this.ipaqForm);
  }
}
