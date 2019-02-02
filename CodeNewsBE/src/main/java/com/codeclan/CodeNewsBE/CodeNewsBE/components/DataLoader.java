package com.codeclan.CodeNewsBE.CodeNewsBE.components;

import com.codeclan.CodeNewsBE.CodeNewsBE.controllers.AuthorController;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository.ArticleRepository;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;


    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        Author rob = new Author("Rob");
        authorRepository.save(rob);
        Author graeme = new Author("Graeme");
        authorRepository.save(graeme);


        ArrayList<String> keywords = new ArrayList<>();
        keywords.add("Cats");
        keywords.add("Hello");


        Article article1 = new Article("Crazy news!", "Big news as local junior developers go on murder spree.",  keywords,"placeholderURL", new Date(2018-12-25), rob);
        articleRepository.save(article1);

        Article article2 = new Article("Mad news!", "Small news as local junior developers go on murder spree.",  keywords,"placeholderURL", new Date(2018-12-25), rob);
        articleRepository.save(article2);

        Article article3 = new Article("Rob's Haircut!", "Big news as Rob gets a haircut.",  keywords,"placeholderURL", new Date(2018-12-25), graeme);
        articleRepository.save(article3);

        Article article4 = new Article("Cat's Haircut!", "Huge news as Cat gets a haircut.",  keywords,"placeholderURL", new Date(2018-12-25), graeme);
        articleRepository.save(article4);


    }
}
