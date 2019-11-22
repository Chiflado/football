import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/shared/domain/MOCK-DATA/data';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/domain/data-service/data.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {

  competetition: Competition;

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
        .subscribe(response => this.competetition = response);
    } else {
      this.router.navigate(['/']);
    }
  }

}
