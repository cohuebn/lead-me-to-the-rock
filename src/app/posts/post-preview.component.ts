import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
    selector: 'post-preview',
    templateUrl: './post-preview.component.html',
    styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
    @Input() post;
}