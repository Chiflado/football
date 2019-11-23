import { Component, OnInit } from '@angular/core';
import { Competition, MatchDay, MatchEvent } from 'src/app/shared/domain/MOCK-DATA/data';
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

  navigateToMatch(match: MatchEvent) {
    // sessionStorage.setItem('macthId', match.id.toString()),
    this.router.navigate([`${this.eventToUrl(match)}`], {relativeTo: this.route});
  }

  eventToUrl(match: MatchEvent) {
    const home = this.removeWhiteSpaces(match.homeTeam);
    const away = this.removeWhiteSpaces(match.awayTeam);
    return `${home}-${away}-${this.getSeason(this.competetition, '-')}`
  }

  removeWhiteSpaces(text: string) {
    return text.replace(/\s/g, '').toLowerCase();
  } 

  getSeason(comp: Competition, divider) {
    const start = comp.currentSeason.startDate;
    const end = comp.currentSeason.endDate;
    return new Date(start).getFullYear() + divider + new Date(end).getFullYear();
  }

}
