import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer/beer.service';
import { Card } from 'projects/ui-ng/src/public-api';

@Component({
  selector: 'app-all-beers',
  templateUrl: './all-beers.component.html',
  styleUrls: ['./all-beers.component.scss'],
})
export class AllBeersComponent implements OnInit {
  public allBeers: Array<Card> = [];
  public currentPage: number = 1;
  public isFetching: boolean = false;

  constructor(private readonly beerService: BeerService) {}

  ngOnInit(): void {
    this.fetchBeers();
  }

  /**
   * Fetching beers in pagination
   */
  private fetchBeers(): void {
    this.isFetching = true;
    this.beerService
      .getAll<Array<Card>>(this.currentPage)
      .subscribe((beers: Array<Card>) => {
        this.allBeers = [...this.allBeers, ...beers];
        this.isFetching = false;
      });
  }

  /**
   * Load more beers and append in list
   */
  public loadMore() {
    this.currentPage++;
    this.fetchBeers();
  }
}
