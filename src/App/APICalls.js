const fetchVehicles = vehicles => {
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

export default fetchVehicles;