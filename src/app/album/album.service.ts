import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

    private baseComponentUrl = 'album';

    constructor(private http: HttpClient) { }

    getAlbum(id: number): Observable<Object> {        
        return this.http.get(environment.url + this.baseComponentUrl + '(' + id as string + ')/?$expand=Artist');
    }

    getAlbumList(): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl);
    }

    getPaginetedAlbumList(page: number): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl + "/?$inlinecount=allpages&$top="+ environment.paging as string +"&$skip=" + (environment.paging * page) as string);
    }

    createAlbum(album: Object): Observable<Object> {
        return this.http.post(environment.url + this.baseComponentUrl, album);
    }

    updateAlbum(id: number, value: any): Observable<Object> {
        return this.http.put(environment.url + this.baseComponentUrl +'('+ id as string + ')', value);
    }

    deleteAlbum(id: number): Observable<any> {
        return this.http.delete(environment.url + this.baseComponentUrl +'('+ id as string + ')');
    }

}

