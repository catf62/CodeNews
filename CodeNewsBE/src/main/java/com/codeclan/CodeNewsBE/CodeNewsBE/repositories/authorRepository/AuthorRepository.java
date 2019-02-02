package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends AuthorRepositoryCustom, JpaRepository<Author, Long> {
}
