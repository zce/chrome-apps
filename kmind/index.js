 window.onload = function() {
     var webview = document.getElementById("mind_editor");
     webview.src = "http://naotu.baidu.com/edit.html";
     webview.addEventListener('loadcommit',
         function(e) {
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
