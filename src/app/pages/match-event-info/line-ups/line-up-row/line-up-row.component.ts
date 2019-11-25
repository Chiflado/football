import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/domain/MOCK-DATA/data';

@Component({
  selector: 'app-line-up-row',
  templateUrl: './line-up-row.component.html',
  styleUrls: ['./line-up-row.component.scss']
})
export class LineUpRowComponent implements OnInit {

  @Input() player: Player;
  @Input() captain: Player;
  @Input() team: string;

  constructor() { }

  ngOnInit() {
  }

}
