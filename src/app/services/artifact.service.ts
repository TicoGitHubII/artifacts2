import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map, mergeMap, filter } from 'rxjs/operators';
import { Artifact } from 'src/app/model/artifact';
import { OtherArtifacts } from 'src/app/model/otherArtifacts';
import { Artifacts2 } from '../model/artifacts2';

@Injectable({
  providedIn: 'root',
})
export class ArtifactService {
  private baseURL = 'https://api.artic.edu/api/v1/artworks/120081';
  private baseURL1 = 'https://api.artic.edu/api/v1/artworks/';
  private baseURL2 = 'https://api.artic.edu/api/v1/artworks/search'
  constructor(private http: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Get
  public getArtifacts(): Observable<Artifact[]>  {
     // Headers: Observable<Artifact[]>
        //  return this.http.get<Artifact[]>(this.baseURL)
        return this.http.get<Artifact[]>(this.baseURL)
  }

  public getArtwork(id:number) {
    // Headers
    // let params = new HttpParams().set('id',id)
       return this.http.get(this.baseURL1 + id)
 }

  public getOtherArtifacts(): Observable<OtherArtifacts[]> {
    // Params
    const params = new HttpParams().set('q','thomas_doughty')
       return this.http.get<OtherArtifacts[]>(this.baseURL2, { 'params' : params })
 
 }


}
