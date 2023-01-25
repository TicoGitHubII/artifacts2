import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Artifact } from 'src/app/model/artifact';

@Component({
  selector: 'app-artifacts',
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.scss']
})
export class ArtifactsComponent implements OnInit{

  title: 'Artifacts'
  constructor(private  route: ActivatedRoute) { }
  ngOnInit() {
   
  }

}
