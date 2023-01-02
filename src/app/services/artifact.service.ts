import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Artifact } from 'src/app/model/artifact';
import { OtherArtifact } from 'src/app/model/otherArtifacts';

@Injectable({
  providedIn: 'root',
})
export class ArtifactService {
  private baseURL = 'https://api.artic.edu/api/v1/artworks/120081';
  private baseURL2 = 'https://api.artic.edu/api/v1/artworks/search'
  constructor(private http: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Get
  public getArtifacts() {
     // Headers
        return this.http.get(this.baseURL, { responseType: 'json' }).pipe(
      map((response: { [key: string]: Artifact }) => {
        const artifacts = [];

        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            artifacts.push({ ...response[key] });
          }
        }
        return artifacts;
      })
      // ,
      // catchError((error) => {
      //   return throwError(error);
      // })
    );
  }
  public getArtifact(artwork:string) {
    // Headers
    let params = new HttpParams().set('param', artwork)
       return this.http.get(this.baseURL, { responseType: 'json' }).pipe(
     map((response: { [key: string]: Artifact }) => {
       const artifacts = [];

       for (const key in response) {
         if (response.hasOwnProperty(key)) {
           artifacts.push({ ...response[key] });
         }
       }
       return artifacts;
     })
     // ,
     // catchError((error) => {
     //   return throwError(error);
     // })
   );
 }

  public getOtherArtifacts() {
    // Params
    const params = new HttpParams().set('q','thomas_doughty')
       return this.http.get(this.baseURL2, { 'params' : params }).pipe(
     map((response: { [key: string]: OtherArtifact }) => {
       const otherArtifacts = [];

       for (const key in response) {
         if (response.hasOwnProperty(key)) {
          otherArtifacts.push({ ...response[key] });
         }
       }
       return otherArtifacts;
     })
   ).subscribe((res)=>{
    console.log(res[2])
   });
 }


}
