import { Component, OnInit } from '@angular/core';
import { Artifact } from 'src/app/model/artifact';
import { ArtifactService } from 'src/app/services/artifact.service';
import{map} from 'rxjs'


@Component({
  selector: 'app-artifact-card',
  templateUrl: './artifact-card.component.html',
  styleUrls: ['./artifact-card.component.scss']
})
export class ArtifactCardComponent implements OnInit {
  allArtifacts: Artifact[] = [];
  artwork: Artifact[] = [];
  isFetching: boolean = false;
  errorMessage: string = null;

  constructor(private artifactService: ArtifactService) {}

  ngOnInit() {
    this.artifactService.getArtifacts().pipe(
      map((data) => {
        return data['data'] ;
      }
    ))
    .subscribe(
      (artifacts) => {
        this.isFetching = true;

        this.allArtifacts = artifacts

        console.log(artifacts);

        this.isFetching = false;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
   
  }
}
