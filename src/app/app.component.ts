import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Resume';
  name = 'Julie Dietsch';
  address = '8119 Valley Crossing Drive';
  phone = '951-216-4486';
  email = 'julesdietsch@fioptics.com';
  displayWork = true;
  displayEdu = true;
}
