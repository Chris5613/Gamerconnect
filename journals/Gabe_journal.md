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
Worked on updating get_all and get_one endpoints to better match our needs, since Dean wanted to get users.name and games.title, based on the user_id and game_id that we had. I created a new schema to match these outputs, and remade out queries, using left joins matching the tables. Started working on Login form FE section.


# 2/22/23
Continued to work on Login form FE,
