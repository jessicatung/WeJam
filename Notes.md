# Demonstration

## Presentation Observations

* Preparation is key
* Stop talking over each other

## Next Steps

* Add filtration (stretch goal)

## Overall

* The product demonstrates the basic MVP proposition
* You got maps working, some other teams didn't do that
* Also have a structure for profiles for users

----

# Code Review

## Bootup

Started clean. Yay.

## Interaction

* Works fine.
* Probably need a spinner while the page is loading
* Probably want to differentiate the user who is logged in
* **Need logout**

## Controller

* Seems really clean
* Should get redirected if I try to hit /musicians and there's no musician_id
  in the session

## content_for

Notice that on load, foundation is setting the <title> to foundation-js.  You
can defer the calculation of a variable using `content_for :variable` and thus
fill in "placeholders" in templates already rendered.  This is what's happening
between application.html.erb and welcome/index.html.erb.  Note I "fill in the
placeholder" in the index.
