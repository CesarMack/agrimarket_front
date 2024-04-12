import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
