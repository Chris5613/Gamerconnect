## 2/15/2023

Today we worked together as a team to resolve issues with setup and worked together to create tables for posts and users. Had to spend a bit of time troubleshooting the pgadmin login and such, but we were able to figure it out. Now we are able to use pgadmin to manage our tables in our database.

## 2/16/2023

Today I worked on building one of my API endpoints, which is the Get All Posts endpoints. I followed along with some of Curtis's lecture in order to be able to understand fully what each line of code is doing. Finished up this endpoint and got it working nicely. I also began working on the poller in order to incorporate our two databases. I thought that this would only be a couple lines of code but is proving to be far more difficult than I thought. I will continue working on this on

## 2/21/2023

Today I worked on the poller for the first half of the day. James did come out and say that two databases isnt very practical in the real world and it was okay for us to have just multiple tables in one database so I dont need to do the poller. Spent the second half of the day creating the updated a post backend endpoints(PUT requests).

## 2/22/2023

Today I worked finishing up the PUT for a post endpoints and then began working on the front end list of posts page. This required some working because my map function wasn't working until I changed my UseState to be a [] instead of a ''.

## 2/23/2023

Today I finished the front end of the post list page. This is our community page and is essential to our application so i spent a bit of time styling it to make sure that it is aesthetically pleasing.

## 2/24/2023

Started the day today by destroying and rebuilding my docker because it was bugging out. I had some trouble getting my compose build to work because I am on Mac OS. Eventually found the fix in the learn where I had to use Linux Default build command. Once that was figure out, I started working on the sign up form for new users to create an account.

## 2/27/2023

Today I continued to work on my sign up form page. Refactoring the CSS and fixing some CORS errors. As well as fixing the form submitting with blank data.

## 2/28/2023

Today I worked on my unit test. My test is for testing the get all posts endpoint. Also worked a bit on the create a post form so that there is a stock image that populates when an image is not provided by the user.

## 3/1/2023

Today I did some pair coding with Gabe on the post detail page. It is a page that allows you to click on a post and see the details of that post. It used some of my code from the post list page so we troubleshot some things together and got it working.

## 3/2/2023

Today I worked on protecting my assigned endpoints. This required going back over the Learn for protecting endpoints and reading some FastAPI docs. I was able to get it figured out though.

## 3/3/2023

Today I worked with the team to change the URLs in react to be dynamic. (using the process.env instead of the localhost hardcoded.) we worked on deployment as a team. This required doing alot of reading of the docs. We still have not got it deployed successfully.

## 3/6/2023

Today we worked on deployment as a team. We still have not got it deployed successfully. We are troubleshooting all our errors but still no luck yet.

## 3/7/2023

Today we worked on deployment as a team. We completely chalked our step 2 and 3 and restarted. This time we went a little bit slower as a team to make sure we didnt miss anything. We had Tracey (SEIR) stop by and troubleshoot with us. The issue was we were missing an s in https. This solved our issued. We are deployed successfully and CORS error free

## 3/8/2023

Today I worked on one of our stretch goals, which is implementing comments onto useres posts. I got the backend working.

## 3/9/2023

Today I continued working on the stretch goal comments front end. Got it working, but am going to need to go back and fix the tables in the db so that there is a user_id and a datetime field. that way I can grab who is making the comment and when they are creating the comment.
