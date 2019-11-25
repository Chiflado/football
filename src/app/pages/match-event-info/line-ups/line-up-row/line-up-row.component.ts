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
  @Input() events;

  substition;
  scored = false;
  owngoal = false;
  booked = false;
  card: string;

  constructor() { }

  ngOnInit() {
    this.isScoredOrBooked();
  }

  isScoredOrBooked() {
    this.events.forEach(e => {
      if (e.scorer && e.scorer.id === this.player.id) {
        this.scored = true;
        if (e.type === 'OWNGOAL') {
          this.owngoal = true;
        }
      }
      if (e.card && e.player.id === this.player.id) {
        this.booked = true;
        if (e.card === 'YELLOW_CARD') {
          this.card = 'YELLOW_CARD';
        }
      }
    });
  }

}
