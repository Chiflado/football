import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from '../pages/competition/competition.component';
import { MatchEventInfoComponent } from '../pages/match-event-info/match-event-info.component';

const routes: Routes = [
  { path: ':competittionname', component: CompetitionComponent, children: [
    { path: ':eventname', component: MatchEventInfoComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
