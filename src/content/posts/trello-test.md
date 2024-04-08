---
template: blog-post
title: Automatic Testing of trello website
slug: /testing trello
date: 2024-04-08
githubLink:
description: 

Automatic testing of a Trello website was conducted using the WebdriverIO framework, with a focus on key functionalities: logging in to the website, adding a card and list,changing web site visibility and removing the border. The testing process was enhanced through refactoring and the implementation of the Page Object Model (POM).

Using WebdriverIO, automated tests were developed to simulate user interactions with the Trello website. The testing scripts utilized various commands and assertions provided by WebdriverIO to validate the behavior of the website.

The Page Object Model was employed to improve the structure and maintainability of the testing code. Each page of the Trello website was represented by a corresponding Page Object, encapsulating the elements and actions relevant to that page. This modular approach facilitated code reuse, enhanced readability, and simplified maintenance of the test suite.

For the specific functionalities tested, the automated scripts navigated to the Trello login page, entered valid credentials, and verified successful login. Subsequently, they added a new card and list to the Trello board, ensuring that the elements were created and displayed correctly. Finally, the scripts interacted with the user interface to remove the border from a designated element, confirming the removal of the border through assertions.

By leveraging the capabilities of WebdriverIO and adopting the Page Object Model, the automated testing of the Trello website was streamlined and made more robust. This approach enabled efficient validation of critical functionalities, enhancing the overall quality and reliability of the Trello web application.

Tools and technologies:
1.Test written in Java script
1. WebdriverIO framework
2. Mocha and Chai framework
3. Page object model
4. Continous integration with Jenkins
5. Spec reporters: Spec reporter and HTML Reporter
6. Quality Gates : EsLint, Prettier 
7. Integration Cucumber with WDIO

featuredImage: /assets/trello-testing.jpg
---





