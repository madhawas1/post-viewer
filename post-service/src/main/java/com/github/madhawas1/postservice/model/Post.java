package com.github.madhawas1.postservice.model;

public class Post {

    private int id;
    private int userId;
    private String title;
    private String body;

    public int getId() {
        return this.id;
    }

    public int getUserId() {
        return this.userId;
    }

    public String getTitle() {
        return this.title;
    }

    public String getBody() {
        return this.body;
    }
}
