import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

    private baseComponentUrl = 'genre';

    constructor(private http: HttpClient) { }

    getGenre(id: number): Observable<Object> {        
        return this.http.get(environment.url + this.baseComponentUrl + '(' + id as string + ')');
    }

    getGenreList(): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl);
    }

    createGenre(genre: Object): Observable<Object> {
        return this.http.post(environment.url + this.baseComponentUrl, genre);
    }

    updateGenre(id: number, value: any): Observable<Object> {
        return this.http.put(environment.url + this.baseComponentUrl +'('+ id as string + ')', value);
    }

    deleteGenre(id: number): Observable<any> {
        return this.http.delete(environment.url + this.baseComponentUrl +'('+ id as string + ')');
    }

}

