function addUser()
{
    username = document.getElementById("Username").value;
    localStorage.setItem("username",username);
    window.location = "chat.html";
}