const form = document.querySelector("form"),
  name = document.querySelector("#name"),
  email = document.querySelector("#email"),
  phone = document.querySelector("#phone"),
  mainContent = document.querySelector("#main-content"),
  thankYou = document.querySelector("#thankyou");

function onSubmit(e) {
  e.preventDefault();

  // please dont copy token I gave up on using environment variables
  Email.send({
    SecureToken: "ff0984ca-6550-4b63-b7d2-23668661b0cf",
    To: email.value,
    From: "dingding8003@gmail.com",
    Subject: "Thank you for Accepting the Invitation",
    Body: `
        <h3>Graduation Ceremony in Honor of Chimmy</h3>
          Dear ${name.value},<br/>
          Hope you are doing well. We are looking forward to seeing you there!<br/>
          Please see invite here: <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGptajFwMnVnM2psdDVtanRiNjMwaWVsMm8gZGluZ2Rpbmc4MDAzQG0&amp;tmsrc=dingding8003%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a><br/>
          Sincerely,<br/>
          Udochukwu Amaefule`,
  }).then((message) => console.log(message));

  // replace page content with thankyou message
  mainContent.style.display = "none";
  thankYou.style.display = "block";

  // set confetti
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

form.addEventListener("submit", onSubmit);
