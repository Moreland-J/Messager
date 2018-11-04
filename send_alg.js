function read_textArea() {
    var message = document.getElementById("enter").value;
    return message;
}

function send_message() {
    var element = document.getElementById("right_board");
    var node = document.createTextNode(read_textArea());

    element.appendChild(node);
}

function get_message(recevied) {
    var element = document.getElementById("left_board");
    var node = received;

    element.appendChild(node);
}