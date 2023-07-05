import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscriber,
  map,
  of,
  take,
} from 'rxjs';
import { Card } from 'ui-ng';
import { LocalStorageService } from '../local-storage/local-storage.service';

enum Params {
  Page = 'page',
  PerPage = 'per_page',
}
const DEFAULT_PER_PAGE_NUMBER: number = 6;
const LOCAL_STORAGE_KEY: string = 'my-beers';
@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private readonly myBeersSub: BehaviorSubject<Array<Card>> =
    new BehaviorSubject<Array<Card>>([]);
  public readonly myBeers$: Observable<Array<Card>> =
    this.myBeersSub.asObservable();

  private baserUrl: string = 'https://api.punkapi.com/v2/beers';

  constructor(
    private readonly http: HttpClient,
    private readonly localStorage: LocalStorageService
  ) {}

  /**
   * Provide  paginated beers
   */
  public getAll<T>(
    page: number = 1,
    perPage: number = DEFAULT_PER_PAGE_NUMBER
  ): Observable<T> {
    const params = new HttpParams()
      .set(Params.Page, page)
      .set(Params.PerPage, perPage);
    return this.http.get<T>(this.baserUrl, { params }).pipe(take(1));
  }

  /**
   * Save new beer in my beer list
   */
  public save(beer: Card): Observable<Card> {
    return new Observable<Card>((subscriber: Subscriber<Card>) => {
      try {
        const myBeers: Array<Card> = [beer, ...this.myBeersSub.value];
        this.localStorage.setItem(LOCAL_STORAGE_KEY, myBeers);
        this.myBeersSub.next(myBeers);
        subscriber.next(beer);
      } catch (error) {
        subscriber.error(error);
      }
    });
  }

  /**
   * Provide current user all saved beers
   */
  public getMyAll(): Observable<Array<Card>> {
    try {
      const myBeers = this.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (myBeers?.length) {
        this.myBeersSub.next(myBeers);
      }
    } catch (error) {
      console.log('Failed to fetch beers');
    }
    return this.myBeers$;
  }
}
