import { Component, OnInit } from '@angular/core'
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[faith]',
    templateUrl: '../post-category.component.html'
})
export class FaithComponent implements OnInit {
    heading: string = 'Faith';
    postQuery: PostQuery;

    ngOnInit() {
        this.postQuery = { category: 'faith' };
    }
}