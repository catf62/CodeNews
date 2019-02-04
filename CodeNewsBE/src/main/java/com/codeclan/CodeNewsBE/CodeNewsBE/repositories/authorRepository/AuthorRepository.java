package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.projections.EmbedArticles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedArticles.class)
public interface AuthorRepository extends AuthorRepositoryCustom, JpaRepository<Author, Long> {
}
