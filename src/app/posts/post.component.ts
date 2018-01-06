import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { FirebaseContentProvider } from '../content/firebase-content.provider';

@Component({
    selector: 'article[post]',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
    post: Post;
    postContents: Observable<string>;
    routeSubscription: Subscription;
    postSubscription: Subscription;

    constructor(private postService: PostService, private route: ActivatedRoute, private contentProvider: FirebaseContentProvider) {

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(routeParams => {
            this.postSubscription = this.postService.getPost(routeParams.key)
                .subscribe(post => {
                    this.post = post;

                    this.postContents = this.contentProvider.getContents(post.contentUrl);
                });
        });
    }

    ngOnDestroy() {
        const subscriptions = [this.routeSubscription, this.postSubscription]
        
        subscriptions.forEach(subscription => {
            if (subscription) subscription.unsubscribe();
        });
    }
}