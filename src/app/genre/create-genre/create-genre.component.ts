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
  message: any    

  constructor(private genreService: GenreService) { }

  ngOnInit() {    
  }
  

  save() {          
    this.genreService.createGenre(this.genre)
      .subscribe(data => {
        console.log(data)
        this.message = {}
        this.message['success'] = true
        this.message['text'] = "Gênero salvo com sucesso"
      },
      error => {
        console.log(error)
        this.message = {}
        this.message['success'] = false
        this.message['text'] = "Preencha o formulario adequadamente"
      });    
    this.genre = new Genre();
  }

  onSubmit() {
    this.save();
  }

}
