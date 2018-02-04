import { Component, OnInit } from '@angular/core'
import { PostQuery } from '../posts/post-query.model';

@Component({
    selector: 'section[faith]',
    templateUrl: './faith.component.html'
})
export class FaithComponent implements OnInit {
    postQuery: PostQuery;

    ngOnInit() {
        this.postQuery = { category: 'faith' };
    }
}