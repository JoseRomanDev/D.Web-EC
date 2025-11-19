const URL_CAR =  "https://car-data.p.rapidapi.com/cars";
const URL_MAKE = "https://car-data.p.rapidapi.com/cars/makes";

const options = {
	method: 'GET',
	headers: {
        "x-rapidapi-key": "6185a78aa2mshb04ae8991085691p1d093bjsnae8623070f4a",
		'x-rapidapi-host': 'car-data.p.rapidapi.com'
	}
};

export const fetchCarDataMakers = async (make) => {
    const response = await fetch(`${URL_CAR}${make}`, options);
    if(!response.ok){
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}


export const fetchCarMakers = async () => {
    const response = await fetch(URL_MAKE,options);
      if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};