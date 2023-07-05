import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer/beer.service';
import { Card } from 'projects/ui-ng/src/public-api';
import { Beer } from 'src/app/models/beer.interface';

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

  constructor(private readonly beerService: BeerService) {}

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
        if (beers.length) {
          const beersWithTooltips = beers.map((beer) => {
            const { name, image_url, tagline, description, ingredients } = beer;
            return {
              name,
              image_url,
              tagline,
              description,
              tooltipText: `Ingredients: ${Object.keys(ingredients).join(',')}`,
            };
          });
          this.allBeers = [...this.allBeers, ...beersWithTooltips];
        }

        // Update fetch states
        if (this.currentPage === 1) {
          this.isFetching = false;
        }
        this.isFetchingMore = false;
      },
      error: (error) => {
        // Update fetch states
        if (this.currentPage === 1) {
          this.isFetching = false;
        }
        this.isFetchingMore = false;
      },
    });
  }

  /**
   * Load more beers and append in list
   */
  public loadMore() {
    this.isFetchingMore = true;
    this.currentPage++;
    this.fetchBeers();
  }
}
