import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-track',
  templateUrl: './list-track.component.html',
  styleUrls: ['./list-track.component.css']
})
export class ListTrackComponent implements OnInit {

  tracks: Track[];
  url: string = "track/add"
  model: string = "Track"
  totalItems: any
  itemsPerPage: any
  currentPage: number = 1

  constructor(private trackService: TrackService) { }

  ngOnInit() {    
    this.itemsPerPage = environment.paging
    this.reloadData()
  }

  reloadData() {
    this.trackService.getPaginatedTrackList(this.currentPage - 1).subscribe(res => {
      this.tracks = res.value;   
      this.totalItems = Math.ceil((res as any)["@xdata.count"])  
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

  changePage(event: any){    
    this.currentPage = event.page
    this.reloadData()
  }

}
