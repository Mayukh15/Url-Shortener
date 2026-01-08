🔗 URL Shortener

A fast, scalable URL Shortening service built using the MERN stack that converts long URLs into short, shareable links and tracks their usage efficiently.

🚀 Features

Generate short URLs instantly

Redirect short links to original long URLs

Automatic unique code generation

MongoDB-based persistent storage

Handles duplicate URLs intelligently

Optimized for fast redirection

REST API based architecture

🛠 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js, Express.js
Database	MongoDB
Others	NanoID / ShortID, Mongoose
📌 API Endpoints
Method	Endpoint	Description
POST	/api/shorten	Create short URL
GET	/:shortId	Redirect to original URL
