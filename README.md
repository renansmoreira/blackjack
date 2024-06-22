# Blackjack Game

This repository contains a simple implementation of the classic Blackjack game using Vanilla JavaScript for the frontend and Express.js for the backend.

**Requirements**

- Bash shell to run the commands (also works for Windows CMD and PowerShell if needed)
- Node 20.14.0 (better with NVM)
- Modern browsers such as Chrome 61+, Firefox 60+ and Safari 10.3+

## Features

- **Gameplay**: Play Blackjack against a dealer with basic game rules implemented.
- **Backend**: Utilizes Express.js for API endpoints and game use cases
- **Frontend**: Vanilla JavaScript handles user interaction and game display.

**Game rules**

- The player starts the game with 2 cards faced up
- The dealer starts the game with one hold (card faced down) and one card faced up
- Player wins the game if a blackjack comes out after the game start or after a hit
- Dealer wins the game if he has a blackjack after a player stand
- Highest card points wins if no blackjack is present

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd blackjack-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

   This will start the Express server at http://localhost:3000.

4. **Open the game in your browser**

   Navigate to http://localhost:3000 in your web browser to play the game.

## Project structure

- **root**: Contains all the project config files
- **src**: All the source files to run the game and the house of the main server file `app.js`
- **src/domain**: Contains all the domain objects for the game, AKA the rules
- **src/infra**: Infrastructure file to support the game, like 3rd party libraries (such as database adapters) and mappers
  = **src/public**: Static assets, the game front-end
  = **src/public/ui**: Front-end modules and coordinators to handle the screen changes
  = **src/service**: Project use-cases like the handling the game routines and state
  = **src/test-helpers**: Test utils file to make testing easier

## API docs

| HTTP Verbs | Endpoints  | Action                                                                   |
| ---------- | ---------- | ------------------------------------------------------------------------ |
| POST       | /start     | Start a new game                                                         |
| PUT        | /hit/:id   | Player action to hit a specific game (requires game id path param)       |
| PUT        | /stand/:id | Player action to stand for a specific game (requires game id path param) |
