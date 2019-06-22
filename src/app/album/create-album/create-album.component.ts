import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { Artist } from 'src/app/artist/artist';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  album: Album = new Album();
  selectedArtistId: number
  artists: Artist[]  

  constructor(private albumService: AlbumService,
              private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getArtistList().subscribe(res => this.artists = res.value)
  }
  

  save() {
    this.album["Artist@xdata.ref"] = "Artist("+this.selectedArtistId+")"       
    this.albumService.createAlbum(this.album)
      .subscribe(data => console.log(data), error => console.log(error));
    this.album = new Album();
  }

  onSubmit() {
    this.save();
  }
}
