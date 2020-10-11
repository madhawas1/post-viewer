package com.github.madhawas1.postservice.service;

import com.github.madhawas1.postservice.model.Post;

import java.util.List;

public interface PostService {

    /**
     * Get All Posts.
     *
     * @return a {@link List} of {@link Post}s.
     */
    List<Post> getPosts();
}
