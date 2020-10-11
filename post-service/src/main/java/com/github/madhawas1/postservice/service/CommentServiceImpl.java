package com.github.madhawas1.postservice.service;

import com.github.madhawas1.postservice.model.Comment;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Service
public class CommentServiceImpl implements CommentService {

    private static final Logger log = org.slf4j.LoggerFactory.getLogger(CommentServiceImpl.class);
    private final RestTemplate restTemplate;

    @Value("${datasource.url}")
    private String datasourceUrl;

    @Autowired
    public CommentServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public List<Comment> getCommentsFor(int postId) {

        log.trace("Get Comments for Post: {} from Datasource.", postId);

        var url = datasourceUrl + "/comments?postId=" + postId;
        var comments = restTemplate.getForObject(url, Comment[].class);

        if (Objects.isNull(comments)) {
            return Collections.emptyList();
        } else {
            return Arrays.asList(comments);
        }
    }
}
