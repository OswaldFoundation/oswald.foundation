document.addEventListener("DOMContentLoaded",function(){var e=[].slice.call(document.querySelectorAll(".dropdown"));e.forEach(function(e){e.addEventListener("mouseover",function(){this.classList.add("open")}),e.addEventListener("mouseout",function(){this.classList.remove("open")})}),document.querySelector(".footer-content").innerHTML=document.querySelector(".footer-content").innerHTML.replace("{% year %}",(new Date).getFullYear())});