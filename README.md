# Restaurant Passport Back-End

**base URL for this project is:** https://bw-restaurant-pass.herokuapp.com/

### Endpoints

## City GET requests

**1. GET all cities:** https://bw-restaurant-pass.herokuapp.com/api/cities
```
[
  {
  id: 1,
  name: "Chicago"
  },
  {
  id: 2,
  name: "New York"
  },
  {
  id: 3,
  name: "Los Angeles"
  }
]
```
**2. GET city by ID:** https://bw-restaurant-pass.herokuapp.com/api/cities/1
```
{
  id: 1,
  name: "Chicago"
}
```

## Restaurant GET requests

**3. GET all restaurants:** https://bw-restaurant-pass.herokuapp.com/api/cities/all/rests

**4. GET restaurant by ID:** https://bw-restaurant-pass.herokuapp.com/api/cities/restaurants/1
```
{
  id: 1,
  name: "Chicago Dog House",
  address: "816 W Fullerton Ave",
  city: "Chicago",
  zip: "60614",
  phone: "(773)248-3647",
  website: "chicagodoghouse.com",
  rating: 5,
  notes: "Great Chicago style hot dogs",
  stamped: 1,
  city_id: 1
}
```

## Restaurant DELETE request 

**DELETE restaurant:** https://bw-restaurant-pass.herokuapp.com/api/cities/restaurants/:id
```
{
  "message": "Deleted Restaurant Successfully",
  "count": 1
}
```

## City POST request

**5. POST city:** https://bw-restaurant-pass.herokuapp.com/api/cities/
```
{
	"name": "Detriot"
}
```

## Restaurant POST request

**6. POST restaurant:**  https://bw-restaurant-pass.herokuapp.com/api/cities/restaurants/
```
{
  "name": "Chi Diner",
  "address": "Chinatown",
  "city": "Long Island",
  "zip": "644444",
  "phone": "(771)552-5555",
  "website": "chidiner.com",
  "rating": 3,
  "notes": "Authentic chinese cuisine",
  "stamped": 1,
	"city_id": 2
}
```

## Login/Register Endpoints
**As of now, user will get a access token after LOGGING in. Will work on getting a token after registering.**

**7. Register:** https://bw-restaurant-pass.herokuapp.com/api/auth/register
```
{
	"username": "jessy",
	"password": "password",
	"name": "Jessica Martinez",
	"city": "Chicago",
	"email": "jessicamartinez@gmail.com"
}
```

**8. Login:** https://bw-restaurant-pass.herokuapp.com/api/auth/login
```
{
	"username": "jessy",
	"password": "password"
}
```

## User Endpoints

**9. GET all users:** https://bw-restaurant-pass.herokuapp.com/api/users
```
[
  {
    "id": 1,
    "username": "clos",
    "name": "Carlos",
    "email": "carlos@gmail.com",
    "city": "Chicago"
  },
  {
    "id": 2,
    "username": "scott",
    "name": "Scott",
    "email": "scott@gmail.com",
    "city": "New York"
  },
  {
    "id": 3,
    "username": "alston",
    "name": "Alston",
    "email": "alston@gmail.com",
    "city": "Los Angeles"
  }
]
```

**10. GET user by ID:** https://bw-restaurant-pass.herokuapp.com/api/users
```
{
  "id": 1,
  "username": "clos",
  "password": "carlos123",
  "name": "Carlos",
  "city": "Chicago",
  "email": "carlos@gmail.com"
}
```

**11. GET user restaurants by userID:** https://bw-restaurant-pass.herokuapp.com/api/userrest/1
```
[
  {
    "name": "Chicago Dog House",
    "city": "Chicago"
  }
]
```







