import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RoutePaths } from './models/route-paths.enum';
import { LinkTab } from 'ui-ng';
import {
  ActivatedRoute,
  NavigationEnd,
  Route,
  Router,
  RouterStateSnapshot,
  RoutesRecognized,
} from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'beer-management';
  public routePaths = RoutePaths;

  public tabItems: Array<LinkTab> = [
    {
      label: 'All Beers',
      route: RoutePaths.AllBeers,
      isActive: false,
    },
    {
      label: 'My Beers',
      route: RoutePaths.MyBeers,
      isActive: false,
    },
  ];

  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setActiveTab();
  }

  /**
   * Set active tab according to the route url
   */
  private setActiveTab() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        const currentRoutePath: string =
          this.router.routerState.snapshot.url.replace('/', '');
        this.tabItems = this.tabItems.map((tab: LinkTab) =>
          tab.route === currentRoutePath ? { ...tab, isActive: true } : tab
        );
      });
  }
}
