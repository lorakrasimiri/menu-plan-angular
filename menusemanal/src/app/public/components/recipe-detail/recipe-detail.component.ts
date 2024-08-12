import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
  public id: number = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      })
    };

}
