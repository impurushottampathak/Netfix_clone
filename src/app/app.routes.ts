import { Routes } from '@angular/router';
import { BrowseMoviesComponent } from './components/browse-movies/browse-movies.component';
export const routes: Routes = [
    // {
    //     path:'',
    //     loadComponent: ()=> import('./components/browse-movies/browse-movies.component').then(a=> a.BrowseMoviesComponent)
    // }
    {
        path:'',
        component:BrowseMoviesComponent
    }
];
