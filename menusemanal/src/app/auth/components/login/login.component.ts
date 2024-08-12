import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public name: string = '';
  constructor(private route: ActivatedRoute, private router: Router){}


   ngOnInit(): void{
     this.route.queryParams.subscribe((queryParam) => {
       this.name = queryParam['name'];
       console.log(queryParam);
       })
     };

    goToSignUp(): void{
      this.router.navigate(['/auth/signup'])
      }


     goToRecipeDetails(): void{
          this.router.navigate(['/public/recipe-detail', 100], {queryParams: {name: 'LORA'}
          }
          )
          }

}
