export class Trail {
  public report: string = '';
  constructor(public dataObject: Object) {
    this.id = dataObject.id;
    this.longitude = dataObject.longitude;
    this.latitude = dataObject.latitude;
    this.name = dataObject.name;
    this.$key = dataObject.$key;
    this.distanceFromPoint = null;
    // public id: number,
    // public name: string,
    // public type: string,
    // public summary: string,
    // public difficulty: string,
    // public stars: number,
    // public starVotes: number,
    // public location: string,
    // public url: string,
    // public imgSqSmall: string,
    // public imgSmall: string,
    // public imgSmallMed: string,
    // public imgMedium: string,
    // public length: number,
    // public ascent: number,
    // public descent: number,
    // public high: number,
    // public low: number,
    // public longitude: number,
    // public latitude: number,
    // public conditionStatus: string,
    // public conditionDetails: string,
    // public conditionDate: string,
  }
}


// "id": 7022261,
// "name": "Trail of Ten Falls",
// "type": "Featured Hike",
// "summary": "A captivating loop that travels to all of the waterfalls in the park.",
// "difficulty": "blue",
// "stars": 4.6,
// "starVotes": 32,
// "location": "Lyons, Oregon",
// "url": "https://www.hikingproject.com/trail/7022261/trail-of-ten-falls",
// "imgSqSmall": "https://cdn-files.apstatic.com/hike/7024024_sqsmall_1476379668.jpg",
// "imgSmall": "https://cdn-files.apstatic.com/hike/7024024_small_1476379668.jpg",
// "imgSmallMed": "https://cdn-files.apstatic.com/hike/7024024_smallMed_1476379668.jpg",
// "imgMedium": "https://cdn-files.apstatic.com/hike/7024024_medium_1476379668.jpg",
// "length": 7.8,
// "ascent": 1095,
// "descent": -1094,
// "high": 1667,
// "low": 1136,
// "longitude": -122.6557,
// "latitude": 44.8776,
// "conditionStatus": "All Clear",
// "conditionDetails": "Some Mud - Crowded",
// "conditionDate": "2018-04-01 10:07:41"
