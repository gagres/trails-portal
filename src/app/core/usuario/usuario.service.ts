import { Injectable } from '@angular/core';

// Services
import { HttpService } from './../../shared/services/http.service';

@Injectable()
export class UsuarioService {
    constructor(private httpService: HttpService) {}

    /**
     * Get list of users
     * @async
     * @return {Observable<Subscribe>} The result of the request
     */
    getListOfUsers() {
        return this.httpService.get('/users');
    }
}