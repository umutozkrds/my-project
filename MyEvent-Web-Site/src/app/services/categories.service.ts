import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    private apiUrl = 'http://188.132.197.87:3000/api/categories';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
