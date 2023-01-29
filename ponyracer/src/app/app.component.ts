import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  template: `
    <h1>PonyRacer</h1>
    <h2> {{ numberOfUsers }} users </h2>
    <h2> Wellcome {{ user?.name }} </h2>
    <ns-races></ns-races>`
})
export class AppComponent {
  title = 'ponyracer';
  user : {name : string };
  numberOfUsers: number = 144;
  constructor(){
    this.user = {name:""};
    setTimeout(()=>this.user.name = "Roberto", 5000);
  }
}
