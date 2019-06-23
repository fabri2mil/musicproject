import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';

@Component({
  selector: 'app-detail-artist',
  templateUrl: './detail-artist.component.html',
  styleUrls: ['./detail-artist.component.css']
})
export class DetailArtistComponent implements OnInit {

  artist: Artist = {Id:1, Name: "teste"};

  constructor(private artistService: ArtistService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.artistService.getArtist(this.route.snapshot.params.id).subscribe(res => {
      this.artist = res as Artist;
      console.log(this.artist)
    });        
  }

  update() {          
    this.artistService.updateArtist(this.route.snapshot.params.id, this.artist)
      .subscribe(data => console.log(data), error => console.log(error));          
  }

  onSubmit() {
    this.update();
  }

}
