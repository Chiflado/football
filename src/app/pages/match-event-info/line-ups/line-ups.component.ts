import { Component, OnInit, Input } from '@angular/core';
import { MatchData } from 'src/app/shared/domain/MOCK-DATA/data';

@Component({
  selector: 'app-line-ups',
  templateUrl: './line-ups.component.html',
  styleUrls: ['./line-ups.component.scss']
})
export class LineUpsComponent implements OnInit {

  @Input() match: MatchData;

  constructor() { }

  ngOnInit() {
  }

}
