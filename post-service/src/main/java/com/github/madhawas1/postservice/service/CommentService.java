package com.github.madhawas1.postservice.service;

import com.github.madhawas1.postservice.model.Comment;

import java.util.List;

public interface CommentService {

    /**
     * Get Comments for a Post.
     *
     * @param postId {@link Integer} Post Id.
     * @return a {@link List} of {@link Comment}s.
     */
    List<Comment> getCommentsFor(int postId);
}
