import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/shared/domain/MOCK-DATA/data';
import { DataService } from 'src/app/shared/domain/data-service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  competitions: Competition[];

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions() {
    this.dataService.getCompetitions().subscribe(response => this.competitions = response);
  }

  navigatesToCompetitionPage(comp: Competition) {
    this.router.navigate([`${this.nameToUrl(comp.name)}`]);
  }

  nameToUrl(name: string) {
    return name.replace(/ /gi, '-').toLowerCase();
  }

}
