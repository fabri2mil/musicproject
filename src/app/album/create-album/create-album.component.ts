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
  message: any

  constructor(private albumService: AlbumService,
              private artistService: ArtistService) { }

  ngOnInit() {
    this.artistService.getArtistList().subscribe(res => this.artists = res.value)
  }
  

  save() {
    this.album["Artist@xdata.ref"] = "Artist("+this.selectedArtistId+")"       
    this.albumService.createAlbum(this.album)
      .subscribe(
      data => {
        console.log(data)
        this.message = {}
        this.message['success'] = true
        this.message['text'] = "Album salvo com sucesso"
      },
      error => {
        console.log(error)
        this.message = {}
        this.message['success'] = false
        this.message['text'] = "Preencha o formulario adequadamente"
      });    
  }

  onSubmit() {
    this.save();    
  }
}
