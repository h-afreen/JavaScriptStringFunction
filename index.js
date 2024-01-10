const readline = require('readline');

// Define a function to print a rectangular frame based on user input
function printRectangularFrame() {
    // Create a readline interface for interactive input/output
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Ask the user for input
    rl.question("Please enter a list of strings separated by commas: ", (input) => {
        // Close the readline interface after receiving user input
        rl.close();

        // Check if the user input is empty
        if (!input) {
            console.log("Empty input. Cannot print frame.");
            return;
        }

        // Split the user input into an array of words, removing leading and trailing spaces
        const words = input.split(",").map(word => word.trim());

        // Check if there are no valid words after processing user input
        if (words.length === 0) {
            console.log("No valid words entered. Cannot print frame.");
            return;
        }

        // Calculate the maximum length among the entered words
        const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);

        // Print the top border of the rectangular frame
        console.log("*".repeat(maxLength + 4));

        // Iterate through each word, calculate spaces, and print each line of the frame
        words.forEach(word => {
            const spaces = " ".repeat(maxLength - word.length);
            console.log(`* ${word}${spaces} *`);
        });

        // Print the bottom border of the rectangular frame
        console.log("*".repeat(maxLength + 4));
    });
}

// Example usage: Invoke the function to start the process
printRectangularFrame();
