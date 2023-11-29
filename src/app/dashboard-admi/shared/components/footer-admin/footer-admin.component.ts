import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer-admin',
  templateUrl: './footer-admin.component.html',
})
export class FooterAdminComponent {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
