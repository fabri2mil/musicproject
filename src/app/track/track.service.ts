import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

    private baseComponentUrl = 'track';

    constructor(private http: HttpClient) { }

    getTrack(id: number): Observable<Object> {        
        return this.http.get(environment.url + this.baseComponentUrl + '(' + id as string + ')/?$expand=Genre');
    }

    getTrackList(): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl);
    }

    getPaginatedTrackList(page:number): Observable<any> {                
        return this.http.get(environment.url + this.baseComponentUrl + "/?$inlinecount=allpages&$top="+ environment.paging as string +"&$skip=" + (environment.paging * page) as string);
    }

    createTrack(track: Object): Observable<Object> {
        return this.http.post(environment.url + this.baseComponentUrl, track);
    }

    updateTrack(id: number, value: any): Observable<Object> {
        return this.http.put(environment.url + this.baseComponentUrl +'('+ id as string + ')', value);
    }

    deleteTrack(id: number): Observable<any> {
        return this.http.delete(environment.url + this.baseComponentUrl +'('+ id as string + ')');
    }

}

