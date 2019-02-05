package com.codeclan.CodeNewsBE.CodeNewsBE.models;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AuthorTest {

    Author author;

    @Before
    public void before(){
        author = new Author("Steve", "head", "biography", "image");
    }

    @Test
    public void getName() {
        assertEquals("Steve", author.getName());
    }

    @Test
    public void getArticles() {
        assertEquals(0, author.getArticles().size());
    }

//    @Test
//    public void addArticle() {
//    }
}