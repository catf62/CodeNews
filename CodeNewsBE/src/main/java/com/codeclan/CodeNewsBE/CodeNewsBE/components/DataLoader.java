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

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        Author cat = new Author("Cat");
        authorRepository.save(cat);
        Author chris = new Author("Chris");
        authorRepository.save(chris);


        ArrayList<String> keywords = new ArrayList<>();
        keywords.add("Cats");
        keywords.add("Hello");

        ArrayList<String> keywords2 = new ArrayList<>();
        keywords2.add("dogs");
        keywords2.add("goodbye");

        ArrayList<String> keywords3 = new ArrayList<>();
        keywords3.add("Cats");
        keywords3.add("cheese");

        ArrayList<String> keywords4 = new ArrayList<>();
        keywords4.add("robins");
        keywords4.add("sheep");

        ArrayList<String> keywords5 = new ArrayList<>();
        keywords5.add("monkey");
        keywords5.add("robins");

        ArrayList<String> keywords6 = new ArrayList<>();
        keywords6.add("chairs");
        keywords6.add("feet");

//        DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
//
//        Date dateJan = null;
//        try {
//            dateJan = sfd.parse("19-01-18");
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//
//        Date dateFeb = null;
//        try {
//            dateFeb = sfd.parse("20-02-18");
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//
//        Date dateMar = null;
//        try {
//            dateMar = sfd.parse("15-03-18");
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }

        String dateJan = "15/01/2018";
        String dateFeb = "15/02/2018";
        String dateMar = "20/02/2018";


        String placeholderURL = "https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p.jpeg?v=1457991497";


        Article article1 = new Article("Crazy news!", "Big news as local junior developers go on murder spree.",  keywords,placeholderURL, dateJan, rob);
        articleRepository.save(article1);

        Article article2 = new Article("Mad news!", "Small news as local junior developers go on murder spree.",  keywords2,"https://images-na.ssl-images-amazon.com/images/I/8166xCVDGnL._SY355_.jpg", dateFeb, rob);
        articleRepository.save(article2);

        Article article3 = new Article("Rob's Haircut!", "Big news as Rob gets a haircut.",  keywords3,"https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p.jpeg?v=1457991497", dateMar, graeme);
        articleRepository.save(article3);

        Article article4 = new Article("Cat's Haircut!", "Huge news as Cat gets a haircut.",  keywords4,placeholderURL, dateJan, graeme);
        articleRepository.save(article4);

        Article article5 = new Article("Cat's Article!", "This is an article by Cat. It is about stuff.",  keywords5,placeholderURL, dateFeb, cat);
        articleRepository.save(article5);

        Article article6 = new Article("Chris's Article!", "Huge news as Chris does an article.",  keywords,placeholderURL, dateMar, chris);
        articleRepository.save(article6);
    }
}
