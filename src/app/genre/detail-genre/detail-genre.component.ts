import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from '../genre';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-detail-genre',
  templateUrl: './detail-genre.component.html',
  styleUrls: ['./detail-genre.component.css']
})
export class DetailGenreComponent implements OnInit {

  genre: Genre;

  constructor(private genreService: GenreService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.genreService.getGenre(this.route.snapshot.params.id).subscribe(res => {
      this.genre = res as Genre;
      console.log(this.genre)
    });        
  }

}
