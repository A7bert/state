<!DOCTYPE html>
<html>
    <head>
        <title>Barba</title>        
    </head>
    <body>
        <div id="demo">
            <h2>Ajax Example</h2>
            <button type="button" onClick="loadDoc()">Update Content with AJAX</button>
        </div>

        <script>
            function loadDoc() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("demo").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET", "ajax_info.txt", true);
                xhttp.send();
            }
        </script>
    </body>
</html>