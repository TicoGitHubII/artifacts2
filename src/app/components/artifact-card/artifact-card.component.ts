import { Component, OnInit } from '@angular/core';
import { Artifact } from 'src/app/model/artifact';
import { ArtifactService } from 'src/app/services/artifact.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['./artifact-card.component.scss'],
})
export class ArtifactCardComponent implements OnInit {
  allArtifacts: Artifact[];

  isFetching: boolean = false;
  errorMessage: string = null;

  constructor(private artifactService: ArtifactService) {}

  ngOnInit() {
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
      

          console.log( 'allArtifacts: ' + this.allArtifacts);

          this.isFetching = false;
        },
        (error) => {
          this.errorMessage = error.message;
        }
      );
  }
}
