----------USER STORIES-----------
-As a user I want the site to look simple and put the focus on the images I have to select.
-As a user I don't want to see repeated photos
-As a user I want...
-As a user I want...
-STRETCH: As a user I want some relaxing music playing in the background because I hate planes.
-STRETCH: As a user I want to be able to suggest products to Bus Mall.
----------------------------------

----------PROBLEM DOMAIN----------
-I need to create a site that will present pictures to the user and allow them to select which one they prefer the most.
-I need all pictures to show up the same size.
-This selection should be recorded and saved for later so I can tell which pictures were most popular.
-Once a user selects the picture I want new ones to be generated that don't repeat the priors.
-This should repeat 25 times.
-Then I want to see all of the results of the voting.
----------------------------------

----------TECHNICAL REQUIREMENTS----------
-Generate 3 random images from the image file
-Make the images show up as the same size
-Allow user to click on one of the three images
-Track/Record that click and refresh with 3 more images
-No repeats of the 3 images from directly before
-Create a constructor that creates an object associated with each image and has the minimum properties of:
  (1) its file path
  (2) the number of times it has been clicked
  (3) the number of times it has been shown
  (4) a text string that can be used as an ID in HTML
-After 25 selections have been made, turn off event listeners (to prevent additional voting)
  + Display a list of the products and their vote tally.
------------------------------------------
