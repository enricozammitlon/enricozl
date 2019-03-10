<!-- Contact taken 
  from https://codepen.io/erlenmasson/pen/azVZXQ
  and from https://stackoverflow.com/questions/18379238/send-email-with-php-from-html-form-on-submit-with-the-same-script-->
<html>
<head>
  <title>Enrico Zammit Lonardelli</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/css/main2.css" />
  <link rel="stylesheet" href="/css/font-awesome.min.css">
  <link rel="stylesheet" href="/css/contact.css">
  <!--This is the menu I have very thankfully stolen from https://codepen.io/una/pen/FEtze-->
  <link rel="stylesheet" href="/css/menu.css">
</head>

<body>
  <div class="menu-section">
    <div class="menu-toggle">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
    <nav>
      <ul role="navigation" class="hidden" id="menu-stuff">
        <li><a href="index.php">home</a></li>
        <li><a href="softwareng.php">software engineering</a></li>
        <li><a href="physics.php">physics</a></li>
        <li><a href="files/CV.pdf">resume</a></li>
      </ul>
    </nav>
  </div>

  <?php
  require($_SERVER["DOCUMENT_ROOT"].'/recaptcha-master/src/autoload.php');

  if(isset($_POST['submit'])){
      $to = "enrico@enricozl.me"; // this is your Email address
      $from = $_POST['email']; // this is the sender's Email address
      $first_name = $_POST['first_name'];
      $subject = "Form submission";
      $subject2 = "Copy of your form submission";
      $message = $first_name . " wrote the following:" . "\n\n" . $_POST['message'];
      $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];
      $recaptchaSecret = '6LcCW4YUAAAAAL_HYXePYGQkfy3Jr3PEq0rLIfPK';

      $recaptcha = new \ReCaptcha\ReCaptcha($recaptchaSecret, new \ReCaptcha\RequestMethod\CurlPost());
        // we validate the ReCaptcha field together with the user's IP address
      $response = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
      if (!$response->isSuccess()) {
            throw new \Exception('ReCaptcha was not validated.');
        }
      else {
        $headers = "From:" . $from;
        $headers2 = "From:" . $to;
        mail($to,$subject,$message,$headers);
        mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
        echo "Cheers " . $first_name . "!";
      }
    }
  ?>
  <div class="contact">
    <form id="contact-form" method="post">
      <p>Dear Enrico,</p>
      <p>My
        <label for="your-name">name</label> is
        <input type="text" name="first_name" id="your-name" minlength="3" placeholder="(your name here)" required> and</p>

      <p>my
        <label for="email">email address</label> is
        <input type="email" name="email" id="email" placeholder="(your email address)" required>
      </p>

      <p> I have a
        <label for="your-message">message</label> for you,</p>

      <p>
        <textarea name="message" id="your-message" placeholder="(your msg here)" class="expanding" required></textarea>
      </p>

      <div class="g-recaptcha" data-sitekey="6LcCW4YUAAAAAOw3x-K0oCbgWqyBvl0BiT2W7dCN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback">
      </div>
      <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" style="height:0px;padding:0px;">
      
      <p style="margin-bottom: 0">
        <input type="submit" name="submit" value="Submit">
          <svg version="1.1" class="send-icn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="36px" viewBox="0 0 100 36" enable-background="new 0 0 100 36" xml:space="preserve">
            <path d="M100,0L100,0 M23.8,7.1L100,0L40.9,36l-4.7-7.5L22,34.8l-4-11L0,30.5L16.4,8.7l5.4,15L23,7L23.8,7.1z M16.8,20.4l-1.5-4.3
    	l-5.1,6.7L16.8,20.4z M34.4,25.4l-8.1-13.1L25,29.6L34.4,25.4z M35.2,13.2l8.1,13.1L70,9.9L35.2,13.2z" />
          </svg>
          <small>send</small>
        </button>
      </p>
    </form>
  </div>
</body>

</html>

<script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossorigin="anonymous">
</script>
<script src='https://www.google.com/recaptcha/api.js'></script>
<script type="text/javascript">
  document.getElementsByClassName("menu-toggle")[0].addEventListener("click", menuResponse);
  function menuResponse() {
    document.getElementsByClassName("menu-toggle")[0].classList.toggle("on");
    document.getElementById("menu-stuff").classList.toggle('hidden');
  }

$(function () {
  window.verifyRecaptchaCallback = function (response) {
      $('input[data-recaptcha]').val(response).trigger('change')
  }

  window.expiredRecaptchaCallback = function () {
      $('input[data-recaptcha]').val("").trigger('change')
  }
});
    // Auto resize input
function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

//To-Do : Change this to buffered keyup
$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){
  
  var textareas = document.querySelectorAll('.expanding'),
      
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {
  
    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }
  
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();

</script>
