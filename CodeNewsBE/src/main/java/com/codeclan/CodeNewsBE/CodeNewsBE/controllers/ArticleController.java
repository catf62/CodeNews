package com.codeclan.CodeNewsBE.CodeNewsBE.controllers;


import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping(value = "/keyword/{keyword}")
    public List<Article> findArticlesByKeyword(@PathVariable String keyword) {
        return articleRepository.findArticlesByKeyword(keyword);
    }


}