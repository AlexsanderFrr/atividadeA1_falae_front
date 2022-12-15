const url = 'http://localhost:8080/users';
let userslist;

function userscreate(){
    const nickname = $("nickname-c").val();
    const email = $("email-c").val();
    const password = $("password-c").val();
    const body = `{"nickName": "${nickname}"}`;
    
    $.ajax({
        type:"POST",
        url: url,
        data: body,
        sucess: (res) => {
            console.log('post done.')


        },
        contentType: "application/json",
        dataType: "json"

    });
}