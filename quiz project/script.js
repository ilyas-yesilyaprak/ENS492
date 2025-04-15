const questions = {
    facebook: [
      {
        question: "On Facebook, you want only your friends to see your posts. Which setting should you use?",
        options: ["Public", "Friends", "Only Me", "Custom"],
        correctAnswer: "Friends",
      },
      {
        question: "How can you limit who sends you friend requests on Facebook?",
        options: ["Use the 'Who can contact me' setting", "Block all friend requests", "Disable your account", "None of the above"],
        correctAnswer: "Use the 'Who can contact me' setting",
      },
      {
        question: "You want to post a photo on Facebook but don't want it to share your location. What should you do?",
        options: ["Disable location services", "Turn on airplane mode", "Remove location metadata", "Both A and C"],
        correctAnswer: "Remove location metadata",
      },
      {
        question: "How can you review what information of yours is visible to others on Facebook?",
        options: ["Check Activity Log", "Use 'View As' feature", "Download your data", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "What does enabling 'Timeline Review' on Facebook accomplish?",
        options: ["Approves posts you're tagged in before they appear", "Hides your timeline", "Deletes old posts", "Blocks spam"],
        correctAnswer: "Approves posts you're tagged in before they appear"
      },
      {
        question: "How to prevent Facebook from using your data for ads?",
        options: ["Disable ad personalization", "Delete your account", "Use Incognito Mode", "Remove all friends"],
        correctAnswer: "Disable ad personalization"
      },
      {
        question: "Where can you manage facial recognition settings on Facebook?",
        options: ["Privacy Settings", "Security Settings", "Account Settings", "News Feed Preferences"],
        correctAnswer: "Privacy Settings"
      }
    ],
    instagram: [
      {
        question: "You are using Instagram and want to prevent certain comments on your post. How can you do this?",
        options: ["Turn on comment filtering", "Block the commenter", "Disable comments on the post", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "You are using Instagram and want to prevent certain comments on your post. How can you do this?",
        options: ["Turn on comment filtering", "Block the commenter", "Disable comments on the post", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "How can adjusting ad preferences on Instagram protect your privacy?",
        options: ["By reducing personalized ads", "By hiding your account", "By blocking all advertisers", "None of the above"],
        correctAnswer: "By reducing personalized ads",
      },
      {
        question: "How to prevent others from sharing your Instagram stories?",
        options: ["Disable 'Allow Sharing'", "Set account to private", "Block users", "Both A and B"],
        correctAnswer: "Both A and B"
      },
      {
        question: "What does 'Restrict' do on Instagram?",
        options: ["Hides comments from others", "Limits interactions without blocking", "Deletes offensive messages", "Reports the user"],
        correctAnswer: "Limits interactions without blocking"
      },
      {
        question: "How to download your Instagram data?",
        options: ["Privacy Settings > Data Download", "Email support", "Story Settings", "It's not possible"],
        correctAnswer: "Privacy Settings > Data Download"
      },
      {
        question: "What's the purpose of 'Close Friends' on Instagram?",
        options: ["Share stories selectively", "Group messaging", "Priority notifications", "Ad-free experience"],
        correctAnswer: "Share stories selectively"
      }
      
    ],
    twitter: [
      {
        question: "How can you reduce targeted ads on X (Twitter)?",
        options: ["Turn off ad personalization", "Clear your cookies", "Stop using the platform", "Unfollow ad accounts"],
        correctAnswer: "Turn off ad personalization",
      },
      {
        question: "On Platform X, you want only your friends to see your posts. Which setting should you use?",
        options: ["Public", "Friends", "Only Me", "Custom"],
        correctAnswer: "Friends",
      },
      {
        question: "How do you make your tweets private on X (Twitter)?",
        options: ["Set your account to private", "Delete your tweets", "Block all followers", "None of the above"],
        correctAnswer: "Set your account to private",
      },
      {
        question: "What does enabling 'Protect your Tweets' accomplish?",
        options: ["Makes tweets private", "Encrypts messages", "Hides likes", "Disables retweets"],
        correctAnswer: "Makes tweets private"
      },
      {
        question: "How to review Twitter/X ad preferences?",
        options: ["Settings > Privacy > Ads", "Profile menu", "Direct Messages", "Tweet analytics"],
        correctAnswer: "Settings > Privacy > Ads"
      },
      {
        question: "What's the difference between mute and block?",
        options: ["Mute hides content, block prevents interaction", "Both do the same", "Mute deletes messages", "Block reports users"],
        correctAnswer: "Mute hides content, block prevents interaction"
      },
      {
        question: "How to make your Twitter/X Direct Messages private?",
        options: ["Allow messages from followers only", "Disable DMs completely", "Use encryption", "Delete message history"],
        correctAnswer: "Allow messages from followers only"
      }
    ],
    linkedin: [
      {
        question: "If you set your LinkedIn profile to 'Public,' what could happen?",
        options: ["Anyone can view your profile", "Your email may be exposed", "You receive more spam messages", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "How to hide your LinkedIn connections list?",
        options: ["Settings > Visibility > Connections", "Delete connections", "Make profile private", "Disable account"],
        correctAnswer: "Settings > Visibility > Connections"
      },
      {
        question: "What happens when you turn off 'Share profile updates'?",
        options: ["Hides profile changes from network", "Deletes your profile", "Blocks recruiters", "Disables notifications"],
        correctAnswer: "Hides profile changes from network"
      },
      {
        question: "How to stop LinkedIn from using your data for ads?",
        options: ["Adjust ad preferences", "Delete account", "Clear browser cookies", "Opt-out in Privacy Settings"],
        correctAnswer: "Opt-out in Privacy Settings"
      },
      {
        question: "What's the purpose of 'Profile Viewing Options'?",
        options: ["Control who sees your viewing activity", "Increase profile views", "Track competitors", "Disable analytics"],
        correctAnswer: "Control who sees your viewing activity"
      }
    ],
    tiktok: [
      {
        question: "While using TikTok, an app asks for access to your account information. What should you check before granting access?",
        options: ["The app's reviews", "The permissions requested", "The developer's credibility", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "On TikTok, you notice unauthorized access to your account. What should you do first?",
        options: ["Change your password", "Contact support", "Enable two-factor authentication", "Delete the app"],
        correctAnswer: "Change your password",
      },
      {
        question: "How to make your TikTok account private?",
        options: ["Settings > Privacy > Private Account", "Delete videos", "Block all users", "Disable comments"],
        correctAnswer: "Settings > Privacy > Private Account"
      },
      {
        question: "What does 'Download Your Data' feature provide?",
        options: ["All your TikTok activity history", "Only videos", "Ad preferences", "Payment receipts"],
        correctAnswer: "All your TikTok activity history"
      },
      {
        question: "How to restrict Duet/Stitch permissions on TikTok?",
        options: ["Video Settings > Duet/Stitch permissions", "Block users", "Disable creativity tools", "Delete account"],
        correctAnswer: "Video Settings > Duet/Stitch permissions"
      },
      {
        question: "What happens when you block someone on TikTok?",
        options: ["They can't view/interact with your content", "They get notified", "Your videos are deleted", "Both A and B"],
        correctAnswer: "They can't view/interact with your content"
      }
    ],
    snapchat: [
      {
        question: "What does Ghost Mode on Snapchat do?",
        options: ["Makes your profile invisible to friends", "Stops location sharing", "Hides your stories", "Deletes your account"],
        correctAnswer: "Stops location sharing",
      },
      {
        question: "A friend shares your location on Snapchat without your consent. What's the best action?",
        options: ["Enable Ghost Mode", "Remove the friend", "Report the incident", "Both A and C"],
        correctAnswer: "Both A and C",
      },
      {
        question: "How to set Snapchat Stories to 'Friends Only'?",
        options: ["Story Settings > Custom > Friends", "Block non-friends", "Use Ghost Mode", "Delete story"],
        correctAnswer: "Story Settings > Custom > Friends"
      },
      {
        question: "What does 'Who Can See My Location' control?",
        options: ["Map visibility", "Story duration", "Chat availability", "Ad preferences"],
        correctAnswer: "Map visibility"
      },
      {
        question: "How to access Snapchat's data download feature?",
        options: ["Settings > My Data", "Email support", "Story settings", "It's unavailable"],
        correctAnswer: "Settings > My Data"
      },
      {
        question: "What prevents others from screenshotting your Snap?",
        options: ["Nothing - you get notified", "Disable screenshots in settings", "Use filters", "Block the user"],
        correctAnswer: "Nothing - you get notified"
      }
    ]
  };
  let currentQuestionIndex = 0;
  let score = 0;
  let platformQuestions = [];
  let selectedPlatformsNames = [];  // For result display
  
  // DOM Elements
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackContainer = document.getElementById("feedback-container");
  const scoreContainer = document.getElementById("score-container");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  const currentQuestionElement = document.getElementById("current-question");
  const totalQuestionsElement = document.getElementById("total-questions");
  
  function startQuiz() {
    showPlatformSelection();
  }
  
  function showPlatformSelection() {
    questionText.textContent = "Select the social media platforms you use:";
    optionsContainer.innerHTML = "";
  
    const platforms = Object.keys(questions);
    platforms.forEach(platform => {
      const label = document.createElement("label");
      label.style.display = "block";
      label.innerHTML = `<input type="checkbox" value="${platform}"> ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
      optionsContainer.appendChild(label);
    });
  
    const submitButton = document.createElement("button");
    submitButton.classList.add("start-quiz-button");
    submitButton.textContent = "Start Quiz";
    submitButton.addEventListener("click", () => {
      const selected = Array.from(optionsContainer.querySelectorAll('input:checked')).map(e => e.value);
      if (selected.length > 0) {
        selectPlatforms(selected);
      }
    });
    optionsContainer.appendChild(submitButton);
  }
  
  function selectPlatforms(selectedPlatforms) {
    selectedPlatformsNames = selectedPlatforms.map(p => p.charAt(0).toUpperCase() + p.slice(1));
    platformQuestions = selectedPlatforms.flatMap(p => questions[p]);
    platformQuestions = shuffleArray(platformQuestions);
    totalQuestionsElement.textContent = platformQuestions.length;
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = platformQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
  
    shuffledOptions.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
    });
  
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    updateProgressBar();
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = platformQuestions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll("button");
  
    buttons.forEach(button => {
      if (button.textContent === currentQuestion.correctAnswer) {
        button.classList.add("correct");
      }
      if (button.textContent === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
        button.classList.add("incorrect");
      }
      button.disabled = true;
    });
  
    if (selectedOption === currentQuestion.correctAnswer) {
      feedbackContainer.textContent = "Correct! Well done.";
      score++;
    } else {
      feedbackContainer.textContent = `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`;
    }
  
    nextButton.style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < platformQuestions.length) {
      showQuestion();
      feedbackContainer.textContent = "";
      nextButton.style.display = "none";
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    const percentageScore = (score / platformQuestions.length) * 100;
    questionText.textContent = `Quiz Over! Your score is ${score} out of ${platformQuestions.length}.`;
    feedbackContainer.textContent = "";
    scoreContainer.textContent = `You scored ${percentageScore.toFixed(2)}%. Platforms: ${selectedPlatformsNames.join(", ")}`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block";
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    platformQuestions = [];
    scoreContainer.textContent = "";
    startQuiz();
    restartButton.style.display = "none";
    updateProgressBar();
  }
  
  function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / platformQuestions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  startQuiz();