# Animal Quiz

![image](assets/images/jungle.jpg)

# Repository
https://github.com/AdamFiejtek/animals-quiz

# Live Website
https://adamfiejtek.github.io/animals-quiz/

Portfolio Project 2

# Author
Adam Fiejtek

# Project Overview

![image](https://github.com/AdamFiejtek/animals-quiz/blob/59955ebe87e72e165aede7ec713971458cfdd7b7/assets/images/logo.png)

Play this quiz to learn more about Animal Kingdom and English in a funny and easy way!

## Table of Contents
- [Animal Quiz](#animal-quiz)
- [Repository](#repository)
- [Live Website](#live-website)
- [Author](#author)
- [Project Overview](#project-overview)
  * [Table of Contents](#table-of-contents)
- [UX](#ux)
  * [Target Audience](#target-audience)
  * [Project Goals](#project-goals)
  * [Usability](#usability)
    + [Customer Side:](#customer-side)
    + [Developer Side:](#developer-side)
  * [Design Choices](#design-choices)
    + [Colors](#Colors)
    + [Fonts](#Fonts)
    + [Animations and Transitions](#animations-and-transitions)
  * [Design Elements](#design-elements)
  * [Implemented Features](#implemented-features)
  * [Future Features](#future-features)
- [Testing](#testing)
  * [Validation Testing](#validation-testing)
    + [CSS Validation](#css-validation)
    + [HTML Validation](#html-validation)
    + [Javascript Validation](#javascript-validation)
  * [Compatibility and Responsive Testing](#compatibility-and-responsive-testing)
  * [Manual Testing](#manual-testing)
  * [Accessibility](#accessibility)
    + [Keyboard Navigation](#keyboard-navigation)
- [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries-used)
- [Deployment](#deployment)
  * [Deploy to GitHub Pages](#deploy-to-github-pages)
  * [Credits](#credits)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


# UX
## Target Audience
Animal Quiz is a simple, but visually pleasant quiz for old and young alike!

## Project Goals
- Main goal is to develop a simple quiz playable for all ages, which can be used to teach animal names in English
- Appealing look as main target are young players


## Usability
### Customer Side:
- Simple site navigation
- Clear rules 
- Visually attractive content


### Developer Side:
- Naming conventions make reading code easy 
- Code reusability for future expansion / improvements
- Simplicity in design and execution

## Design Choices
### Colors

Contrasting theme idea - wooden table in a warm and sunny room.

![image]()

### Fonts

Font style and size were selected to ensure the best readability for the user.

### Animations and Transitions
Buttons are getting bigger and highlighted when hovered, getting smaller when pressed down:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/a3040084fbd525a7e3f9839ce9226936a2a4b472/readme-content/Bigger-button.PNG)


## Design Elements

The fully responsive design of each card (HTML and CSS built, no images to improve responsiveness):
![image]()


### Features
## Implemented Features
- Easy to navigate, simple one-page design:

    ![image](https://github.com/AdamFiejtek/animals-quiz/blob/763a4eee29937851fa8450890d4927c68a415273/readme-content/Start-page.PNG)
    
-  Score counter:

    ![image](https://github.com/AdamFiejtek/animals-quiz/blob/a9b51f1308c400236dd0c3549c5c2d82cc41a81b/readme-content/Score-percentage.PNG)
    
- Correct / Wrong answers shown, once choice is made, for learning purposes:

    ![image](https://github.com/AdamFiejtek/animals-quiz/blob/f54a982eb315a8b599edb372ca7556c3e959c034/readme-content/Correct-wrong-answer.PNG)
 

- Animated buttons:

    ![image](https://github.com/AdamFiejtek/animals-quiz/blob/6d13f65ca2840d26f9f665fd3b28a2f94936297e/readme-content/Bigger-button.PNG)



## Future Features
The plan for the next updates is to add virtual currency and implement a betting system for each deal.

# Testing
The site was tested in 4 browsers for Windows PC - Chrome, Firefox, Edge, and Opera. No issues were detected. Chrome browser test passed - no issues detected. Mobile browsers tested - Chrome, Firefox, Samsung browser - no issues detected. The site is fully responsive for every size device.
My friends helped me a lot with game testing so I can assure you that the current version is free of bugs, responsive, and it's a lot of fun to play.

## Validation Testing
### CSS Validation
No errors were found in the style.css file:
![image](https://github.com/AdamFiejtek/animals-quiz/blob/a12762a45f658fa3f1a67379132b2d7d915451a0/readme-content/CSS-validator-pass.PNG)

### HTML Validation
Initial errors in the index.html file:
![image](https://github.com/AdamFiejtek/animals-quiz/blob/a12762a45f658fa3f1a67379132b2d7d915451a0/readme-content/HTML-Validator-failure.PNG)

### HTML Validation continued
Errors fixed in the index.html file:
![image](https://github.com/AdamFiejtek/animals-quiz/blob/af7867af91680536a6a9d1af515a12f541cc5715/readme-content/HTM-Checker-No-Errors.PNG)

### Javascript Validation
Issues in JS file:
![image]()

## Compatibility and Responsive Testing
Web app was tested on some of the major browser available on the market, i.e. Chrome, Edge, Firefox, and also on mobile devices - Android and Iphone.


iPhone 11:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/a12762a45f658fa3f1a67379132b2d7d915451a0/readme-content/Iphone-Testing.PNG)

Android:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/60ca71db31045fa0da8c94c61fcd4298d390d13e/readme-content/Android-test.jpeg)

Chrome:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/a12762a45f658fa3f1a67379132b2d7d915451a0/readme-content/Chrome-Testing.PNG)

Firefox:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/a12762a45f658fa3f1a67379132b2d7d915451a0/readme-content/Firefox-Test.PNG)

Edge:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/763a4eee29937851fa8450890d4927c68a415273/readme-content/Bing-test.PNG)


## Manual Testing

Section to complete
![image]()



### Defects of Note
The most frustrating bug to find and remove was the situation when the computer was losing the game and didn't take another card (when he clearly could take one more to win).
Also implementing the variable value of Ace (1 or 11) was a nightmare at the beginning and caused a lot of defects.

## Outstanding Defects
This is possible to break the game score if the user goes to local storage files and changes the values stored for something not expected. Need to implement function preventing manipulation with local storage file.

## Accessibility
Mobile version:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/60ca71db31045fa0da8c94c61fcd4298d390d13e/readme-content/Responsiveness.PNG)

Desktop version:

![image](https://github.com/AdamFiejtek/animals-quiz/blob/a5b25231fc4a09aa0f8546ba53e3f3093d67f082/readme-content/Desktop-version.PNG)

The accessibility score for mobile devices is 97 points due to the warning for color contrast, however, I've tested the game on multiple devices and the color contrast is ok in my opinion (my testers (and friends :)) agree with me). For the desktop, it's 100. Aria labels and titles are used in this project.



# Technologies Used
## Languages
- HTML
- CSS
- Java Script

## Frameworks, Libraries Used
List out the tools used:
- Font Awesome
- GitPod
- GitHub
- Google fonts

# Deployment


## Deploy to GitHub Pages

The site was deployed to GitHub pages:

1. Go to the GitHub Animal Quiz repository then open settings:
    
2. Select pages:
    
3. Choose a source to deploy from a branch, then select the main branch and save:

4. Final view - page successfully deployed

![image](https://github.com/AdamFiejtek/animals-quiz/blob/6d13f65ca2840d26f9f665fd3b28a2f94936297e/readme-content/GitHub%20Deployment.PNG)

## Credits
- https://learn.codeinstitute.net/ - Love Maths project and other lessons
- https://stackoverflow.com/ - code inspirations
- https://www.w3schools.com/ - code inspirations



## Media

- https://fontawesome.com/ - icons
- https://fontjoy.com/ - font pairing
- https://coolors.co/ - colors combination

## Acknowledgments

Big thanks to Krzychu
Also, I would like to thank all my friends for live testing the game!


- https://validator.w3.org/ - HTML validator
- https://jigsaw.w3.org/ - CSS validator
- https://jshint.com/ - JS validator
- https://web.dev - performance testing
