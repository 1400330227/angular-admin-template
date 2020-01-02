import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IconsProviderModule} from './icons-provider.module';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {SharedModule} from './shared/shared.module';
import {RoutesModule} from './routes/routes.module';
import {ThemeModule} from './theme/theme.module';
import {StartupService} from './core/serivices/startup.service';

registerLocaleData(zh);

export function StartupServiceFactory(startupService: StartupService) {
    return () => startupService.load();
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IconsProviderModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ThemeModule,
        SharedModule,
        RoutesModule
    ],
    providers: [
        {provide: NZ_I18N, useValue: zh_CN},
        StartupService,
        {provide: APP_INITIALIZER, useFactory: StartupServiceFactory, multi: true, deps: [StartupService]}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
