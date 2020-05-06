module.exports = `
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    userName: String!
    dob: String!
    gender: String!
    email: String!
    phone: String!
    password: String!
    image_url: String
    loginSessions: [LoginSession]
  }

  type LoginSession {
    _id: ID
    userName: String!
    loginAt: String!
    location: String
    loginToken: String!
    logoutAt: String
  }
  
  type Message{
    message:String
  }

  type LoginError {
    message:String
  }
  
  type LoginToken{
    token:String!
  }
`;
