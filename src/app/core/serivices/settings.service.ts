import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AppSettings, defaults} from '../settings';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    private notice$ = new Subject<any>();
    private options = defaults;

    get notice(): Observable<any> {
        return this.notice$.asObservable();
    }

    getOptions(): AppSettings {
        return this.options;
    }

    setNavState(type: string, value: boolean) {
        this.notice$.next({type, value} as any);
    }

    setLayout(options?: AppSettings) {
        this.options = {...defaults, ...options};
        return this.options;
    }
}
