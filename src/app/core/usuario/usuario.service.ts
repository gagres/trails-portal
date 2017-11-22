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

    /**
     * Get one user by ID
     * @async
     * @param {number} userID User ID
     * @return {Observable<Subscribe>} The result of the request
     */
    getUserById(userID: number) {
        return this.httpService.get(`/user/${userID}`);
    }

    /**
     * Change Status User
     * @async
     * @param {number} userID User ID
     * @param {boolean} newStatus New Status of the user
     * @return {Observable<Subscribe>} The result of the request
     */
    changeStatusUser(userID: number, newStatus: boolean) {
        return newStatus == true ? 
               this.httpService.put(`/user/${ userID }/ativar`) :
               this.httpService.put(`/user/${ userID }/inativar`)
    }
}