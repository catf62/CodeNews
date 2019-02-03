package com.codeclan.CodeNewsBE.CodeNewsBE.projections;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name="embedArticles", types= Author.class)
public interface EmbedArticles {
    Long getId();
    String getName();
    List<Article> getArticles();
}
