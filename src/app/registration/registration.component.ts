import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserModel} from '../model/user-model';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email:string;
  userRegistred: UserModel = {};


constructor(private _location: Location) { }

backClicked() {
    this._location.back();
}
save() { 
  console.log(this.userRegistred);
}
  ngOnInit() {
  }

}


