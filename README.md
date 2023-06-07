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
  * [User Stories](#user-stories)
    + [Customer Side:](#Customer-side-)
    + [Developer Side:](#Developer-side-)
  * [Design Choices](#design-choices)
    + [Colors](#Colors)
    + [Fonts](#Fonts)
    + [Animations and Transitions](#animations-and-transitions)
  * [Design Elements](#design-elements)
  * [Wireframes](#wireframes)
    + [Features](#features)
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
  * [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
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

![image](https://user-images.githubusercontent.com/114284732/206725918-884081b0-e7fa-4fc0-98dd-5a8da419346b.png)

### Fonts

Font style and size were selected to ensure the best readability for the user.

### Animations and Transitions
Buttons are getting bigger and highlighted when hovered, getting smaller when pressed down:

![image](readme content files/Bigger button.PNG)


## Design Elements

The fully responsive design of each card (HTML and CSS built, no images to improve responsiveness):
![image](https://user-images.githubusercontent.com/114284732/206766312-3012e465-8ccf-440e-9b7f-d2eca159c70c.png)


### Features
## Implemented Features
- Easy to navigate, simple one-page design with semantic construction - header, main section, and footer:

    ![image]()
    
-  Score counter:

    ![image]()
    
- Correct / Wrong answers shown, once choice is made, for learning purposes:

    ![image]()
    
- Dynamic game interface with hiding buttons:

    ![image]()
 

- Animated buttons:

    ![image]()



## Future Features
The plan for the next updates is to add virtual currency and implement a betting system for each deal.

# Testing
The site was tested in 4 browsers for Windows PC - Chrome, Firefox, Edge, and Opera. No issues were detected. Chrome browser test passed - no issues detected. Mobile browsers tested - Chrome, Firefox, Samsung browser - no issues detected. The site is fully responsive for every size device.
My friends helped me a lot with game testing so I can assure you that the current version is free of bugs, responsive, and it's a lot of fun to play.

## Validation Testing
### CSS Validation
No errors were found in the style.css file:
![image]()

### HTML Validation
No errors in the index.html file:
![image](https://user-images.githubusercontent.com/114284732/206774814-4e8872a2-edce-4ae7-952a-26f9eb1be7bb.png)


### Javascript Validation
No errors in JS files (script.js and constants.js combined):
![image](https://user-images.githubusercontent.com/114284732/206775994-9b1b0249-6386-485f-bb50-06617539817c.png)

## Compatibility and Responsive Testing
As the biggest market share in Ireland belongs to Chrome and Safari, I focused on these two browsers and didn't forget about others too.


iPhone 8:

![image](https://user-images.githubusercontent.com/114284732/206804226-12118111-4084-4352-bf50-202c55f79f3d.png)

Ipad Pro 12.9:

![image](https://user-images.githubusercontent.com/114284732/206804368-5e56d308-ba31-4cfa-8789-d0ae23fe9862.png)

Mac:

![image](https://user-images.githubusercontent.com/114284732/206804502-000b2fed-e69b-4e16-840d-6dfe733bb29a.png)


## Manual Testing
https://docs.google.com/spreadsheets/d/17U5ND_qIVSv95PoQ_jnpY4RGTwZ9w-D3pBOQB5yGjtA/edit?usp=sharing

![image](https://user-images.githubusercontent.com/114284732/206879701-2dd1f02e-d479-4d59-9daf-1a348a6988eb.png)

### Defect Tracking
- Fix bug - new game button text overflow with button borders - detected and fixed on 28.11.2022
-

### Defects of Note
The most frustrating bug to find and remove was the situation when the computer was losing the game and didn't take another card (when he clearly could take one more to win).
Also implementing the variable value of Ace (1 or 11) was a nightmare at the beginning and caused a lot of defects.

## Outstanding Defects
This is possible to break the game score if the user goes to local storage files and changes the values stored for something not expected. Need to implement function preventing manipulation with local storage file.

## Accessibility
Mobile version:

![image](https://user-images.githubusercontent.com/114284732/206808309-a7d2fe28-4c0f-48eb-9948-d3ac24146164.png)

Desktop version:

![image](https://user-images.githubusercontent.com/114284732/206808378-2d7895de-a9c7-4010-baf2-6e50f3d9aa6f.png)

The accessibility score for mobile devices is 97 points due to the warning for color contrast, however, I've tested the game on multiple devices and the color contrast is ok in my opinion (my testers (and friends :)) agree with me). For the desktop, it's 100. Aria labels and titles are used in this project.

### Keyboard Navigation
The game is keyboard friendly - all navigation tests passed. I've used the focus function to bring focus to key buttons and implemented a function to close modals with any button on the keyboard down.

![ScreenRecorderProject1](https://user-images.githubusercontent.com/114284732/206880887-ca21fc7f-8c07-4584-98b6-c7cc239f44d0.gif)

# Technologies Used
## Languages
- HTML
- CSS
- Java Script

## Frameworks, Libraries & Programs Used
List out the tools used:
- Font Awesome
- GitPod
- GitHub
- Google fonts

# Deployment


## Deploy to GitHub Pages

The site was deployed to GitHub pages:

1. Go to the GitHub EngineBoostGarage repository then open settings:

  ![image](https://user-images.githubusercontent.com/114284732/206722224-6f434a85-67f5-405a-9130-c4515f36903b.png)
    
2. Select pages:
  
  ![image](https://user-images.githubusercontent.com/114284732/206721998-3fbd6628-b6e8-4c34-8713-0451da404950.png)
    
3. Choose a source to deploy from a branch, then select the main branch and save:

  ![image](https://user-images.githubusercontent.com/114284732/206722345-3bda90fc-6b09-456d-b47b-e59ac2525c55.png)
  ![image](https://user-images.githubusercontent.com/114284732/206722519-d912b4a6-7129-487e-bde7-deed4d8ed2e6.png)

## Credits
- https://learn.codeinstitute.net/ - Love Maths project and other lessons
- https://stackoverflow.com/ - code inspirations
- https://www.w3schools.com/ - code inspirations

## Content
- https://www.cs.mcgill.ca/~rwest/wikispeedia/wpcd/wp/b/Blackjack.htm - how to play section

## Media
- https://www.pexels.com - Ace of spades logo img and favicon
- https://fontawesome.com/ - icons
- https://fontjoy.com/ - font pairing
- https://coolors.co/ - colors combination

## Acknowledgments

Big thanks to Malia Havlicek - Code Institute mentor for her ideas and support in this project!
Also, I would like to thank all my friends for live testing the game!


- https://validator.w3.org/ - HTML validator
- https://jigsaw.w3.org/ - CSS validator
- https://jshint.com/ - JS validator
- https://web.dev - performance testing
