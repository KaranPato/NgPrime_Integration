import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <ngx-spinner
  bdColor="rgba(51,51,51,0.8)"
  size="medium"
  color="#fff"
  type="ball-scale-multiple"
>
  <p style="font-size: 20px; color: white">Loading...</p>
</ngx-spinner>`
})
export class AppComponent {
  title = 'NgPrime-Integration';
}
