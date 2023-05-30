console.log(
  "%c👋 Bonjour, merci d'avoir visité mon site web. N'hésitez pas à me contacter!",
  "font-size: 16px; color: rgb(0, 100, 150);"
);

document.querySelector("#nav-toggle").checked = false;

function copyEmailAddress() {
  const emailSpan = document.querySelector(".email");
  const emailAddress = emailSpan.textContent;
  const tooltipMessage = document.querySelector(".tooltipMessage");

  navigator.clipboard
    .writeText(emailAddress)
    .then(() => {
      tooltipMessage.textContent = "Courriel copié!";
      setTimeout(() => {
        tooltipMessage.textContent = "";
      }, 3000);
    })
    .catch((err) => {
      console.error("Failed to copy email address: ", err);
    });
}
