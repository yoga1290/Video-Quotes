import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onQuoteSelect (a, b): any {
    console.log(a, b)
  }
}
