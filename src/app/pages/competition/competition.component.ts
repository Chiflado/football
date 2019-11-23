import { Component, OnInit } from '@angular/core';
import { Competition, MatchDay } from 'src/app/shared/domain/MOCK-DATA/data';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/domain/data-service/data.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  competetition: Competition;
  matches: MatchDay;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) {}

  ngOnInit() {
    this.route.params.subscribe(() => this.getCompetition());
  }

  getCompetition() {
    const compId = sessionStorage.getItem('compId');
    if (compId) {
      this.dataService.getCompetition(Number(compId))
        .subscribe(response => {
          this.competetition = response;
          this.dataService.getMatches(this.competetition).subscribe(resp => this.matches = resp)
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  getMatches() {}

  getSeason(comp: Competition) {
    const start = comp.currentSeason.startDate;
    const end = comp.currentSeason.endDate;
    return new Date(start).getFullYear() + '/' + new Date(end).getFullYear();
  }

}
