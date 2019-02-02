package com.codeclan.CodeNewsBE.CodeNewsBE.models;

import javax.persistence.*;

@Entity
@Table(name = "authors")

public class Author {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
}
