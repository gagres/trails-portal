import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

// Services
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

    isLogged: any = {};

    constructor(private storageService: StorageService) { }

    login() {
        this.isLogged = { logged: true, token: 'TrailAPI_Token_20171110'};

        this.storageService.save('TRAIL_AUTH_TOKEN', this.isLogged);

        return new Observable( (subscribe) => {
            subscribe.next(true);
        });
    }

    logout() {
        this.isLogged = {};
        this.storageService.remove('TRAIL_AUTH_TOKEN');
    }

    isUserLogged() {
        if(this.isLogged.hasOwnProperty('logged'))
            return this.isLogged.logged;

        return this.storageService.get('TRAIL_AUTH_TOKEN').logged || false;
    }
}