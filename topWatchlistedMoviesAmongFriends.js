let movies = [{
    "title": "The Shawshank Redemption",
    
    "duration": "PT142M",
    
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    
    "ratings": [],
    
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
    
    },  {
    "title": "The Godfather",
    
    "duration": "PT175M",
    
    "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    
    "ratings": [],
    
    "watchlist": [62289, 66380, 34139, 6146]
    
    },  {
    "title": "The Dark Knight",
    
    "duration": "PT152M",
    
    "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    
    "ratings": [],
    
    "watchlist": [51417, 62289, 6146, 71389, 7001]
    
    },  {
    "title": "Pulp Fiction",
    
    "duration": "PT154M",
    
    "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    
    "ratings": [],
    
    "watchlist": [7001, 9250, 34139, 6146]
    
    },  {
    "title": "Schindler's List",
    
    "duration": "PT195M",
    
    "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    
    "watchlist": [15291, 51417, 7001, 9250, 93707]
    
    }];
    
    let users = [{
    "userId": 15291,
    
    "email": "Constantin_Kuhlman15@yahoo.com",
    
    "friends": [7001, 51417, 62289]
    
    },    {
    "userId": 7001,
    
    "email": "Keven6@gmail.com",
    
    "friends": [15291, 51417, 62289, 66380]
    
    },    {
    "userId": 51417,
    
    "email": "Margaretta82@gmail.com",
    
    "friends": [15291, 7001, 9250]
    
    },    {
    "userId": 62289,
    
    "email": "Marquise.Borer@hotmail.com",
    
    "friends": [15291, 7001]
    
    }];

    function topWatchlistedMoviesAmongFriends(userId) {
        // find user index given userID
        let userRef = 0
        for (let i = 0; i < users.length; i++) {
            if (userId === users[i]["userId"]) {
            userRef = i;
            // console.log(userRef)
            }
        }
        
        // return friends list of user
        friends = (users[userRef]["friends"])
        // console.log(friends)

        // return list of movies watched by friends
        moviesWatched = []
        for (let j=0; j < friends.length; j++) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].watchlist.includes(friends[j])) {
                    moviesWatched.push(movies[i].title);
                }
            }
        }

        // sort moviesWatched
        moviesWatched = moviesWatched.sort()
        // console.log(moviesWatched);

        // count movies in moviesWatched
        let count = {};
        for (let i = 0; i < moviesWatched.length; i++) {
            count[moviesWatched[i]] = 1 + (count[moviesWatched[i]] || 0);
        }
        // console.log(count);

        // sort counted movies by values
        countSorted = Object.keys(count).sort((a,b) => count[b]-count[a]);
        // console.log(countSorted);

        // create array of top 4 movies
        let result = [];
        for (let i = 0;  i < 4; i++) {
            result.push(countSorted[i]);
        };
        
        console.log(result);
    }
    topWatchlistedMoviesAmongFriends(15291);