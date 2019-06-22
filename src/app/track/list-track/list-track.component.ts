import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent implements OnInit {

  tracks: Track[];
  url: string = "track/add"
  model: string = "Track"

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.trackService.getTrackList().subscribe(res => {
      this.tracks = res.value;      
    });        
  }

  deleteTrack(id: number) {
    this.trackService.deleteTrack(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
