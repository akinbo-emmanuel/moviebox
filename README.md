# MovieBox (Community)

MovieBox (Community) is a movie discovery web application that allows users to search for movies, view movie details, and save their favorite movies. This project is built using React and Tailwind CSS, and it consumes movie data from the TMDB API.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a list of the top 10 movies on the homepage.
- Search for movies by title.
- View movie details, including title, release date, runtime, and overview.
- Save favorite movies.
- Error handling for API failures.
- Responsive and visually appealing design.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.
- TMDB API Key (Get one from [TMDB API](https://www.themoviedb.org/documentation/api))

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/akinbo-emmanuel/moviebox-community.git
   ```

2. Navigate to the project directory:

   ```bash
   cd moviebox-community
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:

   ```plaintext
   VITE_TMDB_API_KEY=your-api-key-here
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to `http://localhost:5173` to access the MovieBox (Community) application.

## API Integration

- This project uses the TMDB API to fetch movie data.
- API documentation: [TMDB API Documentation](https://www.themoviedb.org/documentation/api)
- API endpoints used:
  - Fetch movie details by ID: `https://api.themoviedb.org/3/movie/{movie_id}`

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a pull request on the main repository.

## License

This project is licensed under the MIT License.