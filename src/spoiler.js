 var ele = document.getElementById('contentSpoiler');
      var text = document.querySelector('.link_spoiler');
      function Spoiler() {
        // var ele = document.getElementById('contentSpoiler');
        // var text = document.querySelector('link_spoiler');
        if (ele.style.display == 'block') {
          ele.style.display = 'none';
          text.innerHTML = 'Read more';
        } else {
          ele.style.display = 'block';
          text.innerHTML = 'Hide';
        }
      }
      ele.addEventListener('click', Spoiler);
      text.addEventListener('click', Spoiler);