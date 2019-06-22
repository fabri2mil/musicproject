import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-track',
  templateUrl: './detail-track.component.html',
  styleUrls: ['./detail-track.component.css']
})
export class DetailTrackComponent implements OnInit {

  track: Track;

  constructor(private trackService: TrackService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.trackService.getTrack(this.route.snapshot.params.id).subscribe(res => {
      this.track = res as Track;
      console.log(this.track)
    });        
  }


}
