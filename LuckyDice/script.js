function Result() {
    // Generate random numbers for dice
    const randNumber1 = Math.floor(Math.random() * 6) + 1;
    const randNumber2 = Math.floor(Math.random() * 6) + 1;
  
    // Set dice images based on random numbers
    const diceImage1 = `images/dice${randNumber1}.png`;
    const diceImage2 = `images/dice${randNumber2}.png`;
  
    const image1 = document.querySelector(".img1");
    const image2 = document.querySelector(".img2");
    
    image1.setAttribute("src", diceImage1);
    image2.setAttribute("src", diceImage2);
  
    const text = document.querySelector('h1');
    
    // Determine the winner and update the display
    if (randNumber1 > randNumber2) {
      text.innerText = 'Player 1 Wins! 👑';
      document.getElementById('player1').innerText = 'Winner 👑';
      document.getElementById('player2').innerText = 'Loser';
    } else if (randNumber1 < randNumber2) {
      text.innerText = '👑 Player 2 Wins!';
      document.getElementById('player2').innerText = 'Winner 👑';
      document.getElementById('player1').innerText = 'Loser';
    } else {
      text.innerText = 'It\'s a Tie! 🎲';
      document.getElementById('player1').innerText = 'Tie';
      document.getElementById('player2').innerText = 'Tie';
    }
}
  
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', function (e) {
e.preventDefault()
location.reload();
});

setTimeout(Result,1000);