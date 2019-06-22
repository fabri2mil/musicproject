import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTrackComponent } from './list-track/list-track.component';
import { CreateTrackComponent } from './create-track/create-track.component';
import { DetailTrackComponent } from './detail-track/detail-track.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListTrackComponent, CreateTrackComponent, DetailTrackComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TrackModule { }
