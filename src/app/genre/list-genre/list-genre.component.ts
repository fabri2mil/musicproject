import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';

@Component({
  selector: 'app-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent implements OnInit {

  genres: Genre[];

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.reloadData()
  }

  reloadData() {
    this.genreService.getGenreList().subscribe(res => {
      this.genres = res.value;      
    });        
  }

  deleteGenre(id: number) {
    this.genreService.deleteGenre(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
