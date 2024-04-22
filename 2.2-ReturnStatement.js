function is_it_the_weekend(day){
    
    if (day === 1 || day === 7){
        return true;
    }
   
    else {
        return false;
    }
}

function evNineIble(value){
   
    if ((value%9==0)&&(value%2==0)){
        return true;
    }

    else {
        return false;
    }
}

function area_circle(r){
    return(`The area of the circle is: ${Math.PI * r**2} units^2`);
}

function area_label(r, h){
    return(`Area of the Cylinder's label: ${2 * Math.PI * r * h} units^2`);
}


function area_cylinder(r, h){
    return `Surface area of the Cylinder: ${(2 * area_circle(r)) + (area_label(r,h))}`;
}

function ghost_watch(polter, wolter){

    if ((polter == "angry" && wolter == "angry") || (polter == "laughing" && wolter == "laughing")){
        return true;
    }
    
    else if ((polter == 0 && wolter == 0) || (polter == 1 && wolter == 1)){
        return true;
    }

    else if (polter && wolter){
        return true;
    }
    else {
        return false;
    }
    
}
//Testing
console.log(is_it_the_weekend(1))
console.log(evNineIble(36))
console.log(area_circle(7))
console.log(area_label(9, 5))
console.log(area_cylinder(7, 2))
console.log(ghost_watch("angry", "laughing"))