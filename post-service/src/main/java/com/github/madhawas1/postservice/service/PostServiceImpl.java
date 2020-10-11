package com.github.madhawas1.postservice.service;

import com.github.madhawas1.postservice.model.Post;
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
public class PostServiceImpl implements PostService {

    private static final Logger log = org.slf4j.LoggerFactory.getLogger(PostServiceImpl.class);
    private final RestTemplate restTemplate;

    @Value("${datasource.url}")
    private String datasourceUrl;

    @Autowired
    public PostServiceImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public List<Post> getPosts() {

        log.trace("Get Posts from Datasource.");

        var url = datasourceUrl + "/posts";
        var posts = restTemplate.getForObject(url, Post[].class);

        if (Objects.isNull(posts)) {
            return Collections.emptyList();
        } else {
            return Arrays.asList(posts);
        }
    }
}
