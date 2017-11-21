import { HttpService } from './../../shared/services/http.service';
import { Injectable } from '@angular/core'

@Injectable()
export class TrailService { 
    constructor(private httpService: HttpService) { }

    getListOfTrails() {
        return this.httpService.get('/trails');
    }
}