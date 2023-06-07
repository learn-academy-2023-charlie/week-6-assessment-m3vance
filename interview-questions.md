# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: We could use add_foreign_key and add it to the students migration file. We then need to be sure to pass the changes using rails db:migrate

Researched answer: We need to first generate a migration to add the cohort_id:integer. Then we would add_foreign_key.

2. Which RESTful routes must always be passed params? Why?

Your answer: Put and delete must always be passed the ID param to declare which object will be updated or deleted.

Researched answer: Depending on its usage, get may also require params, such as show or edit.

3. Name three rails generator commands. What is created by each?

Your answer: g model, g migration and g controller. g model will create a model. g migration will create a migration fille and g controller will create a controller.

Researched answer: The foundation for ruby on rails is the MVC pattern. rails g model will create a new model to store data, rails g migration will create a migration file and rails g controller will create a new controller to define methods.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index will show all students

action: "POST" location: /students
create will add a new student

action: "GET" location: /students/new
new will display a new student to add

action: "GET" location: /students/2
show will display the student at 2

action: "GET" location: /students/2/edit
edit will show a the student at 2 to edit

action: "PATCH" location: /students/2
update will update the student at 2

action: "DELETE" location: /students/2
delete will delete the student at 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a person with a very dynamic to-do list, I want to easily be able to create, update and delete my to-do tasks.

As a very organized person, I want the option to be able to organize my tasks into categories.

As a very forgetful person, I want to be able to easily view my previous completed tasks.

As a person that has many tasks, I want to be able to search for and filter my tasks.

As a creative person, I want to be able to color code my tasks and categories. 

As a detail oriented person, I want to be able to adjust font size, font style.

As a detail oriented person, I want to be able to underline, bold and italicize letters. 

As a functional person, I want to be able to add a widget that links directly to my tasks.

As a free user, I want access to creating tasks immediately.

As a pay user, I want to be able to change my background color and select from different themes.
