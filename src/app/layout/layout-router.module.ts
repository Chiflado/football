import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from '../pages/competition/competition.component';

const routes: Routes = [
  { path: ':competittionname', component: CompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
