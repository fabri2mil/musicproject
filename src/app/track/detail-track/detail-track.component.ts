import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { TrackService } from '../track.service';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/genre/genre';
import { GenreService } from 'src/app/genre/genre.service';

@Component({
  selector: 'app-detail-track',
  templateUrl: './detail-track.component.html',
  styleUrls: ['./detail-track.component.css']
})
export class DetailTrackComponent implements OnInit {

  track: Track;
  selectedGenreId: number
  genres: Genre[]  
  
  constructor(private trackService: TrackService, 
              private genreService: GenreService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.genreService.getGenreList().subscribe(res => this.genres = res.value)    
    this.reloadData()
  }

  reloadData() {
    this.trackService.getTrack(this.route.snapshot.params.id).subscribe(res => {
      this.track = res as Track;
      this.selectedGenreId = (res as any).Genre.Id
    });        
  }

  update() {  
    this.track["Genre@xdata.ref"] = "Genre("+this.selectedGenreId+")"        
    this.trackService.updateTrack(this.route.snapshot.params.id, this.track)
      .subscribe(data => console.log(data), error => console.log(error));          
  }

  onSubmit() {
    this.update();
  }


}
