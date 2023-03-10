# 02/15/23
Today we continued to work on setting up our Pgadmin. We managed to get our containers running (except for my ghi), as well as working on our project setup. We managed to get our services running. As a team we worked on creating our tables, to fit our needs, for our 2 databases.

# 02/16/23
I began to work on and finished creating a post create endpoint, with the creation of the post repository class and postIn and postOut schema. I also established a "dummy" users table that would allow me to test out my endpoint that would eventually reference the "real" users table in the usersdb. I reorganized the table order we had in our migrations file, as the tables that would be foreign key referenced in the post table, needed to be created before being refereced.


# 02/17/23
Today I worked on creating a delete user endpoint. I had to figure out how to deal with merge commit issues, specifically when the feature branch was behind several commits from the main branch. After solving this issue, I commited and merged my feature branch. I also approved a teammates merge.

# 02/18/23
I started and finished a Get one post endpoint, complete with the appropriate router. Implemented an Error class to provide error messages. Created two helper functions for creating post responses.

# 02/20/23
Fixed up delete endpoint (proper error message outpoint). Manages to fix my ghi container, in preparation for working on front end. Helped out teammates sort through some errors.

# 02/21/23
Worked on updating get_all and get_one endpoints to better match our needs, since Dean wanted to get users.name and games.title, based on the user_id and game_id that we had. I created a new schema to match these outputs, and remade our queries, using left joins matching the tables. Started working on Login form FE section, mainly read through documentation attempting to understand it.


# 02/22/23
Continued to work on Login form FE, Created my bootstrapInput function in order to reduce the number of changes needed. Went through authentication documentation to understand it better. I started to realize how to implement the authentication built in functions to sign in. Setup my username and password states, in order to capture the user input value as it is typed. Ran into rerouting issues, with token value.

# 02/23/23
I focused on working the front-end login form. I managed to get the reroute navigation working accordingly. Set up app.js routes, and began testing my feature. I implemented small changes, added state "reset" lines of code, to set username and password back to an empty string, after form submission. By this point the login-page was complete.

# 02/24/23
Today, I talked with my teammates about what to prioritize, and the sort of deadlines we were looking to set. We planned to have the front-end mainly done by next week. I began working on the post-detail-page, that would provide the user with a better view of a single post selected from the post-list-view, with more details. This page will ultimately provide space for comments, profile info, and create a comment (reach goals) that we plan to implement down the line.

# 02/27/23
I finished working on postDetail page. I had to figure out a way to make a button in the postList page reroute to an appropriate postDetail page, that also sent over data (I needed the specific post's Id that was clicked) in order to display the appropriate details. After getting it to work, I set up the users id to be incorporated into the endpoint fetch call, in order to get back a single posts details. I then started working on implementing some nice CSS and Jsx code, in order to change the look of my page.

# 02/28/23
I began adding authentication to back-end endpoints, in order to ensure user is logged in and has an appropriate token in order to have access to certain features on the front-end. This meant that user posts would only appear when logged in, as well as post details. I protected all of the posts endpoints, except for one I believe. I then helped dean figure out how to protect his endpoints properly. I worked on fixing some CSS issues for postDetail page, as well as minor issues in the login page.

# 03/01/23
I created a create_games endpoint and router, that would allow us to create a "game" instance using the FastAPI docs page, as it would allow us to create the necessary data more quickly, while working on our code.
# 03/02/23
I began reworking my unit test, after realizing that changing the endpoints to require authorization, meant that we also had to spoof the autorization aspect of it, to pass the test. I began troubleshooting, and learned how to bypass the authorization with googling and documentation.

# 03/03/23
Began deployment, worked through documentation with team.

# 03/06/23
Continued to work on deployment. Deployment entirely setup but running into CORS issues on front-end page.

# 03/07/23
Continued to attempt to fix CORS issues, had multiple SEIR's come in, with no results. Eventually, Tracey came in and managed to solve our problem.

# 03/08/23
Team began working on individual stretch goals. Dean working on comments, Christian on some additional CSS and began working on profile page. I began working on a chat feature using websockets, primarily researched initially. Franky began working on the likes feature. I also helped dean on being able to have a datetime output for schema and query, in order to use with his comments.

# 03/09/23
Continued to work on chat feature. Created new tables, new routers, queries(endpoints), that would be used in front end. Finished back end for now, there is one more table that the functionality is still being worked on.
