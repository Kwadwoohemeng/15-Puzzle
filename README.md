# Creating a “15 Puzzle”

### CSE 264 – Web Systems Programming,

- Due Sunday, Sept 18th, 11:59pm
- No extensions under any circumstances.

### Objective

- To get some experience manipulating a web page through the DOM using Javascript

### Instructions

For Homework 3 you will be creating a web page for playing the 15 Puzzle:
(https://en.wikipedia.org/wiki/15_puzzle). When completed, the puzzle should
look something like this, except that it will be implement as a web page in html.

The puzzle is a 4 x 4 grid which starts out with the numbers 1-15 in it's first 15
cells and it's last cell blank. Clicking the Reset button at any time will return the
puzzle to this state. Clicking the Scramble button will (somewhat randomly)
rearrange the numbers in the grid. The user solves the puzzle by moving the
numbers back into the starting position, one at a time. This is done by clicking a
number adjacent to the blank square. This will cause the selected cell and the
blank cell to change places. In this manner the player can rearrange the cells in
the grid. When the cells are moved back into their original positions (ie. the
puzzle is solved), the grid turns Yellow (or some other color of your choice) to
indicate that the puzzle is solved.

A demo site can be found here https://15puzzle.netlify.app/
Note: This is meant to give you an idea of what the game looks like. What you doing in this assignment is not exactly the same as the demo site.

### Steps

1. Clone your repository to local computer.

2. Inside your html page, include an html comment at the top of the page with your name, email, class number and assignment number/name. Include the standard elements in an html page (html, head, title, body, div to contain the whole page). Commit and push to github.

3. Place a 4 x 4 table on the page along with two buttons approx. as shown above. You may either hard code the table on the html page or generate it using Javascript.

4. Place the numbers 1-15 in the table as shown above, centered, with the approx. padding shown.

5. Attach an event handler to the onclick event of each cell in the grid that:

- Checks to see if the clicked cell is adjacent to the blank cell.
- If it isn’t, do nothing.
- If it is, swap the contents of the new cells.
- If you swap the two cells then check to see if the puzzle is solved. If
  it is, then turn the grid yellow.

6. Create and attach an event handler to the Reset button that restores the grid to the state it is in step 4 (with non-yellow cells). Commit and push to github.

7. Create and attach an event handler to the Scramble button that scrambles the numbers in the grid. NB (Latin nota bene ‘note well’): You cannot just randomly rearrange the numbers in the grid, since the solution can only be reached from some initial arrangements and not from others. You might be creating a puzzle that can’t be solved! I would recommend that you simulate the clicking of cells in the grid to scramble it in the same way you click them to solve it. Commit and push to github.

8. Test the program:

- Run the puzzle
- Click the Scramble button to scramble the grid.
- Solve the puzzle by clicking the squares.
- Make sure the puzzle turns yellow when solved.
- Make sure the Reset button resets the puzzle to its start state.

9. Commit and push your final version to the github repository.
