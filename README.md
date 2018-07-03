# JavaScript Password Generator Lab

## Objectives

* Use JavaScript to create random, secure passwords on request
* Use DOM manipulation to display secure passwords on click

## Background

On the modern web, protecting our private data is of critical
importance, as there are many nefarious parties interested in gaining access
and using our information for their own gain. The main defense we have against
these threats is to use secure and varied passwords for the many sites we use.
Unfortunately, many of us don't follow the best practices when it comes to
coming up with unique passwords.

For example, we use the same password on multiple sites, use simple passwords
so we won't forget them, or use passwords that reference personal information.
All three of these examples leave us prone to hacking. A hacker
might be able to crack a poorly secured website, get your account details and
email, and then test those out on other sites; they might just try to force
their way in using tables of common passwords; or, they could use your publicly
available data and/or social engineering tricks to find potential words you
would use. Those tagged photos you posted of you and Fluffy at the beach? Well,
`fluffy`, `fluffy123`, `F1uffy`, and every similar variation were just added to
a list of potential passwords for your account.

But we're savvy JavaScript developers! From now on, all of our passwords are
going to be unique and hard to crack, right? No more birthdates or digits from
our old phone numbers, and definitely no mention of Fluffy. Instead, if we
want to maintain good security we should be coming up with long, complex, and
seemingly random passwords. In this lab, we'll be doing just that! Instead of
having to think up a long combination of characters, we can use JavaScript to
generate them for us at will until we find one we like.

## Instructions

Your task in this lab is to build a page, that lets a user choose the password
length they would like via a form and, upon submission, displays a new, complex
password.

1. Build a form that lets a user set a password length. This form should have two
inputs, one for entering password length, and one submit button
2. Write the password creation logic so that uppercase and lowercase letters,
numbers and symbols are used in **every** password generated. Seeing as there
are four requirements, all generated passwords will have to be at least 4
characters long.
3. Display a generated password on the page

Some guidance is provided in the paragraphs below, but ultimately, it is up to
you to decide how to code the logic for password creation. The tests for this
lab will be looking at the HTML to check if the passwords created meet the
criteria we've set, not the process you've written for password creation.

#### Building a Form

The opening and closing `<form>` tags are provided in `index.html` to start.
This form should have just two input elements, one for entering the length of
the password, and the other for submitting the form. Make sure to add an
event listener in `index.js` to listen to the `submit` form event.

#### Writing the Password Generator Code

There are a number of ways to go about creating a randomized password. The key
here is to make sure that each randomized password:

* Has at least one lowercase letter - [abcdefghijklmnopqrstuvwxyz]
* Has at least one uppercase letter - [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
* Has at least one number - [0123456789]
* Has at least one special character - [ !#$%&()\*+,-./:;<=>?@[\\]^\_\{|}~]
* Is the length requested by the user
* Is unique compared to recently generated passwords

Since you _must_ have at least one lowercase and one uppercase letter, one
number and one special character, any password shorter than four digits will
not pass the tests.

#### Displaying a Password on the Page

Once the form is submitted, the resulting password should be displayed within
the `<output>` tags provided on the page.

#### Suggested Workflow

You can approach this problem in any way you choose, but as a suggestion,
consider breaking down the problem into discrete parts. Each part can be
written as its a separate, testable function, that are called in a set order
from within another function. Make sure to actively use logging and debugging
as you go! Run `learn` to run the included tests.
