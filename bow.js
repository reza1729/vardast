function topThreeWords(text) {
  // Create an empty object to store the word counts
  let wordCounts = {};
  let cleanText = text.toLowerCase()
  let words = cleanText.split(" ");
  for (let word of words) {
    if (word !== "" && word !== "'") {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  }
  let topThree = [];
  for (let i = 0; i < 3; i++) {
    // Find the word with the highest count in the wordCounts object
    let maxWord = "";
    let maxCount = 0;
    for (let word in wordCounts) {
      if (wordCounts[word] > maxCount) {
        maxWord = word;
        maxCount = wordCounts[word];
      }
    }
    // If there is a word with a positive count, push it to the topThree array and delete it from the wordCounts object
    if (maxCount > 0) {
      topThree.push(maxWord);
      delete wordCounts[maxWord];
    }
  }
  // Return the topThree array
  return topThree;
}