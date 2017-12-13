import { HttpService } from './../../shared/services/http.service';
import { Injectable } from '@angular/core'

@Injectable()
export class TrailService { 
    constructor(private httpService: HttpService) { }

    /**
     * Busca a lista de trilhas cadastradas no sistema
     * 
     * @returns Lista de trilhas encontradas ou vazio
     */
    getListOfTrails() {
        return this.httpService.get('/trails');
    }

    /**
     * Busca a trilha com base em seu ID
     * 
     * @param trailID ID da trilha
     * @returns Trilha encontrada ou vazio
     */
    getTrailById(trailID: number) {
        return this.httpService.get(`/trail/${ trailID }`);
    }
}