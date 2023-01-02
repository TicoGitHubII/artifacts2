import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter, map, tap, scan } from 'rxjs/operators';
import { Artifact } from 'src/app/model/artifact';

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
        this.isFetching = true;

        this.allArtifacts = artifacts;

        console.log(artifacts);

        this.isFetching = false;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
    this.artifactService.getOtherArtifacts();
  }
}
