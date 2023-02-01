import { Component, OnInit } from '@angular/core';
import { ArtifactService } from 'src/app/services/artifact.service';
import { Artifact } from 'src/app/model/artifact';
import { map, Observable } from 'rxjs';
@Component({
  selector: 'app-artifact3',
  templateUrl: './artifact3.component.html',
  styleUrls: ['./artifact3.component.scss']
})
export class Artifact3Component implements OnInit {
  allArtifacts: Artifact[];

  isFetching: boolean = false;
  errorMessage: string = null;
  artWorkImgURL: string ;
  artWorkImgId: string;
  artWork: string;

  constructor(private artifactService : ArtifactService){}

  ngOnInit(): void {

    this.artifactService
    .getArtifacts()
    .pipe(
      map((response) => {
      
        return response;
      })
      // ,
      // catchError((error) => {
      //   return throwError(error);
      // })
    )
    .subscribe(
      (data) => {
        this.isFetching = true;

      
        this.allArtifacts = data;

        this.artWorkImgURL = this.allArtifacts['config'].iiif_url;
        this.artWorkImgId = this.allArtifacts['data'].image_id;
        this.artWork = this.artWorkImgURL+'/'+ this.artWorkImgId +'/full/525,434/0/default.jpg'

        

        console.log(this.artWork )


     
    

        console.log( 'allArtifacts: ' + this.allArtifacts);

        this.isFetching = false;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
}
}

    

