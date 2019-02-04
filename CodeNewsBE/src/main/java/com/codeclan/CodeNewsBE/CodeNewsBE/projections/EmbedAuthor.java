package com.codeclan.CodeNewsBE.CodeNewsBE.projections;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;
import java.util.Date;

@Projection(name = "embedAuthor", types= Article.class)
public interface EmbedAuthor {
    Long getId();
    String getHeadline();
    String getContent();
    ArrayList<String> getKeywords();
    String getImageUrl();
    Date getDate();
    Author getAuthor();
}
