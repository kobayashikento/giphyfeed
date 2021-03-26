**Breaking the project into steps.**
1. Evaluation
2. Preparing/Learning
3. Planning/Designing
4. Coding 

**1. Evaluation**
<br> Question to myself: What is the purpose of this project? How do I seperate myself from other candidates.  
1. To show that I can create a web page that fetches data using Giphy API. 
2. To show that I am best suited for the position.
  <br>1. How do I show this? 
        <br> a) Since the existing system uses Ember, the most important aspect would be to be able to code in Ember.
        <br> b) Another important trait would be to be able to make animations in Ember as stated in the guidelines. 
3. Upon reading the web SDK for Giphy and the implementation via Code-pen, coding the page shouldnt take more than 4 hours.  

Conclusion: Need to spend some time learning Ember.

**2. Preparing/Learning**
<br>Learning Ember, key notes and comments will be left below for my future reference. 
<br>While learning Ember, also consider the best practices for scaleable products. Which is to break components to their most elementary elements as much as possible.
<br><br>**Noteable CLI commands** 
1. ember generate route ____  -> route handles all the data that is being sent to the component via "models()"
2. ember generate component ____

<br><br>**How ember handles promises** - "In a route's model() method, you return whatever data you want to make available to the template. If you need to fetch data asynchronously, the model() method supports any library that uses JavaScript Promises."
<br><br>**Handling events in the COMPONENTS** - "To handle this function call you need to modify the people-list component file to add the function to be called. In the component, add an actions object with a showPerson function that alerts the first argument."
<br><br>**Core concepts** ![ember_core_concepts](https://guides.emberjs.com/images/ember-core-concepts/ember-core-concepts.png/?raw=true)
