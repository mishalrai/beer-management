import {
  Component,
  OnDestroy,
  OnInit,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { Card, ToastType } from 'ui-ng';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, take, takeUntil } from 'rxjs';
import { BeerService } from 'src/app/shared/services/beer/beer.service';
import { ToastService } from 'ui-ng';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.component.html',
  styleUrls: ['./my-beers.component.scss'],
})
export class MyBeersComponent implements OnInit, OnDestroy {
  @ContentChild('beerModal') beerModal!: TemplateRef<any>;

  public modalTitle: string = 'Add a New Beer'; /* add beer modal title */
  public loaderText: string = 'Fetching Beers'; /* Loader text */

  public isFetching: boolean = false;
  public isAdding: boolean = false;

  public beers: Array<Card> = [];
  public BEER_IMG: string =
    'https://raw.githubusercontent.com/mishalrai/beer-management/master/cdn/img/beer.png';
  private deleteConfirmMessage: string = 'Are you sure you want to delete?';
  private onDestroy: Subject<void> = new Subject<void>();

  constructor(
    private modalService: NgbModal,
    private readonly beerService: BeerService,
    private readonly toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.isFetching = true;
    this.FetchAllBeers();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
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
   * Fetch all my beers and set on local store
   */
  public FetchAllBeers(): void {
    this.beerService
      .getMyAll()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (beers: Array<Card>) => {
          if (beers) {
            this.beers = beers;
          }
          this.isFetching = false;
        },
        error: () => {
          this.isFetching = false;

          this.toastService.show({
            body: 'Apologies, we encountered an issue while fetching the beers. Please try again later.',
            type: ToastType.Error,
          });
        },
      });
  }

  /**
   * create my new beer
   */
  public addNewBeer(beer: Card, modal: any): void {
    this.isAdding = true;
    this.beerService
      .save(beer)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.isAdding = false;
          modal.close();
          this.toastService.show({
            body: 'Cheers! The beer has been added successfully. Enjoy!',
            type: ToastType.Success,
          });
        },
        error: () => {
          this.isAdding = false;
          this.toastService.show({
            body: 'Oops! We encountered a problem while trying to add the beer. Please try again later.',
            type: ToastType.Error,
          });
        },
      });
  }

  /**
   * Delete provided id beer from the list
   */
  public delete(id: number): void {
    if (confirm(this.deleteConfirmMessage)) {
      this.beerService
        .delete(id)
        .pipe(take(1))
        .subscribe({
          next: () => {
            this.toastService.show({
              body: `The beer has been deleted successfully. `,
              type: ToastType.Success,
            });
          },
          error: (error: Error) => {
            this.toastService.show({
              body: 'Uh-oh! We encountered a problem while trying to delete the beer. Please try again later.',
              type: ToastType.Error,
            });
          },
        });
    }
  }
}
