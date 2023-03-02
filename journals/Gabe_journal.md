# 2/15/23
Today we continued to work on setting up our Pgadmin. We managed to get our containers running (except for my ghi), as well as working on our project setup. We managed to get our services running. As a team we worked on creating our tables, to fit our needs, for our 2 databases.

# 2/16/23
I began to work on and finished creating a post create endpoint, with the creation of the post repository class and postIn and postOut schema. I also established a "dummy" users table that would allow me to test out my endpoint that would eventually reference the "real" users table in the usersdb. I reorganized the table order we had in our migrations file, as the tables that would be foreign key referenced in the post table, needed to be created before being refereced.


# 2/17/23
Today I worked on creating a delete user endpoint. I had to figure out how to deal with merge commit issues, specifically when the feature branch was behind several commits from the main branch. After solving this issue, I commited and merged my feature branch. I also approved a teammates merge.

# 2/18/23
I started and finished a Get one post endpoint, complete with the appropriate router. Implemented an Error class to provide error messages. Created two helper functions for creating post responses.

# 2/20/23
Fixed up delete endpoint (proper error message outpoint). Manages to fix my ghi container, in preparation for working on front end. Helped out teammates sort through some errors.

# 2/21/23
Worked on updating get_all and get_one endpoints to better match our needs, since Dean wanted to get users.name and games.title, based on the user_id and game_id that we had. I created a new schema to match these outputs, and remade our queries, using left joins matching the tables. Started working on Login form FE section, mainly read through documentation attempting to understand it.


# 2/22/23
Continued to work on Login form FE, Created my bootstrapInput function in order to reduce the number of changes needed. Went through authentication documentation to understand it better. I started to realize how to implement the authentication built in functions to sign in. Setup my username and password states, in order to capture the user input value as it is typed. Ran into rerouting issues, with token value.

# 2/23/23
I focused on working the front-end login form. I managed to get the reroute navigation working accordingly. Set up app.js routes, and began testing my feature. I implemented small changes, added state "reset" lines of code, to set username and password back to an empty string, after form submission. By this point the login-page was complete.

# 2/24/23
Today, I talked with my teammates about what to prioritize, and the sort of deadlines we were looking to set. We planned to have the front-end mainly done by next week. I began working on the post-detail-page, that would provide the user with a better view of a single post selected from the post-list-view, with more details. This page will ultimately provide space for comments (reach goal) that we plan to implement down the line.

# 2/27/23
I finished working on postDetail page. I had to figure out a way to make a button in the postList page reroute to an appropriate postDetail page, that also sent over data (I needed the specific post's Id that was clicked) in order to display the appropriate details. After getting it to work, I set up the users id to be incorporated into the endpoint fetch call, in order to get back a single posts details. I then started working on implementing some nice CSS and Jsx code, in order to change the look of my page.

# 2/28/23
