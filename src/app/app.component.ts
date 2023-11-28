import { Component } from '@angular/core';
import { NavComponent } from './sharepage/nav/nav.component';
import { FooterComponent } from './sharepage/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
}
