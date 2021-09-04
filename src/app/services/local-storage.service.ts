import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class LocalStorageService {

    saveToStorage(dataKey: string, dataItem: any) {
        localStorage.setItem(dataKey, JSON.stringify(dataItem));
    }

    getFromStorage(key: string) {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }

    getRawFromStorage(key: string) {
        return localStorage.getItem(key);
    }

    removeFromStorage(key: string) {
        localStorage.removeItem(key);
    }
}



