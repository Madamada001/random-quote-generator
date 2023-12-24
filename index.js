const randomQuotes = [
  `"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine."`,
  `"Your time is limited, don't waste it living someone else's life."`,
  `"The only way to do great work is to love what you do."`,
  `"In the middle of every difficulty lies opportunity."`,
  `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
  `"You are never too old to set another goal or to dream a new dream."`,
  `"The future belongs to those who believe in the beauty of their dreams."`,
  `"The only limit to our realization of tomorrow will be our doubts of today."`,
  `"The only person you are destined to become is the person you decide to be."`,
  `"You don't have to be perfect to be amazing."`,
  `"Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine."`,
  `"Your potential is limitless. Trust in your abilities and reach for the stars."`,
  `"Every challenge you face is an opportunity to grow stronger. Keep pushing forward."`,
  `"Don't be afraid to take risks; that's where the magic happens."`,
  `"You have the power to turn your dreams into reality. Keep working toward them."`,
  `"In the midst of adversity, you discover your true strength. Keep going."`,
  `"Success is not final, failure is not fatal: It's the courage to continue that counts."`,
  `"Embrace change as a chance for growth and new opportunities."`,
  `"Your journey may be tough, but your resilience is tougher."`,
  `"The only way to do great work is to love what you do. Follow your passions."`,
  `"Life's challenges are lessons in disguise. Learn from them and keep moving forward."`,
  `"Believe in the person you are becoming, and never stop striving for greatness."`,
  `"You are the author of your own story. Make it an inspiring one."`,
  `"Small steps in the right direction lead to big achievements."`,
  `"Obstacles are detours in the right direction. Keep going."`,
  `"The world is full of possibilities waiting for you to explore."`,
  `"Success begins with a single step. Take that step today."`,
  `"Your determination can move mountains. Keep pushing."`,
  `"You have a unique gift to offer the world. Share it with confidence."`,
  `"Hardships can't break you; they make you stronger."`,
  `"Your potential is like a seed. Nurture it, and it will flourish."`,
  `"Believe in your dreams, and they will become your reality."`,
  `"Challenges are opportunities in disguise. Embrace them."`,
  `"Each day is a new chance to make a difference in your life and others'.",`,
  `"Your journey is unique, and it's worth every step."`,
  `"Doubt may try to creep in, but don't let it define you."`,
  `"You are stronger than you realize. Keep proving it to yourself."`,
  `"Your goals are within reach. Keep reaching for them."`,
  `"The path to success is paved with determination and resilience."`,
  `"You have the power to shape your destiny. Make it remarkable."`,
  `"Every setback is a setup for a comeback. Keep going."`,
  `"Your journey is an adventure. Enjoy the ride."`,
  `"You are a force to be reckoned with. Keep shining."`,
  `"Success is the result of perseverance and belief in yourself."`,
  `"Your potential is like a star; it shines brightest in the darkest times."`,
  `"Believe in the power of your dreams, and they will come true."`,
  `"Your journey is a testament to your strength and resilience."`,
  `"Doubt may knock, but don't let it in. Keep your faith in yourself."`,
  `"You are capable of achieving greatness. Keep striving."`,
  `"Remember, the world belongs to those who believe in the beauty of their dreams."`,
];

const displayMessage = document.getElementById("messageDisplay");
const myButton = document.getElementById("myButton");

function selectMessage() {
  const randomIndex = Math.floor(Math.random() * randomQuotes.length);
  return randomQuotes.splice(randomIndex, 1)[0];
}

function generateMessage() {
  const displayedMessage = selectMessage();
  displayMessage.textContent = displayedMessage;
  if (randomQuotes.length === 0) {
    displayMessage.textContent =
      'No additional messages are currently accessible. For this reason you can just "Give up on your dreams and die."';

    setTimeout(() => {
      displayMessage.textContent =
        "Joking aside, feel free to click or tap on the text at the top of this page if you'd like to chat!";
      myButton.disabled = true;
    }, 8000);
  }
}
