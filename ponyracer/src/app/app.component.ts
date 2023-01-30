import { Component } from '@angular/core';

@Component({
  selector: 'ns-root',
  template: `
    <h1>PonyRacer</h1>
    <h2> {{ numberOfUsers }} users </h2>
    <h2> Wellcome {{ user?.name }} </h2>
    <button (click)="user.name='Cédric';myThing($event)">Change name</button>
    <ns-races (newRaceAvailable)="onNewRace()"></ns-races>
    <input type="text" #name>
    <button (click)="name.focus()">focus</button>
    `
})
export class AppComponent {
  title = 'ponyracer';
  user : {name : string };
  numberOfUsers: number = 144;
  constructor(){
    this.user = {name:""};
    setTimeout(()=>this.user.name = "Roberto", 5000);
  }
  onNewRace(): void {

  }

  myThing(event:any) :void{
    console.log(event);
  }
}
