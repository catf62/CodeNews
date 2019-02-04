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
@RequestMapping(value = "/api/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

//    @GetMapping(value = "/keyword/{desiredKeyword}")
//    public List<Article> getArticlesByKeyword (@PathVariable String desiredKeyword) {
//        return articleRepository.getAllArticlesByKeywordsInclude(desiredKeyword);
//    }

    @GetMapping(value="/bananas")
    public String giveBananas () {
        return "bananas";
    }

    @GetMapping(value = "/content/{content}")
    public List<Article> getAllArticlesByContent (@PathVariable String content) {
        return articleRepository.getAllArticlesByContent(content);
    }
}
