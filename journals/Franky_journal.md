## 2/15/2023
Work Today:
Worked together with team to resolve issues with setup and worked together to created tables for posts and users. Everything is set-up, began rewatching Learn videos in order to prepare for backend work.

## 2/16/2023
Work Today:
I had to rewatch lectures on FASTApi to reiterate over some points that I was not fully understanding. I wanted to further build my understanding instead of just copying what makes sense in order to become more proficient for the future when utilizing FASTApi. This will prepare me to finish all my endpoint work this weekend..

My team on the other hand, finished a handful of endpoints, and I am working on the gamers get endpoint.

## 2/21/2023
Work Today: Finished the rest of my endpoints for filtering posts by game and users. Spent the rest of the day looking over auth.

## 2/22/2023
Work Today: Studied some redux, and attempted JWT authentication. My teammate Chris had time so he decided to just finish it, allowing our application to now have user authorization.

## 2/23/2023
Work Today: Finished game dropdown for post view page, and also made lots of progress on post form. Just waiting on the login auth and detail page to integrate into form.

## 2/24/2023
Work Today: Gabe has finished the login form, so I began working on the post form for creating a post. Over the weekend, I was able to finish the post form and submit the merge request. I also fixed my game dropdown today, fixing it so that all posts show when nothing is selected on the dropdown, giving the user the ability to filter the posts to their own leisure.

## 2/27/2023
Work Today: Fixed key error on the postlist by adding keys to every child within the postlist. Helped Gabe out a bit with post detail form, us as a group helped fix some routing issues and worked on the detail page.

## 2/28/2023
Work Today: Designed a logo for our login and sign up page so christian can implement it into the css. Also, I finished my unit test.

## 3/1/2023
Work Today: Did frontend auth protection for both the post form and post list. Helped Gabe in resolving the token issue. Also worked with Christian to fix some linting issues towards the end of the day.

## 3/2/2023
Work Today: Fixed my unit test

## 3/3/2023
Work Today: Provided a fix to christian and gabe for the gitlab file in deployment. Added a cd in the build script, and also removed # from comments of dockerfile in post service. It worked, then our team worked together to change the URLs in react to be dynamic.

## 3/4/2023
Work Today: Fixed the error where our token is unable to be fetched to use any of our webpages on our front end because our pages are protected and https is not supported for our application, so the token url was not working. Changed the element in the docker compose file and now our sign up and login can be properly used since the token is usable on the frontend now. I also fixed navigate issues in our react, where the rerouting after signing up or signing in would reroute our application ontop of itself, ex: "signup/login" would be the rerouted url after signing up when rerouting to login but it is suppose to be just "/login". Also added implementation to my post form to reroute to the post detail page after creating a post.
