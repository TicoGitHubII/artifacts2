import { Observable} from 'rxjs';

export interface IBreadcrumb {
    path: string;
    label: Observable<string>;
    icon?: Observable<string>;
}
