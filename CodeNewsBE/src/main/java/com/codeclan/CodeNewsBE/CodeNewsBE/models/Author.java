package com.codeclan.CodeNewsBE.CodeNewsBE.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "authors")

public class Author {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "position")
    private String position;

    @Column(name = "biography")
    private String biography;

    @Column(name = "imageUrl")
    private String imageUrl;

    @JsonIgnoreProperties("author")
    @OneToMany(mappedBy = "author")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Article> articles;


    public Author(String name, String position, String biography, String imageUrl) {
        this.name = name;
        this.position = position;
        this.biography = biography;
        this.imageUrl = imageUrl;
    }

    public Author() {
    }


    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }

    public void addArticle(Article article){
        this.articles.add(article);
    }
}
