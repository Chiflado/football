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
  playerIn: string;
  playerOut: string;

  constructor() { }

  ngOnInit() {
    this.getPlayerInfos();
  }

  getPlayerInfos() {
    this.events.forEach(e => {
      this.isScored(e);
      this.isBooked(e);
      this.isSubbed(e);
    });
  }

  isScored(event) {
    if (event.scorer && event.scorer.id === this.player.id) {
      this.scored = true;
      if (event.type === 'OWNGOAL') {
        this.owngoal = true;
      }
    }
  }

  isBooked(event) {
    if (event.card && event.player.id === this.player.id) {
      this.booked = true;
      if (event.card === 'YELLOW_CARD') {
        this.card = 'YELLOW_CARD';
      }
    }
  }

  isSubbed(event) {
    if (event.playerOut) {
      if (event.playerOut.id === this.player.id) {
        this.playerIn = event.playerIn.name;
      } else if (event.playerIn.id === this.player.id) {
        this.playerOut = event.playerOut.name;      }
    }
  }

}
