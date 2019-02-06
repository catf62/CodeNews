package com.codeclan.CodeNewsBE.CodeNewsBE.components;

import com.codeclan.CodeNewsBE.CodeNewsBE.controllers.AuthorController;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Admin;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Article;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Author;
import com.codeclan.CodeNewsBE.CodeNewsBE.models.Keyword;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.adminRepositories.AdminRepository;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.articleRepository.ArticleRepository;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.authorRepository.AuthorRepository;
import com.codeclan.CodeNewsBE.CodeNewsBE.repositories.keywordRepository.KeywordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AuthorRepository authorRepository;

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    KeywordRepository keywordRepository;

    @Autowired
    AdminRepository adminRepository;


    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        String placeholderURL = "https://cdn.shopify.com/s/files/1/1184/9194/products/literary-rubber-duck-1322-p.jpeg?v=1457991497";
        String alexUrl = "https://media.licdn.com/dms/image/C4D03AQHoIovZ_f1yuw/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=_Kfr3J_3r6Y0wJx267iLVA7YPco68-huPGGe7bn-mdY";
        String robUrl = "https://avatars3.githubusercontent.com/u/42409919?s=460&v=4";
        String graemeUrl = "http://bransonswildworld.com/wp-content/uploads/2015/07/axolotl.jpg";

        Author rob = new Author("Robert Augustus Wilson", "Head boy", "good at being a champion", robUrl);
        authorRepository.save(rob);
        Author graeme = new Author("Graeme Topaz Congreve",   "average person", "ace in your face london, mad top champion of winning", graemeUrl );
        authorRepository.save(graeme);
        Author cat = new Author("Cat Ford", "Head Girl", "world champion cartographer", placeholderURL);
        authorRepository.save(cat);
        Author alex = new Author("Alexander St.John Aloysius Clements", "CodeClan Student", "CodeClan student with a degree in Astrophysics, experience of self-employment and growing a successful business.", alexUrl);
        authorRepository.save(alex);


        String dateJan = "15/01/2019";
        String dateFeb = "02/02/2019";
        String dateMar = "20/02/2019";

        String article1Url = "https://codeclan.com/wp-content/uploads/elementor/thumbs/Short-nvqow625m2mbh8vcfbylfjwq682060tgq6t8m2eptu.jpg";
        String article1Headline = "Five year interest-free government loan offers Scottish businesses new digital skills";
        String article1Content = "Small and Medium Enterprises in Scotland can now access a whole range of training from " +
                "CodeClan, thanks to the Scottish government’s Digital Development Loan, which allows businesses to borrow " +
                "from £5,000 – £50,000, interest free, over a period of up to five years." +
                "Our growing programme of short courses, bespoke courses, flagship 16-week Professional Software Development " +
                "(PSD) course and soon to be launched Data Analytics course, are all eligible for the loan, enabling companies " +
                "across Scotland to develop their staff and provide them with valuable new technical skills to improve economic " +
                "productivity and enable growth. " +
                "The Digital Development Loan also opens up new opportunities for organisations to sponsor employees through our " +
                "PSD and Data Analytics courses. Enabling business owners to retain intelligence and avoid losing staff members, " +
                "who may be at risk of redundancy or looking for new career paths within their organisation.";

        String article2Url = "https://codeclan.com/wp-content/uploads/elementor/thumbs/Inverness-banner-nzqg42i4483af68z4y40meifp04hqo9scolw79tqb8.jpg";
        String article2Headline = "Highlands here we come!";
        String article2Content = "At CodeClan, we’ve been busy bridging the digital skills gap along the Forth and the Clyde. " +
                "Our CEO Melinda Matthews-Clarkson explains why the Ness is next! " +
                "When CodeClan was founded back in 2015, our mission was simple: help to close Scotland’s digital skills gap." +
                "We started training our first cohort of students in Edinburgh and we were complemented by an industry that was already " +
                "attempting to address the gap from traditional sources of talent like universities and colleges." +
                "As Scotland’s first (and only) accredited digital skills academy, CodeClan brought something new to the table, transforming " +
                "careers and lives through our immersive, industry-focused training." +
                "We’re rolling out a new 12-week programme that’s been tailored to the needs of the Highlands’ emerging digital" +
                " sector. Our focus is on full-stack web development skills. Students on our new course will go through programming " +
                "fundamentals – including test-driven development (TDD), object-oriented programming (OOP) and databases (SQL) – before " +
                "taking the plunge into JavaScript and web frameworks.";

        String article3Headline = "An app to put charity shops on the map";
        String article3Url = "https://codeclan.com/wp-content/uploads/elementor/thumbs/One-cherry-CC-800x450-o2trw5rgbwnp8rd8qt6cptoz41x8fq8actu12oapts.jpg";
        String article3Content = "Last May, we launched a new initiative to help our students get hands-on work experience while" +
                " giving back to their community. Our instructors created a two-week placement that allows st, Last May, " +
                "we launched a new initiative to help our students get hands-on work experience while giving back to their " +
                "community. Our instructors created a two-week placement that allows st, Last May, we launched a new " +
                "initiative to help our students get hands-on work experience while giving back to their community. Our " +
                "instructors created a two-week placement that allows st" + "Last May, we launched a new initiative to help our students get hands-on work experience while" +
                " giving back to their community. Our instructors created a two-week placement that allows st, Last May, " +
                "we launched a new initiative to help our students get hands-on work experience while giving back to their " +
                "community. Our instructors created a two-week placement that allows st, Last May, we launched a new " +
                "initiative to help our students get hands-on work experience while giving back to their community. Our " +
                "instructors created a two-week placement that allows st";

        String article4Headline = "CodeClan announces partnership with GitHub";
        String article4Content = "There were scenes of delight in streets of Edinburgh as CodeClan announced that" +
                "all of its students would now be guaranteed jobs with GitHub upon graduation. A CodeClan spokesperson " +
                "said, 'this deal makes neither financial or practical sense, but we've got them to agree to it anyway'. " +
                "Upon graduation, all students will now be bound and gagged and put into a shipping container and sent off " +
                "to San Francisco, when asked why the students couldn't travel to their new vocations in a more conventional " +
                "way, the same spokesman replied that it was 'none' of our business.";
        String article4Url = "https://github.githubassets.com/images/modules/logos_page/Octocat.png";


        String article5Headline = "Our 2018 stats are here and we couldn’t be more thrilled";
        String article5Url = "https://codeclan.com/wp-content/uploads/elementor/thumbs/CC-team-2018-2-o0r69dw3hz891ahp8ndmavwf4p0e6pbgpiy8p6t6ps.jpg";
        String article5Content = "We had six cohorts of students graduating in Glasgow and nine in Edinburgh, and we’re " +
                "looking forward to starting with Cohorts E28 and G11 in January 2019. A significant part of growth this year " +
                "was our rollout of staff sponsorship opportunities for employers." +
                "We also celebrated the 500th graduate from our Professional Software Development course, Iona Macbeth." +
                " With a career background in Communications, she has now started her first job in Scotland’s digital technology industry." +
                "205 more CodeClan graduates are out there, working in tech across Scotland and beyond. Their roles include software development, " +
                "testing, support engineering, product management and more." +
                "We won the award for Best Education/Training provider at the ScotlandIS Digital Tech Awards 2018. The Digital " +
                "Technologies Awards celebrate Scotland’s digital industry. And the team were over the moon to pick up this " +
                "award for the second year in a row!" +
                "We sponsored or hosted 16 coding events, clubs and workshops with the aim of supporting and encouraging young " +
                "and underrepresented people to get involved in tech and further education in digital. Events included 10 codebar" +
                " workshops, 5 Coder Dojo clubs and the Girl Guides.";

        String article6Headline = "Welcome to our Commercial Director";
        String article6Url = "https://codeclan.com/wp-content/uploads/elementor/thumbs/Brian-Baglow-740x416-nybwzx690nr4t3frxc2hw3xh3mvcn4v38g195dr7sw.jpg";
        String article6Content = "In August, CodeClan’s leadership team appointed Brian Baglow as our new Commercial Director. He’ll assist our organisation" +
                " to fulfil our goal of creating a new digital talent pipeline, to help Scotland’s industry and economy thrive." +
                "Brian’s role will ensure that CodeClan is working with companies across all of the key industrial sectors, throughout Scotland " +
                "to help address the shortage of digitally skilled staff." +
                "In addition, he’ll support an expanding curriculum, which now offers a growing range of short and bespoke training courses " +
                "which enables companies to up-skill, re-skill and train staff in a broad range of digital skills.";

        String blogHeadline = "CodeClan Week 14";
        String blogContent = "Our final week of teaching has been a veritable whirlwind of new material. On Monday we were " +
                "brought back into the world of JavaScript with a bump. First up was the introduction of ReactJS, a framework " +
                "which massively simplifies the building of a JavaScript web app by the use of annotations (specific labels in " +
                "the code prefaced with the @-symbol) so long as the code is written following certain conventions. With this " +
                "new tool we were able to write over the space of a couple of days several new apps which would formerly have " +
                "taken us considerably longer. Tuesday saw us introducing API links to our apps. There the usual pattern of CodeClan " +
                "learning would have slowed down to make way for a set of consolidation exercises, but this week has been different. " +
                "On Wednesday we were launched into a lab to build a game from one of a set of briefs. The problem was stimulating, but " +
                "ReactJS changes the way a program is structured due to it’s constraints on the data flow. This lead to a deal of confusion " +
                "about where particular parts of the logic should be placed, and while we all achieved the MVP (Minimum Viable Product) " +
                "level of the brief the lab was more challenging than expected. Perhaps in deference to this we were allowed a break from " +
                "homework, with instructions to rest and prepare for the following day’s work. To my mind this was the most exciting day " +
                "of the week, and something I had been looking forward to from the start: the ability to build multiplayer apps. Using a " +
                "library called socket.io we were able to write both the server and client-side apps, with the two communicating via a very " +
                "PubSub-like system. While the naming was different the structure was much the same, with information being published on a " +
                "certain channel by one of the apps and subscribed to by another. The lab for the afternoon was hefty enough to have taken " +
                "up a full day slot, and although my group didn’t finish it we did learn a lot about the way the system should work.";

        String blogUrl = "https://media.licdn.com/dms/image/C4D03AQHoIovZ_f1yuw/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=_Kfr3J_3r6Y0wJx267iLVA7YPco68-huPGGe7bn-mdY";

        String blog2Headline = "CodeClan Weeks 9, 10, and the Christmas Break";
        String blog2Content = "The past couple of weeks at CodeClan have been a little different. On the Thursday of week 8 we " +
                "were given our groups for the JavaScript group project, as well as a selection of briefs. I was placed with two " +
                "other members of my cohort, one of whom I had pair programmed with before. We were given an hour and a half to " +
                "choose our brief. We settled on creating an educational app, and after longer discussion and consideration of learning " +
                "techniques and motivations we decided to present it in the context of a flash card game." +
                "As a group we were very keen to structure our approach. Having decided on our initial plan we constructed a MoSCoW board " +
                "(an abbreviation from Must have, Should have, Could have, and Won't have), and a Kanban board (a workflow visualisation too " +
                "from Agile methodology). We then proceeded to work on wireframe diagrams using the visualisation of the finished app to " +
                "drive our feature development through user experience considerations. Implementing these features required data for the " +
                "cards, which lead us to a long api search and the start of the idea that our code should be generalisable; that is to say it " +
                "should be able to take data on any subject from a range of api’s and render a set of cards with that data for a user to work " +
                "with. With this in mind work progressed on the app. We spoke about the aspects of code we most wanted to improve with, and as a " +
                "result I took the initial lead in the front end aspects of the website while my teammates worked together on the back end. " +
                "By Monday we had put together a basic front end and a functional back end, and were working on coupling the two together. To do " +
                "this we worked as a group, ‘mob’ programming with one ‘driver’ and two ‘navigators’. This approach allowed the team to work at a " +
                "high level of efficiency, as we found that the ‘driver’ would use the opportunity of typing to take a ‘brain break’ while the " +
                "navigators collaborated to solve the problems required by the code.";


        Article article1 = new Article(article1Headline, article1Content, article1Url, dateJan, rob);

        articleRepository.save(article1);

        Article article2 = new Article(article2Headline, article2Content, article2Url, dateFeb, rob);
        articleRepository.save(article2);

        Article article3 = new Article(article3Headline, article3Content, article3Url, dateMar, alex);
        articleRepository.save(article3);

        Article article4 = new Article(article4Headline, article4Content, article4Url, dateJan, graeme);
        articleRepository.save(article4);

        Article article5 = new Article(article5Headline, article5Content, article5Url, dateFeb, cat);
        articleRepository.save(article5);

        Article article6 = new Article(article6Headline, article6Content,article6Url, dateMar, cat);
        articleRepository.save(article6);

        Article blog1 = new Article(blogHeadline, blogContent, blogUrl, "01/02/2019", alex);
        articleRepository.save(blog1);

        Article blog2 = new Article(blog2Headline, blog2Content, blogUrl, "01/01/2019", alex);
        articleRepository.save(blog2);



        Keyword keyword1 = new Keyword("Enterprise", article1);
        Keyword keyword2 = new Keyword("Development", article1);
        Keyword keyword3 = new Keyword("Highlands", article2);
        Keyword keyword4 = new Keyword("Computers", article2);
        Keyword keyword5 = new Keyword("Charity", article3);
        Keyword keyword6 = new Keyword("JavaScript", article3);
        Keyword keyword7 = new Keyword("GitHub", article4);
        Keyword keyword8 = new Keyword("Stats", article5);
        Keyword keyword9 = new Keyword("2018", article5);
        Keyword keyword10 = new Keyword("Awards", article5);
        Keyword keyword11 = new Keyword("Commercial", article6);
        Keyword keyword12 = new Keyword("Computers", article6);
        Keyword blogWord1 = new Keyword("Viking", blog1);
        Keyword blogWord2 = new Keyword("Lush", blog1);
        Keyword blogWord3 = new Keyword("Viking", blog2);
        Keyword blogWord4 = new Keyword("Lush", blog2);

        keywordRepository.save(keyword1);
        keywordRepository.save(keyword2);
        keywordRepository.save(keyword3);
        keywordRepository.save(keyword4);
        keywordRepository.save(keyword5);
        keywordRepository.save(keyword6);
        keywordRepository.save(keyword7);
        keywordRepository.save(keyword8);
        keywordRepository.save(keyword9);
        keywordRepository.save(keyword10);
        keywordRepository.save(keyword11);
        keywordRepository.save(keyword12);
        keywordRepository.save(blogWord1);
        keywordRepository.save(blogWord2);
        keywordRepository.save(blogWord3);
        keywordRepository.save(blogWord4);


        Admin admin = new Admin("Rob Wilson", "codeclan1234");
        adminRepository.save(admin);
    }


}
