package com.codeclan.CodeNewsBE.CodeNewsBE.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "keywords")
public class Keyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "word")
    private String word;

    @JsonIgnoreProperties("keywords")
    @ManyToOne
    @JoinColumn(name = "article_id", nullable = false)
    private Article article;

    public Keyword(String word, Article article) {
        this.word = word;
        this.article = article;
    }

    public Keyword() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
