# MovieFinder
CRUD application for the movies database system
## API Details
#### API 1: localhost:5000/movies-detail
     -> method : POST
     -> body : {
                    "movieName": "Test-Low",
                    "movieRating": 6,
                    "releasedDate":  "2022-12-24T00:00:00Z",
                    "directorName": "Saurabh"
                }
     -> Time: 151 ms
     -> Description : To add movie details.
     
 #### API 2 localhost:5000/movies-detail
     -> method : GET
     -> Time: 117 ms
     -> To get all movies detail.
     
#### API 3 localhost:5000/movies-detail
     -> method : GET
     -> Time: 117 ms
     -> To get all movies detail.
     
#### API 4 localhost:5000/movies-detail/:movieID
     -> method : DELETE
     -> params : movieID{_id of the object}
     -> Time: 83 ms
     -> Description : To delete movie details using ID.

#### API 5: localhost:5000/movies-detail/above-seven
     -> method : GET
     -> Time: 72 ms
     -> Description : To filter the movies whose rating is more than 7..
     
#### API 6: localhost:5000/movies-detail/director/:directorName
     -> method : GET
     -> Time: 326 ms
     -> Description : To filter the movies on the basis of the Director’s name.

## Table/Collection for the Database
![image](https://user-images.githubusercontent.com/102714192/209464410-f5e78229-27a7-403e-9762-7112b7c379f6.png)

