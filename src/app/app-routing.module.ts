import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { MatchEventInfoComponent } from './pages/match-event-info/match-event-info.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: ':competittionname', component: CompetitionComponent },
    { path: ':competittionname/:eventname', component: MatchEventInfoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
