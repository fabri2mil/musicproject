import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { Observable } from 'rxjs';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.css']
})
export class ListAlbumComponent implements OnInit {

  albums: Album[];
  url: string = "album/add"
  model: string = "Album"
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.albumService.getAlbumList().subscribe(res => {
      this.albums = res.value
    });        
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
