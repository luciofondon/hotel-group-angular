import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Room } from '../models/room.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class RoomService {

  private readonly API_COUNTRY_URI = environment.apiUrl + '/api/rooms';

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.API_COUNTRY_URI)
      .pipe(
        tap(heroes => console.log('fetched hotels')),
        catchError(this.handleError('getHotels', []))
      );
  }
  
}
