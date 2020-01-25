import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public contact = {
  name:"MY EPI",
  email:"episoussetunis@gmail.com",
  tel: "73 867 670",
  logo:"assets/images/logo.jpg",
  location:"assets/images/location.jpg"
}
  constructor() {}

}
