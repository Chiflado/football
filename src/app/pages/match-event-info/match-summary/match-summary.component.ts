import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from 'src/app/shared/domain/MOCK-DATA/data';

@Component({
  selector: 'app-match-summary',
  templateUrl: './match-summary.component.html',
  styleUrls: ['./match-summary.component.scss']
})
export class MatchSummaryComponent implements OnInit {

  @Input() match: MatchData;

  firstHalf = [];
  secondHalf = [];
  halftimeResult: string;
  result: string;

  constructor() { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const events = [];
    this.match.match.bookings.forEach(b => events.push(b));
    this.match.match.goals.forEach(g => events.push(g));
    this.match.match.substitutions.forEach(s => events.push(s));
    this.firstHalf = events.filter((e => e.minute <= 45))
      .sort((a, b) => (a.minute > b.minute) ? 1 : -1);
    this.secondHalf = events.filter((e => e.minute > 45))
      .sort((a, b) => (a.minute > b.minute) ? 1 : -1);
    this.halftimeResult = this.getResult(this.firstHalf);
    this.result = this.getResult(events);
  }

  getResult(events): string {
    let homeGoals = 0;
    let awayGoals = 0;
    events.forEach(e => {
      if (e.scorer && e.team.name === this.match.match.homeTeam.name) {
        homeGoals++;
      } else if (e.scorer && e.team.name === this.match.match.awayTeam.name) {
        console.log(e);
        awayGoals++;
      }
    });
    return `(${homeGoals} - ${awayGoals})`
  }

}
