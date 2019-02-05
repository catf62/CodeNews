package com.codeclan.CodeNewsBE.CodeNewsBE;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository.ArticleRepository;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository.AuthorRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Date;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CodeNewsBeApplicationTests {

	@Autowired
	AuthorRepository authorRepository;

	@Autowired
	ArticleRepository articleRepository;


	Author author;

	@Before
	public void setUp() {
		author = new Author("steve", "dave", "string", "url");
		authorRepository.save(author);
		Article article = new Article("Crazy news!", "Big news as local junior developers go on murder spree.","placeholderURL", "01/01/2018", author);
		articleRepository.save(article);
	}

	@Test
	public void contextLoads() {
	}

	@Test
	public void canStoreAuthor() {
		assertEquals("steve", authorRepository.getOne(1L).getName());
//		assertEquals(2, authorRepository.findAll().size());

	}

	@Test
	public void canStoreArticle() {
		assertEquals("Cats", articleRepository.getOne(1L).getKeywords().get(0));
		assertEquals("steve", articleRepository.getOne(1L).getAuthor().getName());
	}
}

