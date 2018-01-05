import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'article[post]',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
    post: Post;
    routeSubscription: Subscription;
    postSubscription: Subscription;

    constructor(private postService: PostService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(routeParams => {
            this.postSubscription = this.postService.getPost(routeParams.key)
                .subscribe(post => this.post = post);
        });
    }

    ngOnDestroy() {
        [this.routeSubscription, this.postSubscription].forEach(subscription => {
            if (subscription) subscription.unsubscribe();
        });
    }
}