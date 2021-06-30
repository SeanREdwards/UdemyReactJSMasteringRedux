# UdemyReactJSMasteringRedux
This repo serves as a space for my completion of the projects associated with the Udemy Course "ReactJS - Mastering Redux".
The date of my completion of this course is 6/30/2021.

Four projects are contained within:
+ Ageteller
+ SuperSquad
+ RecipeFinder
+ MemeGenerator

It should be noted that some portions of the course are outdated, React has recieved overhauls since initial publication of this course, as has portions of React-Bootstrap. Due to this I had to take some time to make sections of the projects work based on these updates.

Additionally, it seems the API RecipeFinder is built upon (recipepuppy) is no being maintained and no longer available.

Suggested SuperSquad Optional Enhancements:
+ DONE - Hero stats have been listed on both the CharacterList and HeroList respectively
+ DONE - characters have been added to the available hero data: Shazam, Dr.Fate, Dr. Manhattan, The Spectre, Black Canary, Barbara Gordon, Nightwing
+ Add a clear all function to the HeroList. Will need creation of new action type, action creator, and reducer

Suggested RecipeFinder Optional Enhancements:
+ Change the switching of favorited items to be saved in the redux store, so that even on reloads of the same recipe, you can’t re-favorite them.
+ Delete favorite items from your favorite recipes list.
+ Have a banner message appear every item an item is favorited.
+ Add localStorage through this library: https://github.com/15Dkatz/sfcookies, to store favorite items so that they are saved on a reload of the application.

Suggested MemeGenerator Optional Enhancements: