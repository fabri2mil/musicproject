import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {
  
  artists: Artist[];
  url: string = "/artist/add"
  model: string = "Artista"
  totalItems: any
  itemsPerPage: any
  currentPage: number = 1  

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.itemsPerPage = environment.paging
    this.reloadData()
  }

  reloadData() {    
    this.artistService.getPaginatedArtistList(this.currentPage - 1).subscribe(res => {
      this.artists = res.value;   
      this.totalItems = Math.ceil((res as any)["@xdata.count"])   
    });        
  }

  deleteArtist(id: number) {
    this.artistService.deleteArtist(id)
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
