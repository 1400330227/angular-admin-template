import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-settings',
    template: `
      <button nz-button nzType="link" (click)="open()" nzSize="large">
        <i nz-icon nzType="more" nzTheme="outline"></i>
      </button>
      <nz-drawer
        [nzClosable]="false"
        [nzVisible]="visible"
        nzPlacement="right"
        nzTitle="Basic Drawer"
        (nzOnClose)="close()"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </nz-drawer>
    `
})
export class SettingsComponent implements OnInit {

    visible = false;

    open(): void {
        this.visible = true;
    }

    close(): void {
        this.visible = false;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
