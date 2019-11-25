import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from 'src/app/shared/domain/MOCK-DATA/data';

@Component({
  selector: 'app-line-ups',
  templateUrl: './line-ups.component.html',
  styleUrls: ['./line-ups.component.scss']
})
export class LineUpsComponent implements OnInit {

  @Input() match: MatchData;
  events;

  constructor() { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.events = [];
    this.match.match.bookings.forEach(b => this.events.push(b));
    this.match.match.goals.forEach(g => this.events.push(g));
    this.match.match.substitutions.forEach(s => this.events.push(s));
  }

}
