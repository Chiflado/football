import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition } from '../MOCK-DATA/data';
import { MockCompetetions } from '../MOCK-DATA/competitions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCompetitions(): Observable<Competition[]> {
    return of(
      MockCompetetions
    )
  }
}
