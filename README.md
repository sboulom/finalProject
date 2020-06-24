#  The Beer Book 
    
Contributors:  
abautista3712 | https://github.com/abautista3712  
nickrayj45 | https://github.com/nickrayj45  
rfilkin | https://github.com/rfilkin  
sboulom | https://github.com/sboulom  
    
![npm](https://img.shields.io/npm/v/fs) ![npm](https://img.shields.io/npm/v/inquirer) ![npm](https://img.shields.io/npm/v/axios)
    
## Description
    
 The Beer Book is a lightweight, minimal solution for beer drinkers of all levels to keep track of which beers one likes and which they don't. The application centers around saving/collecting beer cards, which contain the name and detailed information of one particular beer. The Beer Book is separated into three main pages:
 
### (1) User Profile
![userProfile](https://user-images.githubusercontent.com/58578177/85484502-cf323380-b57b-11ea-8374-8a302e8529f7.PNG)
On this page, the user can see their collection of saved beer cards.
   
### (2) Browse Beers
![browseBeers](https://user-images.githubusercontent.com/58578177/85484976-b4ac8a00-b57c-11ea-9d45-d47be32cb57d.PNG)
The user can save a beer card to their User Profile by choosing from a collection of 1000+ beer cards populated with information from BreweryDB API. 

### (3) Custom Beer
![customBeer](https://user-images.githubusercontent.com/58578177/85485076-e7568280-b57c-11ea-9305-e47048ae0474.PNG)
If the user cannot find a beer they would like to add from the Browse Beers Page, the user has the option of creating a new custom card with their own user-generated information and then save it to their User Profile.  

The app manages different users by using Passport.js and had standard Register and Sign-In pages:

#### Register
![register](https://user-images.githubusercontent.com/58578177/85485250-300e3b80-b57d-11ea-9d73-6ddebb82d194.PNG)

#### Sign-In
![signIn](https://user-images.githubusercontent.com/58578177/85485259-37cde000-b57d-11ea-844a-6ca1dcdc5702.PNG)

    

    
## Table of Contents
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Questions](#questions)
    

    
## Installation
    
To install necessary dependencies, run the following command on the server level:
    
```
    
npm install
    
```
Note: It is important to run 'npm install' instead of 'npm i' because the latter will not install client dependencies.

    
## Usage
    
Accessible via: https://floating-tor-57469.herokuapp.com/
    
1) Install dependencies (see installation section above).  
2) Create a .env file on the server level.  
3) Inside .env add the line: 
```
MONGODB_URI="mongodb://dbtest:dbtest123@ds0132206.mlab.com:13206/heroku_w4qkxp75" 
```
This will allow you to demo the deployed app using the MongoDB test user.
    

    
## License
    
None
    

    
## Contributing
    
Contact the dev team for more information.
    

    
## Questions
    
If you have any questions about this repo, open an issue or contact the development team directly:  
<img src="https://avatars2.githubusercontent.com/u/58578177?s=64&v=4" alt="avatarAB" style="border-radius: 16px" width="15" />[Abelard Bautista] abelardbautista@gmail.com  
<img src="https://avatars2.githubusercontent.com/u/57788706?s=64&v=4" alt="avatarNJ" style="border-radius: 16px" width="15" />[Nick Jaquez] nrjaquez@gmail.com  
<img src="https://avatars2.githubusercontent.com/u/12621320?s=64&v=4" alt="avatarRF" style="border-radius: 16px" width="15" />[Robert Filkin] rfilkin17@gmail.com  
<img src="https://avatars2.githubusercontent.com/u/57572182?s=64&v=4" alt="avatarSB" style="border-radius: 16px" width="15" />[Steven Boulom] sboulom@gmail.com  

# Team Beer
For our final group project, we wanted to come up with a beer book where you can learn about different style of beers and which one fits your pallet the best. When you register with our application, you will be able to browse beers and then add them to your profile page. Hope you enjoy!

![Screenshot (225)](https://user-images.githubusercontent.com/57572182/84853689-9f7faa80-b014-11ea-83da-bd2e9740544d.png)
![Screenshot (226)](https://user-images.githubusercontent.com/57572182/84853694-a0184100-b014-11ea-881a-4cbc086e77bc.png)
![Screenshot (228)](https://user-images.githubusercontent.com/57572182/84853696-a0184100-b014-11ea-8cb9-a954c5426b3d.png)


