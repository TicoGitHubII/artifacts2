import { Injectable, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, PRIMARY_OUTLET, NavigationEnd, ActivatedRouteSnapshot , Data} from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { Breadcrumb } from '../model/breadcrumb';
@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService  {

}