import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumComponent } from './list-album/list-album.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [ListAlbumComponent, CreateAlbumComponent, DetailAlbumComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot()    
  ]
})
export class AlbumModule { }
