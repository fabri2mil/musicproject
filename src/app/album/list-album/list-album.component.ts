import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { Observable } from 'rxjs';
import { AlbumService } from '../album.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.css']
})
export class ListAlbumComponent implements OnInit {

  albums: Album[];
  url: string = "album/add";
  model: string = "Album";
  totalItems: any
  itemsPerPage: any
  currentPage: number = 1

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.itemsPerPage = environment.paging
    this.reloadData();
  }

  reloadData() {    
    this.albumService.getPaginetedAlbumList(this.currentPage - 1).subscribe(res => {
      this.albums = res.value;
      this.totalItems = Math.ceil((res as any)["@xdata.count"]) 
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

  changePage(event: any){    
    this.currentPage = event.page
    this.reloadData()
  }


}
