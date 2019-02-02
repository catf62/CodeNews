package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends AuthorRepositoryCustom, JpaRepository<Author, Long> {
}
