package com.codeclan.CodeNewsBE.CodeNewsBE;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository.AuthorRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CodeNewsBeApplicationTests {

	@Autowired
	AuthorRepository authorRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canStoreAuthor() {
		Author author = new Author("steve");
		authorRepository.save(author);
		assertEquals("steve", authorRepository.getOne(1L).getName());

	}
}

