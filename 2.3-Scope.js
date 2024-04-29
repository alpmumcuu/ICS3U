console.log(hotWater());

function hotWater() {
  let waterTemp = "cold";
  if (waterBoilSwitch(waterTemp) == false){
    waterBoilSwitch(waterTemp);
  }
  return waterTemp;
}

function waterBoilSwitch(waterTemp){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}