import { Component } from '@angular/core';


import { Breadcrumb } from 'src/app/model/breadcrumb';
import { BreadcrumbService } from 'src/app/services/breadcrumb.service';
import { Injectable, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, PRIMARY_OUTLET, NavigationEnd, ActivatedRouteSnapshot , Data} from '@angular/router';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent {

  breadcrumbs;

  constructor(private router: Router,  private activatedRoute: ActivatedRoute, ) { 
}

ngOnInit() {

  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
      while (route.firstChild) { route = route.firstChild; }
      return route;
    }))
    .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
    .subscribe(route => {

      let snapshot = this.router.routerState.snapshot;
      this.breadcrumbs = [];
      let url = snapshot.url;
      let routeData = route.snapshot.data;

      console.log(routeData);
      let label = routeData['breadcrumb'];
      let params = snapshot.root.params;

      this.breadcrumbs.push({
        url: url,
        label: label,
        params: params
      });

    });
}





}
