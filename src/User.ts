import faker from "faker";
// Remember type definition file for faker (@types)
export class User {
  // name of the user
  name: string;
  // location object with lat and long
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      // The faker library has the return value of lat and long as a string
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
