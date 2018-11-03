function send_message(message) {
    
    var element = document.getElementById("right_board");
    var node = document.createTextNode(message);

    if (element == null) {
        element = document.createElement("div");
    }

    element.appendChild(node);

    document.getElementById("message").innerHTML = "Hello there. *sass*";
}