import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';

@Component({
    selector: 'post-preview',
    templateUrl: './post-preview.component.html',
    styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
    @Input() post;

    constructor(private router: Router) {

    }

    goToPost() {
        this.router.navigateByUrl(`posts/${this.post.key}`);
    }
}