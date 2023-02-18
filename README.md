# File Metadata Microservice

This is a microservice application that retrieves metadata of uploaded files. It is built with Node.js and uses the Express framework.

## Endpoints

- `GET /`: serves the home page with a form for uploading a file.
- `POST /api/fileanalyse`: retrieves the metadata of an uploaded file and returns it to the user in JSON format.

For example, if a user uploads a file named `my-file.txt` with MIME type `text/plain `and a size of `1024 bytes`, the JSON object returned by the endpoint would look like this:

```
{
  "name": "my-file.txt",
  "type": "text/plain",
  "size": 1024
}
```

These endpoints are simple but effective for demonstrating the basic functionality of a microservice. They allow a user to upload a file and retrieve its metadata without having to install any additional software or dependencies.

## Installation

1. Clone this repository or download the source code.

```
git clone https://github.com/kafwe/filemetadata-microservice.git

cd filemetadata-microservice
```

2. Build Docker image of the app

```
docker build -t filemetadata-microservice .
```

3. Start a container from the image

```
docker run -p 3000:3000 filemetadata-microservice
```

The API is now running on http://localhost:3000. You can test the API by visiting http://localhost:3000 in your browser or using a tool such as Postman.

## Acknowledgements

freeCodeCamp.org for the [project prompt](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice).
