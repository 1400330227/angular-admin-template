import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoutesRoutingModule} from './routes-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        SharedModule,
        RoutesRoutingModule
    ]
})
export class RoutesModule {
}
