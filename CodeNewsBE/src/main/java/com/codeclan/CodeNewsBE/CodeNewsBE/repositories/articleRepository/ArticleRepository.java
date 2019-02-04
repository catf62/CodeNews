package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.projections.EmbedAuthor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAuthor.class)
public interface ArticleRepository extends ArticleRepositoryCustom, JpaRepository<Article, Long> {
}
