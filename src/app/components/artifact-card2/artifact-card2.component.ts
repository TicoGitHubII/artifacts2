import { Component, OnInit } from '@angular/core';
import { OtherArtifacts } from 'src/app/model/otherArtifacts';
import { ArtifactService } from 'src/app/services/artifact.service';
import { Artifacts2 } from 'src/app/model/artifacts2';
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
  artwork_item: Artifacts2[] = [];
  Object = Object;
  temp:  [
    {title: any,
    date: any}

  ]
  artArr: any[] =[];

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
          console.debug(value, this.artworks);
        }
        this.OtherArtifacts = response;
      //  drill down and map response and call api for id 
       this.artworks.forEach(item => { 
              this.artifactService.getArtwork(item.id)
              .pipe(
                tap(val => console.log(val), err => console.error(err)),
              //   map( res =>{
              //     return res.map(targetwork =>{
              //         this.artwork_item['title']= targetwork['data'].title
              //         this.artwork_item['date_start']= targetwork['data'].date_start
              //         }
              //                     )
              //     }    
              // )
              ).subscribe(
                //get keys values of eact artwork & to array
                response =>{
                   for (const key in response)
                   {
                    if (response.hasOwnProperty(key)){
                      const val = response[key];
                      this.artArr.push({key,val})

                    }
                   }
                  this.artwork_item
                           //Object.keys(response).map(key => response[key]);
                  console.log( `artwork_item are here ${this.artwork_item} \n and artArr is this  ${this.artArr} `  )
                  for (const object of this.artArr) {
                    console.log(object);
                  }
                })
       });

        console.log('OtherArtifacts => ' + Object.entries(this.artworks.at(0)));
      });
  }
}
