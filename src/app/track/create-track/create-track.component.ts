import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { GenreService } from 'src/app/genre/genre.service';
import { TrackService } from '../track.service';
import { Genre } from 'src/app/genre/genre';

@Component({
  selector: 'app-create-track',
  templateUrl: './create-track.component.html',
  styleUrls: ['./create-track.component.css']
})
export class CreateTrackComponent implements OnInit {

  track: Track = new Track();
  selectedGenreId: number
  genres: Genre[]  
  message: any    

  constructor(private trackService: TrackService,
              private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenreList().subscribe(res => this.genres = res.value)
  }
  

  save() {
    this.track["Genre@xdata.ref"] = "Genre("+this.selectedGenreId+")"       
    this.trackService.createTrack(this.track)
      .subscribe(data => {
        console.log(data)
        this.message = {}
        this.message['success'] = true
        this.message['text'] = "Track salvo com sucesso"
      },
      error => {
        console.log(error)
        this.message = {}
        this.message['success'] = false
        this.message['text'] = "Preencha o formulario adequadamente"
      });    
    this.track = new Track();
  }

  onSubmit() {
    this.save();
  }
}
