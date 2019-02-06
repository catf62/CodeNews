package com.codeclan.CodeNewsBE.CodeNewsBE.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Type;

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

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Column(name="content")
    private String content;

    @JsonIgnoreProperties("article")
    @OneToMany(mappedBy = "article")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Keyword> keywords;

    @Column(name="imageUrl")
    private String imageUrl;

    @Column(name="datePosted")
    private String datePosted;

    @JsonIgnoreProperties("articles")
    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private Author author;

    public Article(String headline, String content, String imageUrl, String datePosted, Author author) {
        this.headline = headline;
        this.content = content;
        this.keywords = new ArrayList<>();
        this.imageUrl = imageUrl;
        this.datePosted = datePosted;
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

    public List<Keyword> getKeywords() {
        return keywords;
    }

    public void setKeywords(ArrayList<Keyword> keywords) {
        this.keywords = keywords;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDate() {
        return datePosted;
    }

    public void setDate(String date) {
        this.datePosted = date;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public void addKeyword(Keyword keyword){
        this.keywords.add(keyword);
    }

}
