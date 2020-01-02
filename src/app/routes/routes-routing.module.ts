import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from '../theme/admin-layout/admin-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutesRoutingModule {
}
