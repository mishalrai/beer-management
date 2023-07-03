import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from './models/route-paths.enum';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutePaths.AllBeers,
  },
  {
    path: RoutePaths.AllBeers,
    loadChildren: () =>
      import('./modules/all-beers/all-beers.module').then(
        (m) => m.AllBeersModule
      ),
  },
  {
    path: RoutePaths.MyBeers,
    loadChildren: () =>
      import('./modules/my-beers/my-beers.module').then((m) => m.MyBeersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
