import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { Genre } from '../genre';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-genre',
  templateUrl: './list-genre.component.html',
  styleUrls: ['./list-genre.component.css']
})
export class ListGenreComponent implements OnInit {

  genres: Genre[];
  url: string = "genre/add"
  model: string = "Gênero"
  totalItems: any
  itemsPerPage: any
  currentPage: number = 1

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.itemsPerPage = environment.paging
    this.reloadData()
  }

  reloadData() {
    this.genreService.getPaginatedGenreList(this.currentPage - 1).subscribe(res => {
      this.genres = res.value;
      this.totalItems = Math.ceil((res as any)["@xdata.count"])   
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

  changePage(event: any){    
    this.currentPage = event.page
    this.reloadData()
  }

}
