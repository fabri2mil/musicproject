import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ListAlbumComponent } from '../list-album/list-album.component';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from 'src/app/artist/artist.service';
import { Artist } from 'src/app/artist/artist';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {

  album: Album = new Album();
  selectedArtistId: number
  artists: Artist[]

  constructor(private albumService: AlbumService,
              private artistService: ArtistService, 
              private route: ActivatedRoute) { }

  ngOnInit() {    
    this.artistService.getArtistList().subscribe(res => this.artists = res.value)
    this.reloadData()    
  }

  reloadData() {
    this.albumService.getAlbum(this.route.snapshot.params.id).subscribe(res => {
      this.album = res as Album;
      this.selectedArtistId = (res as any).Artist.Id      
    });        
  }

  update() {
    this.album["Artist@xdata.ref"] = "Artist("+this.selectedArtistId+")"       
    this.albumService.updateAlbum(this.route.snapshot.params.id, this.album)
      .subscribe(data => console.log(data), error => console.log(error));    
  }

  onSubmit() {
    this.update();
  }


}
