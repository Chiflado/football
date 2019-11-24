import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.scss']
})
export class EventRowComponent implements OnInit {

  @Input() event;
  @Input() team: string;

  constructor() { }

  ngOnInit() {
  }

}
