function read_textArea() {
    var message = document.getElementById("enter").value;
    console.log(message);
    return message;
}

function send_message() {
    console.log("entered");
    var element = document.getElementById("right_board");
    var node = document.createTextNode(read_textArea());

    if (element == null) {
        element = document.createElement("div");
        element.setAttribute("id", "right_board");
    }

    console.log(node);
    element.appendChild(node);
    console.log("appended");
}