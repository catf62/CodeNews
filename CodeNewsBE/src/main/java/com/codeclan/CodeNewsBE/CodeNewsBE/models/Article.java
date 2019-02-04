package com.codeclan.CodeNewsBE.CodeNewsBE.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="headline")
    private String headline;

    @Column(name="content")
    private String content;

    @Column(name="keywords")
    private ArrayList<String> keywords;

    @Column(name="imageUrl")
    private String imageUrl;

    @Column(name="date")
    private Date date;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    public Article(String headline, String content, ArrayList<String> keywords, String imageUrl, Date date, Author author) {
        this.headline = headline;
        this.content = content;
        this.keywords = keywords;
        this.imageUrl = imageUrl;
        this.date = date;
        this.author = author;
    }

    public Article() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeadline() {
        return headline;
    }

    public void setHeadline(String headline) {
        this.headline = headline;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public ArrayList<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(ArrayList<String> keywords) {
        this.keywords = keywords;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }


}
