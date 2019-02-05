package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository;


import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class ArticleRepositoryImpl implements ArticleRepositoryCustom{

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Article> findArticlesByKeyword(String searchedWord) {
        List<Article> results = null;

        Session session = entityManager.unwrap(Session.class);

        Criteria cr = session.createCriteria(Article.class);
        cr.createAlias("keywords", "keywordsAlias");
        cr.add(Restrictions.eq("keywordsAlias.word", searchedWord));

        try {
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }

        return results;
    }

}
