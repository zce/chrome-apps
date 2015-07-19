 window.onload = function() {
     var webview = document.getElementById('coding');
     webview.src = "https://coding.net/user";
     webview.addEventListener('loadcommit', function(e) {
         // webview.insertCSS(
         // {
         //     file: "css/inject.css"
         // });
         // webview.executeScript(
         // {
         //     file: "js/inject.js"
         // });
     });

     webview.addEventListener('contentload', function() {});

     // var mini_icon = document.getElementById("min");
     // mini_icon.onclick = function()
     // {
     //     chrome.app.window.current().minimize();
     // }

 }
