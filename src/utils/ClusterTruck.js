function UnpackData(payload, callback) {
  let locationData = [];
  for(let i=0; i<payload.length; i++){
    let {name, slug, location, hours} = payload[i];
    locationData.push({
      name: name, 
      slug: slug, 
      location: location,
      hours: hours
    });
  }
  callback(locationData);
}

export function PullLocationData(callback) {
  const URL = "https://api.staging.clustertruck.com/api/kitchens";
  fetch(URL).then(response => {
    response.json().then((data) => UnpackData(data, callback));
  }).catch(err => {
    console.log(`Error pulling ClusterTruckAPI data: ${err}`);
  });
}