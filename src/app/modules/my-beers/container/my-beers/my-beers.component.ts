import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ContentChild,
  TemplateRef,
} from '@angular/core';
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
  @ContentChild('beerModal') beerModal!: TemplateRef<any>;

  public modalTitle: string = 'Add a New Beer'; /* add beer modal title */
  public loaderText: string = 'Fetching Beers'; /* Loader text */

  public isFetching: boolean = false;
  public isAdding: boolean = false;

  public beers: Array<Card> = [];
  public BEER_IMG: string =
    'https://raw.githubusercontent.com/mishalrai/beer-management/master/cdn/img/beer.png';

  private onDestroy: Subject<void> = new Subject<void>();
  ngOnInit(): void {
    this.isFetching = true;
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
          this.isFetching = false;
        },
        error: () => {
          this.isFetching = false;
        },
      });
  }

  /**
   * Open the add beer modal box
   */
  public openModal(addBeerModal: any): void {
    this.modalService.open(addBeerModal, {
      ariaLabelledBy: 'modal-basic-title',
    });
  }

  /**
   * create my new beer
   */
  public addNewBeer(beer: Card, modal: any) {
    this.isAdding = true;
    this.beerService
      .save(beer)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.isAdding = false;
          modal.close();
        },
        error: () => {
          this.isAdding = false;
        },
      });
  }

  /**
   * Close add user modal box
   */
  public closeModal(): void {
    this.modalService.dismissAll();
  }
}
