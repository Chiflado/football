import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CompetitionComponent } from './pages/competition/competition.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: ':competittionname', component: CompetitionComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
