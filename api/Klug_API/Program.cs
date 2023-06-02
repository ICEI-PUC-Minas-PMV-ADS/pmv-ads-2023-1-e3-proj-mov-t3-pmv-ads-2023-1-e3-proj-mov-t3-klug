using Klug_API.DataAccess;
using Klug_API.Models;
using Microsoft.AspNetCore.Mvc;

var klugOrigin = "klugOrigin";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: klugOrigin,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:19006")
                            .AllowAnyHeader()
                            .AllowAnyMethod(); // add the allowed origins  
                      });
});

var app = builder.Build();

var klugDataAccess = new KlugDataAccess();

app.MapPost("/api/user/login", (LoginDTO login) =>
{

    var user = klugDataAccess.PostLogin(login.Login, login.Password);

    if (user != null)
    {
        UserDTO userDTO = new UserDTO()
        {
            Id = user.Id,
            FirstName = user.FirstName,
            LastName = user.LastName,
            Login = user.Login,
            TypeUser = user.TypeUser
        };

        switch (userDTO.TypeUser)
        {
            case TypeUser.Student:

                var student = klugDataAccess.GetStudentByUser(userDTO.Id);

                userDTO.Approved = student.Approved;
                userDTO.Recovery = student.Recovery;
                userDTO.IdStudent = student.Id;

                break;

            case TypeUser.Teacher:

                var teacher = klugDataAccess.GetTeacherByUser(userDTO.Id);

                userDTO.Subject = teacher.Subject;
                userDTO.IdTeacher = teacher.Id;

                break;
        }

        return Results.Ok(userDTO);
    }


    return Results.NotFound("Credencias incorretas ou estudante n�o encontrado.");
});
app.MapPost("/api/reset", () =>
{
    klugDataAccess.ResetAPI();
    return Results.Ok("Reseted");

});
app.MapPost("/api/user", (UserDTO user) =>
{

    if (user == null)
        return Results.Conflict("N�o encontramos o parametro da requisi��o.");

    var error = user.Validate();

    if (error != null)
        Results.BadRequest(error);

    var existentLogin = klugDataAccess.ExistSomeUserWithSameLogin(user.Login);

    if (existentLogin)
        return Results.Conflict("Este email ja existe.");

    var userCreated = klugDataAccess.SaveUser(user);

    UserDTO userDTO = new UserDTO()
    {
        Id = user.Id,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Login = user.Login,
        TypeUser = user.TypeUser
    };

    switch (user.TypeUser)
    {
        case TypeUser.Student:

            var studentCreated = klugDataAccess.SaveStudent(new Student()
            {
                User = userCreated,
                Approved = user.Approved,
                Recovery = user.Recovery
            });

            userDTO.Approved = studentCreated.Approved;
            userDTO.Recovery = studentCreated.Recovery;

            break;
        case TypeUser.Teacher:

            var teacherCreated = klugDataAccess.SaveTeacher(new Teacher()
            {
                User = userCreated,
                Subject = user.Subject
            });

            userDTO.Subject = teacherCreated.Subject;

            break;
    }

    return Results.Ok(userDTO);

});
app.MapGet("/api/lesson/evaluated/{idStudent}", (string idStudent) =>
{
    var lessonsEvaluated = klugDataAccess.GetLessonsEvaluated(idStudent);

    if (lessonsEvaluated != null && lessonsEvaluated.Count() > 0)
    {
        return Results.Ok(lessonsEvaluated);
    }

    return Results.NotFound("N�o existe tarefas avalidas para esse aluno.");
});
app.MapGet("/api/lesson/evaluated/teacher/{idTeacher}", (string idTeacher) =>
{
    var lessonsEvaluated = klugDataAccess.GetLessonsEvaluatedByTeacherId(idTeacher);

    if (!lessonsEvaluated.Any())
        return Results.NotFound("N�o existe tarefas avalidas para esse professor.");

    return Results.Ok(lessonsEvaluated);
});
app.MapGet("/api/lessons/{idTeacher}", (string idTeacher) =>
{
    var lessons = klugDataAccess.GetLessonsByTeacherId(idTeacher);

    if (!lessons.Any())
        return Results.NotFound("Não existe tarefas desse professor.");

    return Results.Ok(lessons);
});
app.MapGet("/api/lesson/published", () =>
{

    var lessonsPublished = klugDataAccess.GetPublishedLessons();

    if (lessonsPublished != null && lessonsPublished.Count() > 0)
    {
        return Results.Ok(lessonsPublished);
    }

    return Results.NotFound("N�o existe tarefas publicadas.");
});
app.MapGet("/api/lesson/{idLesson}", (string idLesson) =>
{

    var lesson = klugDataAccess.GetLesson(idLesson);

    if (lesson != null)
    {
        return Results.Ok(lesson);
    }

    return Results.NotFound("N�o foi encontrado essa tarefa.");
});
app.MapPost("/api/lesson/evaluate", ([FromBody] Lesson lesson) =>
{

    var lessonEvaluated = klugDataAccess.AvaliateLesson(lesson);

    if (lessonEvaluated != null)
    {
        return Results.Ok(lessonEvaluated);
    }

    return Results.NotFound("N�o encontramos essa tarefa em nossa base de dados :(");
});
app.MapPut("/api/lesson/{idLesson}/{isRemoved}", (string idLesson, bool IsRemoved) =>
{

    var lesson = klugDataAccess.SetLessonRemoved(idLesson, IsRemoved);

    if (lesson != null)
    {
        return Results.Ok(lesson);
    }

    return Results.NotFound("Não encontramos essa tarefa em nossa base de dados :(");
});
app.MapPost("/api/lesson", ([FromBody] LessonByFrontend lesson) =>
{

    var lessonCreated = klugDataAccess.CreateLessonByFrontEnd(lesson);

    if(lessonCreated != null)
    {
        return Results.Ok(lessonCreated);
    }

    return Results.NotFound("Não sasasasasa essa tarefa em nossa base de dados :(");
});

klugDataAccess.ResetAPI();

app.MapGet("/", () => "Hello World! Welcome to Klug API :D");
app.UseCors(klugOrigin);
app.Run();

