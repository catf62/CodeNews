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

    @JsonIgnoreProperties("author")
    @OneToMany(mappedBy = "author")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<Article> articles;

    public Author(String name) {
        this.name = name;
        this.articles = new ArrayList<>();

    }

    public Author() {
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
