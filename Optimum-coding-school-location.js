/*
You are currently working together with a local community to build a school teaching children how to code. 
First plans have been made and the community wants to decide on the best location for the coding school. 
In order to make this decision data about the location of students and potential locations is collected.

Problem:
  In order to be able to attract and teach as many students as possible 
  we want to minimize the total traveling distance for potential students. 
  The streets system is organized in a traditional grid system and 
  can only travel horizontally or vertically (not diagonal).

The locations of interested students is given as an array with the first value of each 
entry presenting the x coordinate and the second value presenting the y coordinate:
  let students = [[3,7],[2,2],[14,1], ...];

Potential locations are passed as an array of objects with an unique id, a x and y coordinate:
  let locations = [{id: 1, x: 3, y: 4}, {id: 2, x: 8, y: 2}, ...];

Your task is now to evaluate which of the school locations would be best 
to minimize the distance for all potential students to the school.

The desired output should consist of a string indicating the ID of the best 
suitable location and the x and y coordinates in the following form:
  "The best location is number 1 with the coordinates x = 3 and y = 4"
*/


// Solution

let optimumLocation = function(students, locations) {
  let minDistance = Infinity;
  let { x, y, id } = locations.reduce((best, item) => {
    let { x, y } = item;
    let totalDistance = students.reduce((d, [xs, ys]) => d + Math.abs(xs-x) + Math.abs(ys-y), 0);
    if (totalDistance >= minDistance) return best;
    minDistance = totalDistance;
    return item;
  }, null);
  return `The best location is number ${id} with the coordinates x = ${x} and y = ${y}`;
}

// or

let optimum_Location = function(students, locations){
  let bestdist=Infinity,best=0;
  for (let i=0;i<locations.length;i++){
    let totdist=0,x=locations[i].x,y=locations[i].y;
    for (let j=0;j<students.length;j++){
      totdist+=Math.abs(x-students[j][0]);
      totdist+=Math.abs(y-students[j][1]);
    }
    if (totdist<bestdist){best=i;bestdist=totdist;}
  }
  return 'The best location is number '+locations[best].id+' with the coordinates x = '+locations[best].x+' and y = '+locations[best].y
}