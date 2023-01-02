import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Artifact } from 'src/assets/artifact';

import { ArtifactService } from './services/artifact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'test';
  allArtifacts: Artifact[] = [];
  artwork: Artifact[] = [];
  isFetching: boolean = false;
  errorMessage: string = null;

  constructor(private artifactService: ArtifactService) {}

  ngOnInit() {
   
    this.artifactService.getArtifacts().subscribe( 
      (artifacts) => {
        this.allArtifacts = artifacts;
        this.isFetching = true;
        console.log(artifacts);
        this.isFetching = false;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
    this.artifactService.getOtherArtifacts()
  }
  
}
