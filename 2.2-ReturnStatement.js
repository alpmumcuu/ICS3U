function is_it_the_weekend(day){
    if ((day == 1) || (day == 7)){
        return True;
    }
    else{
        return False;
    }
}

function evNineIble(value){
    if ((value%9==0)&&(value%2==0)){
        return True;
    }
    else{
        return False;
    }
}

function area_circle(r){
    return(Math.PI * r**2)
}

function area_label(r, h){
    return(`Area of the Cylinder's label: ${2 * Math.PI * r * h}`)
}

function area_cylinder(r, h){
    return(`Surface area of the Cylinder: ${area_circle(r)}*2 + ${area_label(r,h)}`)
}

function ghost_watch(polter, wolter)
    if ((polter == "angry" && wolter == "angry") || (polter == "laughing" && wolter == "laughing")){
        return True;
    }
    if ((polter == 0 && wolter == 0) || (polter == 1 && wolter == 1)){
        return True;
    }
    if (polter && wolter){
        return True;
    }