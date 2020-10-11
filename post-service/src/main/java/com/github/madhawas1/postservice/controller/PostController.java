package com.github.madhawas1.postservice.controller;

import com.github.madhawas1.postservice.model.Comment;
import com.github.madhawas1.postservice.model.Post;
import com.github.madhawas1.postservice.service.CommentService;
import com.github.madhawas1.postservice.service.PostService;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/posts")
public class PostController {

    private static final Logger log = org.slf4j.LoggerFactory.getLogger(PostController.class);
    private final PostService postService;
    private final CommentService commentService;

    @Autowired
    public PostController(PostService postService, CommentService commentService) {
        this.postService = postService;
        this.commentService = commentService;
    }


    /**
     * Get All Posts End Point (/api/posts)
     */
    @GetMapping
    public List<Post> getPosts() {

        log.debug("Get All Posts Request Received.");
        return postService.getPosts();
    }

    /**
     * Get All Comments for a Post End Point (/api/posts/{id}/comments)
     */
    @GetMapping("/{id}/comments")
    public List<Comment> getPosts(@PathVariable(value = "id") int postId) {

        log.debug("Get All Posts Request Received.");
        return commentService.getCommentsFor(postId);
    }
}
