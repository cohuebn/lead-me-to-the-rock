import { Component, OnInit } from '@angular/core';
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[recipes]',
    templateUrl: '../post-category.component.html'
})
export class RecipesComponent implements OnInit {
    heading: string = 'Recipes';
    postQuery: PostQuery;

    ngOnInit() {
        this.postQuery = { category: 'recipes' };
    }
}