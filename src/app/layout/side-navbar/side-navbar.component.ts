import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/shared/domain/MOCK-DATA/data';
import { DataService } from 'src/app/shared/domain/data-service/data.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  competitions: Competition[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions() {
    this.dataService.getCompetitions().subscribe(response => this.competitions = response);
  }

}
