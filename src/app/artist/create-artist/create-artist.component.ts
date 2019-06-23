import { Component, OnInit, Input } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist = new Artist();        
  constructor(private artistService: ArtistService) { }

  ngOnInit() {    
  }
  
  save() {          
    this.artistService.createArtist(this.artist)
      .subscribe(data => console.log(data), error => console.log(error));
    this.artist = new Artist();
  }

  onSubmit() {
    this.save();
  }

}
