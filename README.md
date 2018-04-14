# **TAO OREGON**
## 'Trails Association of Oregon'

https://taooregon-dd774.firebaseapp.com/

## April 12, 2018

####  by John Rykken, Chase Bowden, Dave Lewis, Daniel Kiss 

#### This website gives the user access to information about almost (but not quite) every backpacking and hiking trail in Oregon. It has the following fucntionality. It allows users to create accounts with email and password or with Google credientials. It utilizes protected routing, e.g. only logged-in users can access certain pages. On the homepage, it displays all of the trails on a Google map: trails near each other are clustered into single markers. On the Trails page, all 500 trails are listed as well as displayed, again, on a map. The Trails page also has search functionality. It allows the users to search for trails by name, location, or proximity to a given location. E.g. the user can search for trails within X miles of address XYZ. We used the haversine formula and several APIs to enable this. After a search, the trails list and map display the relevent results. Users can click on any trail to see the trail's detail page, which includes a forecast, the location of the trailhead, an air quality index rating, and (perhaps the best feature) a list of trip reports for that trail. Trip reports are simply reports left by users who have recently hiked that trail. A user may also write and post a trip report for a trail. We think that trip reports are the single most useful feature our site has to offer. A similar site, Washington Trails Association, https://www.wta.org/, has trip reports, and we and many of our backpacking friends have found them extremely useful when choosing routes and planning backpacking trips.     

## Planned features and functionality

* Drastically style (while maintaining the simple, accessible user interface) the entire site. 
* Create user dashboard. Allow user to create full profile, post pictures and reviews, and comment and rate helpful trip reports. 
* Flesh out our database of trails so that every single backpacking and hiking trail in Oregon is included. 
* On the trail detail page, include length of trail, difficulty level, whether trail is a day- or multiple-night hike.
* Create feed on homepage listing most recent trail reports. 
* Implement NOAA (National Oceanic and Atmospheric Administration) API, thus allowing far more accurate forecasting. E.g. enable forecasting for precise latitude and longitude coordinates, so that hikers can best plan for extended, remote, and high altitude trips. 
* Build a mobile version of the site. 
* Build a mobile app. 

## Setup

None required. For a live version of the site, visit:

## Built With

* HTML
* CSS, Bootstrap
* Javascript
* Angular
* NPM
* Firebase
* APIs: Google Maps. Open Weather. Google geocode. AQI api. 

## Authors

**John Rykken**
**Chase Bowden**
**Dave Lewis**
**Dan Kiss**

## Contact

_john.rykken@gmail.com_

## License

Licensed under the MIT License.

  <!-- ## Acknowledgments -->

Copyright (c) 2018 **_John Rykken_** **_Chase Bowden_** 

