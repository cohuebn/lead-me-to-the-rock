import { Component, OnInit } from '@angular/core';
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[home]',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    postQuery: PostQuery;

    constructor() {

    }

    ngOnInit() {
        this.postQuery = {limit: 5};
    }
}