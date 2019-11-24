import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition, MatchDay, MatchData } from '../MOCK-DATA/data';
import { MockCompetetions } from '../MOCK-DATA/competitions';
import { matchDays } from '../MOCK-DATA/matchdays';
import { realPool } from '../MOCK-DATA/matches';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getCompetitions(): Observable<Competition[]> {
    return of(
      MockCompetetions
    )
  }

  getCompetition(compId: number): Observable<Competition> {
    return of(
      MockCompetetions.find(c => c.id === compId)
      )
  }

  getMatches(comp: Competition): Observable<MatchDay> {
    return of(
      matchDays.find(m =>
        m.seasonId === comp.currentSeason.id
        && m.currentMatchDay === comp.currentSeason.currentMatchday
        )
    )
  }

  getMatch(): Observable<MatchData> {
    return of(
      realPool
    )
  }
}
