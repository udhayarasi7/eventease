# How to Start the Application

## Prerequisites
- Make sure MongoDB is running (local or MongoDB Atlas)
- Node.js installed
- All dependencies installed (`npm install` in both folders)

## Step 1: Set up Backend Environment

1. Navigate to `eventease-backend` folder
2. Create a `.env` file (if it doesn't exist) with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   CLIENT_URL=http://localhost:3000
   ```
   
   **Example for local MongoDB:**
   ```
   MONGO_URI=mongodb://localhost:27017/eventease
   PORT=5000
   CLIENT_URL=http://localhost:3000
   ```
   
   **Example for MongoDB Atlas:**
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventease
   PORT=5000
   CLIENT_URL=http://localhost:3000
   ```

## Step 2: Start Backend Server

Open a terminal/command prompt and run:

```bash
cd eventease-backend
npm run dev
```

You should see:
- ✅ MongoDB connected: ...
- ✅ Server running on port 5000
- ✅ Socket.IO server ready

## Step 3: Start Frontend Server

Open a **NEW** terminal/command prompt and run:

```bash
cd eventease-frontend
npm start
```

The React app will open automatically in your browser at `http://localhost:3000`

## Step 4: Test the Chat Feature

1. **Login/Register**: Use the login page to sign in or create an account
2. **Navigate to Services**: Go to the Services page
3. **Find a Service Provider**: Look for "Dreamscape Photography" or any provider
4. **Click "Book Now"**: This will open the real-time chat interface
5. **Start Chatting**: Type a message and see it appear in real-time!

## Troubleshooting

- **MongoDB Connection Error**: Make sure MongoDB is running and the MONGO_URI in `.env` is correct
- **Port Already in Use**: Change the PORT in `.env` if 5000 is already taken
- **Socket.IO Connection Issues**: Make sure both backend (port 5000) and frontend (port 3000) are running
- **CORS Errors**: Verify CLIENT_URL in backend `.env` matches your frontend URL

