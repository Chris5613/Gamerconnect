# GamerConnect

![Context Map](docs/images/home%20page%20gamerconnect.png)

https://gamerconnect.gitlab.io/module3-project-gamma/

## About

### Team Members

- Franky Jiang
- Christian Wu
- Gabe Aranda
- Dean Davidson

### Description

We are a forum for gamers everywhere and anywhere. We are targetting gamers who need a community to play games with. Gamers can, through creating an account and choosing a specific game, create a post and garner a community to interact with.

### Target Audience

Our target audience are users that play video games. As the popularity of gaming has been skyrocketing throughout the recent years, we decided to provide a website or forum where gamers can meet one another. Through our website, gamers can now create a post looking for a friend to play with, or even share opinions on current events. Unlike a gaming reddit forum, our website is solely for games, which attracts only like-minded individuals which makes it easier to build a more close-knit community.

## Design

- [API Design](docs/API.md)
- [Frontend Design](docs/Frontend.md)

## Functionality

- Gamers can sign up for an account by clicking 'get started'
- Gamers can log into their account through login page
- Users can look at information about the developers by scrolling to the bottom of the main home page
- Once logged in, user will be redirected to a posts page where they are able to see all the posts created by other gamers
- User can use the dropdown feauture to filter the page of posts to a specific game
- User can click the 'create post' button and create a post for other users to see
- User can click 'post detail' to look at detailed view of a post
- User can logout by clicking the dropdown on the top right of the screen

## How to initialize the project

1. Clone the repository locally
2. Cd into the repository folder locally
3. Run docker volume create pg-admin
4. Run docker volume create postgres-data
5. Run docker compose build
6. Run docker compose up
7. Run 'docker exec -it module3-project-gamma-posts-service-1 bash' or go into the docker container for the posts-service on docker-desktop and go to the terminal
8. Type and run -> python -m migrations up
9. Exit the container and prepare to not touch grass ever again as you make new friends
