using Klug_API.DataAccess;
using Klug_API.Models;
using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var klugDataAccess = new KlugDataAccess();

app.MapPost("/api/user/login", (LoginDTO login) => {

    var user = klugDataAccess.PostLogin(login.Login, login.Password);

    if (user != null)
    {
        UserDTO userDTO = new UserDTO()
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Password = user.Password,
            Login = user.Login,
            TypeUser = user.TypeUser
        };

        switch (userDTO.TypeUser)
        {
            case TypeUser.Student:

                var student = klugDataAccess.GetStudentByUser(userDTO.Id);

                userDTO.Approved= student.Approved;
                userDTO.Recovery = student.Recovery;

                break;

            case TypeUser.Teacher:

                var teacher = klugDataAccess.GetTeacherByUser(userDTO.Id);

                userDTO.Subject = teacher.Subject;

                break;
        }

        return Results.Ok(userDTO);
    }
        

    return Results.NotFound("Credencias incorretas ou estudante não encontrado.");
});

app.MapPost("/api/user", (UserDTO user) => {
    
    if(user == null)
        return Results.Conflict("Não encontramos o parametro da requisição.");

    var error = user.Validate();

    if(error != null)
        Results.BadRequest(error);

    var existentLogin = klugDataAccess.ExistSomeUserWithSameLogin(user.Login);
    
    if(existentLogin)
        return Results.Conflict("Este email ja existe.");

    var userCreated = klugDataAccess.SaveUser(user);

    UserDTO userDTO = new UserDTO()
    {
        Id = user.Id,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Password = user.Password,
        Login = user.Login,
        TypeUser = user.TypeUser
    };

    switch (user.TypeUser)
    {
        case TypeUser.Student:

            var studentCreated = klugDataAccess.SaveStudent(new Student() {
                IdUser = userCreated.Id,
                Approved = user.Approved, 
                Recovery = user.Recovery
            });

            userDTO.Approved = studentCreated.Approved;
            userDTO.Recovery = studentCreated.Recovery;

            break;
        case TypeUser.Teacher:

            var teacherCreated = klugDataAccess.SaveTeacher(new Teacher()
            {
                IdUser = userCreated.Id,
                Subject = user.Subject
            });

            userDTO.Subject = teacherCreated.Subject;

            break;
    }

    return Results.Ok(userDTO);

});

app.MapGet("/", () => "Hello World! Welcome to Klug API :D");

app.Run();
