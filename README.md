# Tic-Tac-Toe Game

This is a simple React-based Tic-Tac-Toe game application. It allows two players to take turns marking spaces on a 3x3 grid to try and achieve a winning combination.

## Features

- **Interactive Gameplay**: Players can click on empty squares to make their moves.
- **Winning Detection**: The game detects and displays the winner or a draw.
- **Time Travel**: Players can review previous moves and jump to any point in the game.
- **Sorting Moves**: Players can sort moves in ascending or descending order.
- **Responsive Design**: The game interface is responsive and adapts to different screen sizes.

## Components

### `Square`

Represents an individual square on the game board. It displays the current value (X, O, or empty) and triggers a callback function when clicked.

### `Board`

Manages the game board state, including rendering squares, detecting wins, and handling player moves.

### `Game`

Top-level component that orchestrates the game flow, manages history, and controls the interface.

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your/repository.git
    ```

2. Navigate to the project directory:

    ```
    cd tic-tac-toe
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

1. Start the development server:

    ```
    npm start
    ```

2. Open your web browser and navigate to `http://localhost:3000` to play the game.

## Technologies Used

- React
- HTML/CSS
- JavaScript (ES6+)

## Credits

This project is based on the React Tic-Tac-Toe tutorial available on the [React website](https://react.dev/learn/tutorial-tic-tac-toe).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify and enhance the application as you see fit. Enjoy playing Tic-Tac-Toe! 🎮✨