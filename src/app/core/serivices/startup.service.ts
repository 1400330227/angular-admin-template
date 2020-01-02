import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {MenuService} from './menu.service';

@Injectable()
export class StartupService {

    constructor(private http: HttpClient, private menu: MenuService) {
    }

    load(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.http.get('assets/data/menu.json')
                .pipe(
                    catchError(err => {
                        reject(err);
                        return err;
                    })
                )
                .subscribe(
                    (res: any) => this.menu.set(res.menu),
                    () => reject(),
                    () => resolve());
        });
    }
}
