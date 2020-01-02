import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-branding',
    template: `
      <a href="https://ng.ant.design/" target="_blank" class="qh-branding">
        <img src="https://ng.ant.design/assets/img/logo.svg" alt="logo" class="qh-branding-logo-expanded">
        <span class="qh-branding-name">勤恒科技</span>
      </a>
      <span style="flex: 1 1 auto"></span>
      <nz-switch [(ngModel)]="switchValue" (ngModelChange)="toggleCollapsed.emit()"></nz-switch>`,
})
export class BrandingComponent implements OnInit {

    private switchValue = false;
    @Output() toggleCollapsed = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

}
