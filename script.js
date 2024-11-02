document.getElementById("add-story-btn").addEventListener("click", function() {
    const storyInput = document.getElementById("story-input");
    const storyList = document.getElementById("story-list");

    const storyText = storyInput.value;
    if (storyText) {
        const storyItem = document.createElement("div");
        storyItem.className = "story";
        storyItem.textContent = storyText;
        storyList.appendChild(storyItem);
        storyInput.value = "";
    }
});
