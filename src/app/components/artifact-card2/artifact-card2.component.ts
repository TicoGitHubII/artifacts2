import { Component, OnInit } from '@angular/core';
import { OtherArtifacts } from 'src/app/model/otherArtifacts';
import { ArtifactService } from 'src/app/services/artifact.service';
import { map, tap } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-artifact-card2',
  templateUrl: './artifact-card2.component.html',
  styleUrls: ['./artifact-card2.component.scss'],
})
export class ArtifactCard2Component implements OnInit {
  OtherArtifacts: OtherArtifacts[];
  isFetching: boolean = false;
  errorMessage: string = null;
  artworks = [];
  Object = Object;
  temp:  {
    tile: string,
    date: string

  }

  constructor(private artifactService: ArtifactService) {}

  ngOnInit() {
    this.artifactService
      .getOtherArtifacts()
      .pipe(
        map((response) => {
          return response;
        })
      )
      .subscribe((response) => {
        for (let value of Object.values(response['data'])) {
          this.artworks.push(value);
          console.log(value, this.artworks);
        }
        this.OtherArtifacts = response;
       
       this.artworks.forEach(item => { 
              this.artifactService.getArtwork(item.id).pipe(
            map(response => ({
                  tile: response['data'].title,
                  date: response['data'].date_start,
              }))
              )
       
              .subscribe(
                //get keys values of eact artwork & to array
                response =>{
                 





                  
                   console.log('temp'+ response.tile)
                }
              )
        
       });

        console.log('OtherArtifacts' + Object.entries(this.artworks.at(0)));
      });
  }
}
