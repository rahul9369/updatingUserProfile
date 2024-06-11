document
  .getElementById("updateProfileForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userId = document.getElementById("userId").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const bio = document.getElementById("bio").value;

    const data = {
      user_id: userId,
      username: username,
      email: email,
      age: age,
      bio: bio,
    };

    fetch("YOUR_BACKEND_API_ENDPOINT/update_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        const messageElement = document.getElementById("message");
        if (data.success) {
          messageElement.textContent = "Profile updated successfully!";
        } else {
          messageElement.textContent = "Failed to update profile.";
          messageElement.style.color = "red";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("message").textContent =
          "An error occurred while updating the profile.";
        document.getElementById("message").style.color = "red";
      });
  });
