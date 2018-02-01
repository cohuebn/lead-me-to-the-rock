import { Post } from "./post.model";

export interface PostsSchema {
    posts: {
        [postId: string]: Post
    }
}