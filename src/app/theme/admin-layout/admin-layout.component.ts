import {SettingsService} from '../../core/serivices/settings.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent implements OnInit {

    private isCollapsed = false;
    private options = this.settings.getOptions();

    constructor(private router: Router, private settings: SettingsService) {
    }

    ngOnInit() {
    }

    toggleCollapsed() {
        // this.isCollapsed = !this.isCollapsed;
        this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
        this.resetCollapsedState();
    }

    private resetCollapsedState(timer = 400) {
        setTimeout(() => {
            this.settings.setNavState('collapsed', this.options.sidenavCollapsed);
        }, timer);
    }
}
