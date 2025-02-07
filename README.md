# HNG12 Public API

## Overview
This project is a simple public API built for the **HNG12 Internship Program**. It returns the following information in JSON format:
- Your registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

The API is built using **Node.js** with **Express** and **CORS**, and it is deployed to a publicly accessible endpoint.

---

## Features
- **Public API Endpoint**: Accessible via a public URL.
- **JSON Response**: Returns data in a structured JSON format.
- **CORS Support**: Handles Cross-Origin Resource Sharing (CORS) appropriately.
- **Deployed on Render**: Hosted on a cloud platform for public access.

---

## API Endpoint
The API is accessible at the following endpoint:
```
https://hng12-api.onrender.com/api/info
```

### Example Response
```json
{
  "email": "your-email@domain.com",
  "timestamp": "2023-10-05T12:34:56.789Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

---

## Technologies Used
- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Render**: Cloud platform for deployment.

---

## How to Use
1. **Access the API**:
   - Visit the API endpoint in your browser or use a tool like Postman:
     ```
     https://hng12-api.onrender.com/api/info
     ```

2. **View the Response**:
   - The API will return a JSON object containing:
     - Your registered email address.
     - The current timestamp.
     - The GitHub URL of the project.

---

## Local Setup
If you want to run the API locally, follow these steps:

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

4. **Test the API**:
   - Open your browser and visit:
     ```
     http://localhost:3000/api/info
     ```

---

## Deployment
The API is deployed on **Render**. To deploy your own version:

1. **Create a GitHub Repository**:
   - Push your code to a GitHub repository.

2. **Sign Up on Render**:
   - Go to [Render](https://render.com/) and create a free account.

3. **Create a New Web Service**:
   - Connect your GitHub repository.
   - Configure the build and start commands:
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`

4. **Deploy**:
   - Render will automatically build and deploy your API.

---

## File Structure
```
hng12-api/
├── server.js          # Main API server file
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation
└── .gitignore         # Files to ignore in Git
```

---

## Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Author
Samuel Edu  
https://github.com/DevalSam

---

## Acknowledgments
- **HNG Internship Program** for providing this opportunity.
- **Render** for free hosting.

---

Enjoy using the API! 🚀
