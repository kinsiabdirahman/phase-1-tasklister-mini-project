
document.addEventListener("DOMContentLoaded", () => {
    // your code here
  // Timer Increment
  const timer = document.getElementById("counter");
  let count = 0;
  let interval;

  function incrementTimer() {
    count++;
    timer.textContent = count;
  }

  interval = setInterval(incrementTimer, 1000);

  // Manual Increment and Decrement
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");

  plusBtn.addEventListener("click", () => {
    count++;
    timer.textContent = count;
  });

  minusBtn.addEventListener("click", () => {
    if (count > 0) {
      count--;
      timer.textContent = count;
    }
  });

  // "Like" an Individual Number
  const heartBtn = document.getElementById("heart");
  const likesList = document.querySelector(".likes");
  const likes = {};

  heartBtn.addEventListener("click", () => {
    if (likes[count]) {
      likes[count]++;
      const existingLike = document.getElementById(`like-${count}`);
      existingLike.textContent = `${count} has been liked ${likes[count]} times`;
    } else {
      likes[count] = 1;
      const newLike = document.createElement("li");
      newLike.id = `like-${count}`;
      newLike.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(newLike);
    }
  });

  // Pause the Counter
  const pauseBtn = document.getElementById("pause");
  const buttons = document.querySelectorAll("button");
  let paused = false;

  pauseBtn.addEventListener("click", () => {
    if (paused) {
      interval = setInterval(incrementTimer, 1000);
      buttons.forEach((button) => {
        button.disabled = false;
      });
      pauseBtn.textContent = "pause";
      paused = false;
    } else {
      clearInterval(interval);
      buttons.forEach((button) => {
        if (button.id !== "pause") {
          button.disabled = true;
        }
      });
      pauseBtn.textContent = "resume";
      paused = true;
    }
  });

  // Restart the Counter
  const restartBtn = document.getElementById("restart");

  restartBtn.addEventListener("click", () => {
    count = 0;
    timer.textContent = count;
    likesList.innerHTML = "";
    likes = {};
  });

  // Leave Comments
  const commentForm = document.getElementById("comment-form");
  const commentList = document.getElementById("list");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const commentValue = commentInput.value;
    const newComment = document.createElement("li");
    newComment.textContent = commentValue;
    commentList.appendChild(newComment);
    commentInput.value = "";
  });
});
