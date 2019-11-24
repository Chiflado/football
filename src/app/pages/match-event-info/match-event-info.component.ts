import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/domain/data-service/data.service';
import { MatchData } from 'src/app/shared/domain/MOCK-DATA/data';

@Component({
  selector: 'app-match-event-info',
  templateUrl: './match-event-info.component.html',
  styleUrls: ['./match-event-info.component.scss']
})
export class MatchEventInfoComponent implements OnInit {

  match: MatchData;
  homeGoals = 0;
  awayGoals = 0;

  constructor(private dataSevice: DataService) { }

  ngOnInit() {
    this.dataSevice.getMatch().subscribe(reponse => {
      this.match = reponse;
      this.getGoals();
    });
  }

  getGoals() {
    this.match.match.goals.forEach(goal => {
      if (goal.team.name === this.match.match.homeTeam.name) {
        this.homeGoals++;
      } else {
        this.awayGoals++;
      }
    });
  }

}
