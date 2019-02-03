package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.projections.EmbedAuthor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(excerptProjection = EmbedAuthor.class)
public interface AuthorRepository extends AuthorRepositoryCustom, JpaRepository<Author, Long> {
}
