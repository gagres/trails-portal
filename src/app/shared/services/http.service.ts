import { Injectable, EventEmitter } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Response, URLSearchParams, Headers } from '@angular/http'
import { Observable, Subscription } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; // Handling errors
import 'rxjs/add/observable/throw'; // Handling errors

@Injectable()
export class HttpService {
    private base_path: string = 'http://trailapi.azurewebsites.net';
    // private base_path: string = 'http://localhost:3000';

    // Ativa/Desativa o Loader da página na hora da requisição
    public newTransaction: EventEmitter<boolean> = new EventEmitter<boolean>();

    private subscription: Observable<Response>;

    constructor(private http: Http) {
        this.handlingError = this.handlingError.bind(this);
    }

    get(url: string, queryParams?: Object, token?: string): Observable<Response> {
        let headers = new Headers({ "Content-Type": "application/json; charset=UTF-8" }),
            params  = new URLSearchParams();

        this.addQueryParams(params, queryParams);

        const options = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: params
        });

        this.cancelOtherRequest();

        this.changeLoadRequest(true);

        this.subscription = this.http.get(this.base_path + url, options)
            .map( res => {
                this.changeLoadRequest(false);
                return res.json();
            })
            .catch(this.handlingError)

        return this.subscription;
    }

    post(url: string, body: Object, queryParams?: Object, token?: string): Observable<Response> {
        let headers = new Headers({ "Content-Type": "application/json; charset=UTF-8" });
        let params  = new URLSearchParams();

        this.addQueryParams(params, queryParams);
        
        const options = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body,
            search: params
        });

        this.cancelOtherRequest();

        this.changeLoadRequest(true);
        this.subscription = this.http.post(this.base_path + url, body, options)
            .map( res => {
                this.changeLoadRequest(false);
                return res.json();
            })
            .catch(this.handlingError)
                    
        return this.subscription;
    }

    put(url: string, queryParams: Object, body: Object, token?: string) {
        let headers = new Headers({ "Content-Type": "application/json; charset=UTF-8" });

        let params = new URLSearchParams();

        this.addQueryParams(params, queryParams);

        const options = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body,
            search: params
        });

        this.cancelOtherRequest();

        this.changeLoadRequest(true);
        this.subscription = this.http.put(this.base_path + url, body, options)
            .map( res => {
                this.changeLoadRequest(false);
                return res.json();
            })
        
        return this.subscription;
    }

    delete(url: string, queryParams?: Object, token?: string): Observable<Response> {
        let headers = new Headers({ "Content-Type": "application/json; charset=UTF-8" }),
            params  = new URLSearchParams();

        this.addQueryParams(params, queryParams);

        const options = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: params
        });

        this.cancelOtherRequest();

        this.changeLoadRequest(true);
        this.subscription = this.http.get(this.base_path + url, options)
            .map( res => {
                this.changeLoadRequest(false);
                return res.json();
            })
            .catch(this.handlingError)
    
        return this.subscription;
    }

    /**
     * Cancela a requisição anterior e cria uma nova
     */
    cancelOtherRequest() {
        if(this.subscription) {
            this.subscription = null;
        }
    }

    // Handling errors
    handlingError(err: any) {
        this.changeLoadRequest(false);
        return Observable.throw(err || 'backend server error');
    }

    /**
     * Ativa o loader que está no "AppComponent"
     * 
     * @param state Novo estado da requisição (True se está ocorrendo e False se ja acabou)
     */
    changeLoadRequest(state: boolean) {
        this.newTransaction.emit(state);
    }
    
    /**
     * Passa todos os parâmetros desejados (no formato JSON) 
     * para o objeto URLSearchParams do Angular que está encarregado 
     * de envia-los pela requisição
     * 
     * @param params Parâmetros desejados (Object)
     * @param queryParams Objecto URLSerachParams que será enviado junto a requisição
     */
    addQueryParams(params: URLSearchParams, queryParams: Object) {
        for(let param in queryParams) {
            if(typeof queryParams[param] == 'object')
                params.append(param, JSON.stringify(queryParams[param]));
            else
                params.append(param, queryParams[param]);                
        }
    }

}