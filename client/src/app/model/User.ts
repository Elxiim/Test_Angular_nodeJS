export class User {
    userid!: {
        name: String
        value: String
    };
      _id!: string;
      gender!: String;
      name!: {
          title: String
          first: String
          last: String
      };
      location!: {
          street: String
          city: String
          state: String
          postcode: Number
      };
      login!: {
          uuid: String
          username: String
          password: String
          salt: String
          md5: String
          sha1: String
          sha256: String
      };
      dob!: {
          date: String
          age: Number
      };
      email!: String;
      registered!: {
          date: String
          age: Number
      };
      phone!: String;
      cell!: String;
      picture!: {
          large: String
          medium: String
          thumbnail: String
      };
      nat!: String;
}