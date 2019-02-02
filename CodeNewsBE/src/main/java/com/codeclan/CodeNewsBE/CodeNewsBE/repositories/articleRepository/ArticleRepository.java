package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends ArticleRepositoryCustom, JpaRepository<Article, Long> {
}
