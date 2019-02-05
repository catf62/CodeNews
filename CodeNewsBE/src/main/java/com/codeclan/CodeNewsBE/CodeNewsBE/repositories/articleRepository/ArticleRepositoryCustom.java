package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;

import java.util.List;

public interface ArticleRepositoryCustom {

    List<Article> findArticlesByKeyword(String searchedWord);
    List<Article> findArticlesByHeadline(String searchedWord);

}
