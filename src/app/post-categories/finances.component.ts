import { Component, OnInit } from '@angular/core';
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[finances]',
    templateUrl: '../post-category.component.html'
})
export class FinancesComponent implements OnInit {
    heading: string = 'Finances';
    postQuery: PostQuery;

    ngOnInit() {
        this.postQuery = { category: 'finances' };
    }
}