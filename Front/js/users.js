const url = 'http://localhost:8080/users';
let userslist;

function userscreate(){
    const nickname = $("#nickname-c").val();
    const email = $("#email-c").val();
    const password = $("#password-c").val();
    const body = `{"nickName": "${nickname}", "email": "${email}", "password": "${password}"}`;
    
    console.log(body)
    $.ajax({
        type:"POST",
        url: url,
        data: body,
        success: (res) => {
            console.log('post done.')
        },
        contentType: "application/json",
        dataType: "json"

    });
}

    function usersvalidar(){
        const email = $("#email-V").val();
        const password = $("#password-V").val();
        const body = `{"email": "${email}", "password": "${password}"}`;

        console.log(body)
        $.ajax({
            type:"POST",
            url: url+"/validarSenha",
            data: body,
            success: (res) => {
                console.log('validação feita.')
                window.location.href = "publicação.html";
            },
            contentType: "application/json",
            dataType: "json"
        })
    }   
