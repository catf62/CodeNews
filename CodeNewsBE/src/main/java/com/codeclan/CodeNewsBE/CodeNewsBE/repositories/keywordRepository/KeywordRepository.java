package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.keywordRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Keyword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KeywordRepository extends JpaRepository<Keyword, Long>, KeywordRepositoryCustom {
}
