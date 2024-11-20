import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent {

}
