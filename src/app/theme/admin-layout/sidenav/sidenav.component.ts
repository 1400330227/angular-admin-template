import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu, MenuService} from '../../../core/serivices/menu.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {

    @Output() toggleCollapsed = new EventEmitter<void>();
    private isCollapsed = false;
    private menus: Menu[] = this.menuService.getAll();

    openMap: { [name: string]: boolean } = {
        0: true,
    };

    constructor(private menuService: MenuService) {
    }

    toggle() {
        this.isCollapsed = !this.isCollapsed;
    }

    ngOnInit() {
    }

    openHandler(value: string): void {
        for (const key in this.openMap) {
            if (key !== value) {
                this.openMap[key] = false;
            }
        }
    }

}
