var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");
            function opentab(tabname) {
              for (tablink of tablinks) {
                tablink.classList.remove("active");
              }
              for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-skills"); // Fixed variable name here
              }
              event.currentTarget.classList.add("active");
              document.getElementById(tabname).classList.add('active-skills')
            }
            