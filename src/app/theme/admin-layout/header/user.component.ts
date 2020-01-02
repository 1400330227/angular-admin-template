import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      <nz-avatar nzSize="large" nzIcon="user"></nz-avatar>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu nzSelectable>
        <li nz-menu-item>1st menu item</li>
        <li nz-menu-item>2nd menu item</li>
        <li nz-menu-item>3rd menu item</li>
      </ul>
    </nz-dropdown-menu>`
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
