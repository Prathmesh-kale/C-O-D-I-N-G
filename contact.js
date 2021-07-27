function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , user_name);

    if(user_name == "")
    {
        document.getElementById("user_name")
    }
    else{
        window.location = "sended.html";
    }



    user_message = document.getElementById("user_message").value;
    localStorage.setItem("user_message" , user_message);
    if(user_message == "")
    {
        document.getElementById("user_message")
    }
    else{
        window.location = "sended.html";
    }




    user_email = document.getElementById("user_email").value;
    localStorage.setItem("user_email" , user_email);
    if(user_email == "")
    {
        document.getElementById("user_email")
    }
    else{
        window.location = "sended.html";
    }
}


function back2()
{
    window.location = "index.html";
}