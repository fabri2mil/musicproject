import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  genre: Genre = new Genre();      

  constructor(private genreService: GenreService) { }

  ngOnInit() {    
  }
  

  save() {          
    this.genreService.createGenre(this.genre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.genre = new Genre();
  }

  onSubmit() {
    this.save();
  }

}
