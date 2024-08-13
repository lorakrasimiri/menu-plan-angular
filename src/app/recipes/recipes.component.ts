import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {

  bookId: number = 12;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe((param) => {
      console.log(param);
    });
  }
}
