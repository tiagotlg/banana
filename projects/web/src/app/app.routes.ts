import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "home",
                component: HomeComponent
            },
            {
                path: "browse",
                component: BrowseComponent
            },
            {
                path: "search",
                component: SearchComponent
            },
            {
                path: "**",
                pathMatch: "full",
                redirectTo: "home"
            },
        ]
    },
]
