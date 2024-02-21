# Alpha Group Technical Assessment

## Candidate Name: Anwin Robin
My solution to the Alpha Group assessment consists of a React frontend, Typescript/Node/Express API server and PostgreSQL database. These have been containerised to be run with docker-compose and I will outline how in the instructions below. 

## Local Set Up Instructions
- Pull / download this repo
- Open terminal and change to the project directory 
- We must now create the images for the React app and API server
- Assuming Docker is already installed, navigate to /frontend directory
- Run the following command to build the image for the react app from the Dockerfile
```bash
docker build -t react-app .
```
- Similarly for the API server, navigate to the /backend directory and run this command to build its image
```bash
docker build -t api-server .
```

We run the application using docker-compose with this command
```bash
docker-compose up -d
```

Finally to access the application, navigate to http://localhost:5173/  :)
