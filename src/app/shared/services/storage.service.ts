import { Injectable } from '@angular/core'

@Injectable()
export class StorageService {
    constructor() { }

    save(key: string, value: Object) {
        if(typeof(Storage) !== undefined) {
            let newValue;
            try {
                newValue = JSON.stringify(value);
            } catch (err) {
                console.log(err);
            }

            return localStorage.setItem(key, newValue);
        }
    }

    get(key: string) { 
        if(typeof(Storage) !== undefined) {
            const value = localStorage.getItem(key);
            let newValue;
            try {
                newValue = JSON.stringify(key);
            } catch (err) {
                console.log(err);
            }

            return newValue
        }
    }

    remove(key: string) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    
    clear() {
        localStorage.clear();
    }
}