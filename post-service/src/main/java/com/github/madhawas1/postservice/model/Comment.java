package com.github.madhawas1.postservice.model;

public class Comment {

    private int id;
    private int postId;
    private String name;
    private String email;
    private String body;

    public int getId() {
        return this.id;
    }

    public int getPostId() {
        return this.postId;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getBody() {
        return this.body;
    }
}
