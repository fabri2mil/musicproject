import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.css']
})
export class ListArtistComponent implements OnInit {
  
  artists: Artist[];

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.artistService.getArtistList().subscribe(res => {
      this.artists = res.value;      
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

}
