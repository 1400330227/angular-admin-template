import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {HeaderComponent} from './admin-layout/header/header.component';
import {SidenavComponent} from './admin-layout/sidenav/sidenav.component';
import {SharedModule} from '../shared/shared.module';
import { BrandingComponent } from './admin-layout/header/branding.component';
import { AccordionlinkDirective } from './admin-layout/sidenav/accordionlink.directive';
import { AccordionDirective } from './admin-layout/sidenav/accordion.directive';
import { AccordionanchorDirective } from './admin-layout/sidenav/accordionanchor.directive';
import { UserComponent } from './admin-layout/header/user.component';
import { NotificationComponent } from './admin-layout/header/notification.component';
import { SettingsComponent } from './admin-layout/header/settings.component';


@NgModule({
    declarations: [AdminLayoutComponent, HeaderComponent, SidenavComponent, BrandingComponent, AccordionlinkDirective, AccordionDirective, AccordionanchorDirective, UserComponent, NotificationComponent, SettingsComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ThemeModule {
}
