import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    premimi(): void {
    alert("Te l'avevo detto che sono inutile!");
    

  // intervalHandler:any;

  // message: string = "CIAO Mondo!";
  // ngOnInit(): void {
  //   this.intervalHandler=setInterval(() => {
  //     this.message = "CIAO Mondo! "+Math.random();
  //   },1000)
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalHandler);
  // }

}
}
