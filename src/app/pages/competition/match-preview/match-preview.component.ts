import { Component, OnInit, Input } from '@angular/core';
import { MatchEvent } from 'src/app/shared/domain/MOCK-DATA/data';
import { matchDays } from 'src/app/shared/domain/MOCK-DATA/matchdays';

@Component({
  selector: 'app-match-preview',
  templateUrl: './match-preview.component.html',
  styleUrls: ['./match-preview.component.scss']
})
export class MatchPreviewComponent implements OnInit {

  @Input() match: MatchEvent;

  constructor() { }

  ngOnInit() {
  }

  getMatchDate(match: MatchEvent) {
    const startDate = new Date(match.startDate);
    if (match.status !== 'LIVE') {
      return startDate
    } else {
      return match.currentMinute;
    }
  }

}
