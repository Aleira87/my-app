import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  premimi(e : Event): void {
    e.stopPropagation();
    alert("Continuo ad essere totalmente inutile!");
    console.log("°°°°°°°°°°°°°°°°°°°°°°°°°à")
    console.log(e)
    
    console.log(this)
  };
}
