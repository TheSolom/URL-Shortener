# URL Shortener

A full-stack URL shortening service built with Express.js, MongoDB, and Next.js. This project is part of Maxim Orlov's backend projects collection for developers to practice their skills and build portfolio projects.

![URL Shortener](https://github.com/thesolom/URL-Shortener/blob/main/assets/Home-Page.png 'Home Page')

## 🚀 Features

-   **Shorten URLs**: Convert long URLs into short, manageable links
-   **Redirection**: Navigate to short URLs to be redirected to original destinations
-   **Visit Tracking**: Automatically counts visits for each shortened URL
-   **Analytics**: View visit statistics for any short URL
-   **Custom Frontend**: Fully functional, pre-built Next.js frontend

## 🛠️ Tech Stack

-   **Backend**: Express.js, Node.js
-   **Database**: MongoDB with Mongoose ODM
-   **Frontend**: Next.js (pre-built, ready to use)
-   **URL Generation**: Custom short URL generator with validation

## 📦 Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd url-shortener
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Configure environment variables**

Create `.env` files in both backend and frontend directories:

**Backend (.env):**

```
NODE_ENV=development
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

**Frontend (.env):**

```
API_URL=http://localhost:8000
```

4. **Start the servers**

**Terminal 1 - Backend:**

```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm start
```

## 📋 API Endpoints

| Method | Endpoint             | Description                                                 |
| ------ | -------------------- | ----------------------------------------------------------- |
| POST   | `/api/url`           | Create a new short URL                                      |
| GET    | `/api/url/:id`       | Retrieve a short URL (without incrementing the visit count) |
| GET    | `/api/url/:id/visit` | Redirect short URL, track visit.                            |

## 🧪 Testing

The API documentation is provided as an `openapi.yaml` file. Use the file with tools like:

-   [Swagger](https://editor.swagger.io/)
-   [Hoppscotch](https://hoppscotch.io/)

## 📁 Project Structure

```
URL-Shortener/
├── backend/          # Express.js API server
│   ├── controllers/  # Route controllers
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── utils/        # Helper functions
│   └── app.js        # Express app
├── frontend/         # Next.js application
└── openapi.yaml      # API documentation
```

## 🙏 Acknowledgments

-   Built as part of [Maxim Orlov's Backend Projects](https://maximorlov.com/)
-   Frontend provided by the project template

---

**Happy coding!** ✨
