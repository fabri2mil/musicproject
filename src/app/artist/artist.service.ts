import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

    private baseComponentUrl = 'artist';

    constructor(private http: HttpClient) { }

    getArtist(id: number): Observable<Object> {        
        return this.http.get(environment.url + this.baseComponentUrl + '(' + id as string + ')');
    }

    getArtistList(): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl);
    }

    getPaginatedArtistList(page:number): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl + "/?$inlinecount=allpages&$top="+ environment.paging as string +"&$skip=" + (environment.paging * page) as string);
    }

    createArtist(artist: Object): Observable<Object> {
        return this.http.post(environment.url + this.baseComponentUrl, artist);
    }

    updateArtist(id: number, value: any): Observable<Object> {
        return this.http.put(environment.url + this.baseComponentUrl +'('+ id as string + ')', value);
    }

    deleteArtist(id: number): Observable<any> {
        return this.http.delete(environment.url + this.baseComponentUrl +'('+ id as string + ')');
    }

}

