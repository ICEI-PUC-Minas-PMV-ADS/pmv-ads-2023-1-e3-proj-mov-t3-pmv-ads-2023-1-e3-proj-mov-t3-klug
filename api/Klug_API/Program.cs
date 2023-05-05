using Klug_API.DataAccess;
using Klug_API.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var klugDataAccess = new KlugDataAccess();

app.MapPost("/api/student/login", (LoginDTO login) => {

    var student = klugDataAccess.GetStudent(login.Login, login.Password);

    if (student != null)
        return Results.Ok(student);

    return Results.NotFound("Credencias incorretas ou estudante não encontrado.");
});

app.MapPost("/api/student", (Student student) => {
    
    var error = student.Validate();

    if(error != null)
        Results.BadRequest(error);

    var existentLogin = klugDataAccess.ExistTeacherLoginAlreadyCreated(student.Login);
    
    if(existentLogin)
        return Results.Conflict("Este email ja existe.");

    return Results.Ok(klugDataAccess.SaveStudent(student));

});

app.MapPost("/api/teacher/login", (LoginDTO login) => {

    var teacher = klugDataAccess.GetTeacher(login.Login, login.Password);
    if (teacher != null)
        return Results.Ok(teacher);

    return Results.NotFound("Credencias incorretas ou professor não encontrado.");
});

app.MapPost("/api/teacher", (Teacher teacher) => {
    
    var error = teacher.Validate();

    if(error != null)
        Results.BadRequest(error);

    var existentLogin = klugDataAccess.ExistStudentLoginAlreadyCreated(teacher.Login);
    
    if(existentLogin)
        return Results.Conflict("Este email ja existe.");

    return Results.Ok(klugDataAccess.SaveTeacher(teacher));

});

app.MapGet("/", () => "Hello World! Welcome to Klug API :D");

app.Run();
