import { Component, OnInit } from '@angular/core';
import { OtherArtifact } from 'src/app/model/otherArtifacts';
import { ArtifactService } from 'src/app/services/artifact.service';
import{map} from 'rxjs'

@Component({
  selector: 'app-artifact-card2',
  templateUrl: './artifact-card2.component.html',
  styleUrls: ['./artifact-card2.component.scss']
})
export class ArtifactCard2Component implements OnInit{
  artwork: any[] = [];
  isFetching: boolean = false;
  errorMessage: string = null


  constructor(private artifactService: ArtifactService) {}

  ngOnInit() {
    this.artifactService.getOtherArtifacts().subscribe((res)=>{
      this.artwork = res
      console.log('artwork' + res );
  })
   
  }
}
