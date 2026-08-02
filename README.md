Habitect – Real Estate Management System

Overview

Habitect is a full-stack Real Estate Management System developed to simplify property discovery and management. The platform allows users to browse available properties, view detailed listings, and book property viewings, while administrators can manage property listings through a dedicated dashboard.

The project was developed using React.js for the frontend and Flask REST API for the backend.

⸻

Features

User Features

* Browse available properties
* View detailed property information
* Search and filter properties
* Book property viewings
* Responsive interface
* User authentication

Admin Features

* Admin Dashboard
* Add new properties
* Update property listings
* Delete properties
* Manage registered users
* View property statistics

⸻

Technologies Used

Frontend

* React.js
* React Router DOM
* Vite
* Tailwind CSS
* Context API
* Axios

Backend

* Flask
* Flask SQLAlchemy
* Flask Migrate
* Flask JWT Extended
* Marshmallow
* Flask Bcrypt
* Flask CORS

Database

* SQLite

Version Control

* Git
* GitHub

⸻

Project Structure

habitect/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── data/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── migrations/
│   ├── app.py
│   ├── config.py
│   ├── extensions.py
│   └── requirements.txt
│
└── README.md

⸻

Installation

Clone Repository

git clone https://github.com/YOUR-USERNAME/habitect.git
cd habitect

⸻

Backend Setup

Navigate into the server folder.

cd server

Create a virtual environment.

pipenv shell

Install dependencies.

pip install -r requirements.txt

Run database migrations.

flask db upgrade

Start the backend.

python app.py

Backend runs on:

http://127.0.0.1:5000

⸻

Frontend Setup

Navigate to the client folder.

cd client

Install dependencies.

npm install

Start the development server.

npm run dev

Frontend runs on:

http://localhost:5173

⸻

API Endpoints

Properties

Method	Endpoint	Description
GET	/properties	Get all properties
GET	/properties/:id	Get single property
POST	/properties	Create property
PUT	/properties/:id	Update property
DELETE	/properties/:id	Delete property

⸻

Database Models

User

* id
* username
* email
* password_hash
* role
* created_at

Property

* id
* title
* description
* price
* location
* bedrooms
* bathrooms
* image_url
* owner_id
* created_at

Appointment

* id
* user_id
* property_id
* date
* time
* status

Contact Message

* id
* name
* email
* message
* created_at

Saved Property

* id
* user_id
* property_id
* created_at

⸻

Authentication

The backend uses JWT (JSON Web Tokens) for authentication.

Protected endpoints require a valid access token.

⸻

Team Members

Person A (Team Leader)

* Project Integration
* React Routing
* Shared Layout
* Navigation
* Footer
* Admin Dashboard UI
* Admin Sidebar
* Frontend-Backend Integration
* GitHub Repository Management

Person B

* Backend Development
* Flask API Development
* SQLAlchemy Models
* Authentication
* Database Integration

Person C

* Frontend Components
* Property Pages
* User Interface Development
* Styling

⸻

Future Improvements

* Property image uploads
* Email notifications
* Google Maps integration
* Advanced property filters
* Favorites system
* Online payments
* Admin analytics dashboard

⸻

License

This project was developed for educational purposes as part of the Moringa School Software Engineering Program.

⸻

Acknowledgements

Special thanks to:

* Moringa School
* React Documentation
* Flask Documentation
* SQLAlchemy Documentation
* Tailwind CSS Documentation
* Vite Documentation