module.exports = `
  type Mutation {
    createUser(
      _id: ID
      firstName: String!
      lastName: String!
      userName: String!
      dob: String!
      gender: String!
      email: String!
      phone: String!
      password: String!
    ): Message

    authenticateUser(userName:String!, password:String!):Authenticate  
    activateUser(token:String!):Message
    generatePasswordToken(email:String!):Message
    changeUserPassword(token:String!,password:String!):Message
  }


`;
