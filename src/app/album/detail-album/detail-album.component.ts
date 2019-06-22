import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import { ListAlbumComponent } from '../list-album/list-album.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {

  album: Album;

  constructor(private albumService: AlbumService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.albumService.getAlbum(this.route.snapshot.params.id).subscribe(res => {
      this.album = res as Album;
      console.log(this.album)
    });        
  }



}
