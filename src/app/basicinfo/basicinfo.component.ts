import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basicinfo',
  standalone: true,
  imports: [RouterLink,  RouterOutlet],
  templateUrl: './basicinfo.component.html',
  styleUrl: './basicinfo.component.css'
})
export class BasicinfoComponent {

}
