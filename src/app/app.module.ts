import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CompetitionComponent } from './pages/competition/competition.component';
import { LayoutRoutingModule } from './layout/layout-router.module';
import { MatchPreviewComponent } from './pages/competition/match-preview/match-preview.component';
import { MatchEventInfoComponent } from './pages/match-event-info/match-event-info.component';
import { MatchSummaryComponent } from './pages/match-event-info/match-summary/match-summary.component';
import { EventRowComponent } from './pages/match-event-info/match-summary/event-row/event-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    CompetitionComponent,
    MatchPreviewComponent,
    MatchEventInfoComponent,
    MatchSummaryComponent,
    EventRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
