import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notification',
    template: `
      <a nz-dropdown [nzDropdownMenu]="menu">
        <nz-badge [nzCount]="0" style="font-size:18px;vertical-align: center">
          <i nz-icon nzType="bell" nzTheme="outline"></i>
        </nz-badge>
      </a>
      <nz-dropdown-menu #menu="nzDropdownMenu">
        <ul nz-menu nzSelectable>
          <li nz-menu-item>1st menu item</li>
          <li nz-menu-item>2nd menu item</li>
          <li nz-menu-item>3rd menu item</li>
        </ul>
      </nz-dropdown-menu>
    `
})
export class NotificationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
