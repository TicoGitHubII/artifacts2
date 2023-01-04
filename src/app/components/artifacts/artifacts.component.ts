import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Artifact } from 'src/app/model/artifact';
import { ArtifactCardComponent } from '../artifact-card/artifact-card.component';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss']
})
export class ArtifactsComponent implements OnInit{

  title: 'Artifacts'
  image: any[]
  constructor(private  route: ActivatedRoute, private artifactComponent :ArtifactCardComponent) { }
  ngOnInit() {

   this.image = this.artifactComponent.allArtifacts

    
  }

}
