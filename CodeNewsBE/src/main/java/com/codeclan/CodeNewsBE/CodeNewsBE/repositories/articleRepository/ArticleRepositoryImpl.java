package com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository;

import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import org.hibernate.Criteria;
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
    public List<Article> getArticlesByKeyword(String desiredKeyword) {
        List<Article> result = null;

        Session session = entityManager.unwrap(Session.class);
        Criteria cr = session.createCriteria(Article.class);
        cr.add(Restrictions.eq("keywords", desiredKeyword));
        try {
            result = cr.list();
        } catch (Exception ex){
            ex.printStackTrace();
        }

        return result;
    }

}
