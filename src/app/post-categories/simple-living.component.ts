import { Component, OnInit } from '@angular/core';
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[simple-living]',
    templateUrl: '../post-category.component.html'
})
export class SimpleLivingComponent implements OnInit {
    heading: string = 'Simple Living';
    postQuery: PostQuery;

    ngOnInit() {
        this.postQuery = { category: 'simple-living' };
    }
}