# RESTful API Project

This is a RESTful API project built using the Express.js framework and MongoDB. It provides a set of endpoints for managing a collection of "persons" and allows clients to perform CRUD operations on the collection.

## Endpoints

- `GET /person`: Retrieves a list of all persons in the collection
- `POST /person`: Creates a new person in the collection
- `GET /person/:id`: Retrieves a specific person by ID
- `PUT /person/:id`: Updates a specific person by ID
- `DELETE /person/:id`: Deletes a specific person by ID
- `GET /`: Retrieves information about the API

## Getting started

To run this project, you will need Node.js and MongoDB installed on your machine.

1. Clone the repository: `git clone https://github.com/GiovanniBot/api-rest-cloud`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

## Environment variables

This project uses environment variables to store sensitive information such as the MongoDB connection string. A `.env` file is included in the project, you need to set the `DB_USER` and `DB_PW` environment variables with the correct values.

## Deployment

This project is ready to be deployed to a hosting platform such as Heroku or AWS.

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - The database used
- [Mongoose](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - A fully-managed cloud database service for MongoDB, used for hosting and scaling the database in this project.

## Contributing

If you would like to contribute to this project, please submit a pull request with a detailed explanation of your changes.

## Authors

Giovanni Almeida - Initial work

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.