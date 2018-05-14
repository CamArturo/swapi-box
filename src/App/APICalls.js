export const fetchVehicles = vehicles => {
  try {
    const results = vehicles.map(vehicle => {
      const name = vehicle.name;
      const model = vehicle.model;
      const vehicleClass = vehicle.vehicle_class;
      const passengers = vehicle.passengers;
      return {
        name: name,
        model: model,
        vehicleClass: vehicleClass,
        passengers: passengers,
        favorite: false
      };
    });
    return Promise.all(results);
  } catch (error) {
    this.setState({
      errorStatus: 'Error adding Vehicle'
    });
  }
};


export const fetchCategory = async (category) => {
  try {
    const url = `https://swapi.co/api/${category}/`;
    const response = await fetch(url);
    const categoryUrls = await response.json();
    this.setState({
      [`${category}Urls`]: categoryUrls.results
    });
  } catch (error) {
    this.setState({
      errorStatus: 'Error adding Category'
    });
  }
};