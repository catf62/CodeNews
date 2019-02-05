package com.codeclan.CodeNewsBE.CodeNewsBE.projections;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Keyword;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Projection(name = "embedAuthor", types= Article.class)
public interface EmbedAuthor {
    Long getId();
    String getHeadline();
    String getContent();
    List<Keyword> getKeywords();
    String getImageUrl();
    String getDatePosted();
    Author getAuthor();
}
