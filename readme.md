# MOLARA

A mobile web app like lara.ng (but for something else like saving things like "learned/new words" and bookmarking tabs with functionality to save things in an organized manner with folders ). So it also has to be a browser (chrome) extension?

*** P.S - This app is just my imagination at work and trying to test the Javascript skills I've acquired by creating something out of my imagination.**

How do I make it a pop up app that can display above others and can stay on the screen (user can decide if they want it on screen or not)?

Input can be new learned word (be able to add meaning of word.. key value pairs?), A list of something like Books read, movies watched, Books to read etc.. Can even add checklist (in-app of course)

There'll be a general dumping ground for inputs sha and the functionality to be able to move stuff from there into folders.

When saving input, there should be an alert/pop-up to ask user to describe their inputs. So for new learned word for example, you could provide the meaning of the word and for bookmark for e.g, you could provide a name or description for the URL/bookmark. Created folders in Bookmark page and allow moving and re-ordering of bookmarks.

## TASKS

- Get User's input and save to general dumping folder in local storage ✅
- Render the saved inputs.✅
- If input is a url, call a different render function that should wrap an anchor tag around it and render the text as lowercase. Achieve this by checking the first 5 letters of the string inputted and check it is contains http, https or www.
- Implement a more options button for every input. It should have two options; delete and save/move to folder.
- The move to folder button on hover should list all folders in two dropdown options; bookmark folders and custom folders. If any of the options is selected, the folders created for that category will be displayed. (Implement some spin/transition animation thing here).
- Save to folder button should work a bit similar to the "move to folder" button above.
- Functionality to create new folder. Should have two dropdown options; new custom folder and new bookmark folder.
- Bookmark tab functionality for when the app is used as a browser (chrome) extension. Also, for when users input or copy & paste URLs and click on Bookmark tab button.
- If book mark tab is clicked, the bookmark should be saved to bookmarks folder. (show folders, if any, in a dropdown once bookmark button is clicked?).
