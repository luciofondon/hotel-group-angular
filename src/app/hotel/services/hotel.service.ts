import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Hotel } from '../../shared/models/hotel.model';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HotelService {
  private readonly API_COUNTRY_URI = environment.apiUrl + '/api/hotels';

  constructor(private http: HttpClient) { }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHotels (): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.API_COUNTRY_URI)
      .pipe(
        tap(heroes => console.log('fetched hotels')),
        catchError(this.handleError('getHotels', []))
      );
  }
  
  getHotel(id: number): Observable<Hotel> {
    const url = `${this.API_COUNTRY_URI}/${id}`;
    return this.http.get<Hotel>(url).pipe(
      tap(_ => console.log(`fetched hotel id=${id}`)),
      catchError(this.handleError<Hotel>(`getHotel id=${id}`))
    );
  }
  
  addHotel (hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.API_COUNTRY_URI, hotel, httpOptions).pipe(
      tap((hotel: Hotel) => console.log(`added hotel w/ id=${hotel.id}`)),
      catchError(this.handleError<Hotel>('addHotel'))
    );
  }
  
  updateHotel (id, hotel): Observable<any> {
    const url = `${this.API_COUNTRY_URI}/${id}`;
    return this.http.put(url, hotel, httpOptions).pipe(
      tap(_ => console.log(`updated hotel id=${id}`)),
      catchError(this.handleError<any>('updateHotel'))
    );
  }
  
  deleteHotel (id): Observable<Hotel> {
    const url = `${this.API_COUNTRY_URI}/${id}`;
  
    return this.http.delete<Hotel>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted hotel id=${id}`)),
      catchError(this.handleError<Hotel>('deleteHotel'))
    );
  }

}
