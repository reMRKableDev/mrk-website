// Modal - JS

function modal() {
  var modal = document.getElementsByClassName("modal")[0],
    triggerOne = document.getElementsByClassName("modal_trigger")[0],
    triggerTwo = document.getElementsByClassName("modal_trigger")[1],
    triggerThree = document.getElementsByClassName("modal_trigger")[2],
    close = document.getElementsByClassName("modal__close"); // we loops this to catch the different closers

  closeModal = function() {
    modal.classList.remove("modal__show");
    modal.classList.add("modal__hide");
    // Remove hide class after animation is done
    afterAnimation = function() {
      modal.classList.remove("modal__hide");
    };
    // This listens for the CSS animations to finish and then hides the modal
    modal.addEventListener("webkitAnimationEnd", afterAnimation, false);
    modal.addEventListener("oAnimationEnd", afterAnimation, false);
    modal.addEventListener("msAnimationEnd", afterAnimation, false);
    modal.addEventListener("animationend", afterAnimation, false);
  };

  // Open the modal
  triggerOne.onclick = function() {
    modal.classList.add("modal__show");

    document.getElementById("modal-text").innerHTML =
      "<ul> <li>Html & Css</li> <li>JavaScript</li> <li>SaSS / SCSS</li> <li>React.js</li> <li>jQuery</li> <li>EJS</li> </ul>";
  };
  triggerTwo.onclick = function() {
    modal.classList.add("modal__show");
    document.getElementById("modal-text").innerHTML =
      "<ul> <li>APIs</li> <li>Node.js</li> <li>Testing</li> <li>Express.js</li> <li>Restful Routing</li> <li>Relational Databases: SQL</li> </ul>";
  };
  triggerThree.onclick = function() {
    modal.classList.add("modal__show");
    document.getElementById("modal-text").innerHTML =
      "<ul> <li>Git</li> <li>Coaching</li> <li>Wordpress</li> <li>Scrum (Agile)</li> <li>SEO Optimization</li> <li>Project Management</li></ul>";
  };

  // Close the modal with any element with class 'modal__close'
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      closeModal();
    };
  }

  // Click outside of the modal and close it
  window.onclick = function(e) {
    if (e.target == modal) {
      closeModal();
    }
  };

  // Use the escape key to close modal
  document.onkeyup = function(e) {
    e = e || window.event;
    if (modal.classList.contains("modal__show")) {
      if (e.keyCode == 27) {
        closeModal();
      }
    }
  };
}

modal();
