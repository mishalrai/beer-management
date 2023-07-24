import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer/beer.service';
import { Beer } from 'src/app/models/beer.interface';
import { ToastService, ToastType, Card } from 'ui-ng';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss'],
})
export class AllBeersComponent implements OnInit {
  public allBeers: Array<Card> = [];
  public currentPage: number = 1;
  public loaderText: string = 'Fetching Beers...';

  public isFetching: boolean = false;
  public isFetchingMore: boolean = false;

  constructor(
    private readonly beerService: BeerService,
    private readonly toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.fetchBeers();
  }

  /**
   * Fetching beers in pagination way
   */
  private fetchBeers(): void {
    this.beerService.getAll<Array<Beer>>(this.currentPage).subscribe({
      next: (beers: Array<Beer>) => {
        /* Set the beers in local scope to display on list */
        if (beers.length) {
          const beersWithTooltips = beers.map((beer) => {
            const { id, name, image_url, tagline, description, ingredients } =
              beer;
            return {
              id,
              name,
              image_url,
              tagline,
              description,
              tooltipText: `Ingredients: ${Object.keys(ingredients).join(
                ','
              )}` /* Making tooltip text */,
            };
          });
          this.allBeers = [...this.allBeers, ...beersWithTooltips];
        }

        // Update fetch states
        if (this.currentPage === 1) {
          this.isFetching = false;
        }
        this.isFetchingMore = false;
        
        this.currentPage++;
      },
      error: (error) => {
        // Update fetch states
        if (this.currentPage === 1) {
          this.isFetching = false;
        }
        this.isFetchingMore = false;

        this.toastService.show({
          body: 'Apologies, we encountered an issue while fetching the beers. Please try again later.',
          type: ToastType.Error,
        });
      },
    });
  }

  /**
   * Load more beers and append in list
   */
  public loadMore(): void {
    this.isFetchingMore = true;
    this.fetchBeers();
  }
}
