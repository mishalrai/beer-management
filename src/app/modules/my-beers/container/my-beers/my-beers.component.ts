import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Card } from 'ui-ng';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, take, takeUntil } from 'rxjs';
import { BeerService } from 'src/app/shared/services/beer/beer.service';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.component.html',
  styleUrls: ['./my-beers.component.scss'],
})
export class MyBeersComponent implements OnInit, OnDestroy {
  constructor(
    private modalService: NgbModal,
    private readonly beerService: BeerService
  ) {}

  public modalTitle: string = 'Add a New Beer';

  public beers: Array<Card> = [];

  private onDestroy: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.FetchAllBeers();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Fetch all my beers and set on local store
   */
  public FetchAllBeers() {
    this.beerService
      .getMyAll()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (beers: Array<Card>) => {
          if (beers?.length) {
            this.beers = beers;
          }
        },
        error: () => {},
      });
  }

  public openModal(addBeerModal: any) {
    this.modalService.open(addBeerModal, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  public addNewBeer(beer: Card) {
    this.beerService
      .save(beer)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          console.log(data, 'response');
        },
        error: () => {},
      });
  }

  /**
   * Close add user modal box
   */
  public closeModal(): void {
    this.modalService.dismissAll();
  }
}
