using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public static class KlugDataAccess_Repo
    {
        public static List<Student> Students { get; set; } = new List<Student>();
        public static List<Teacher> Teachers { get; set; } = new List<Teacher>();
        public static List<User> Users { get; set; } = new List<User>();
        public static List<LessonEvaluated> LessonsEvaluated { get; set; } = new List<LessonEvaluated>();
        public static List<Lesson> Lessons { get; set; } = new List<Lesson>();

        public static void ResetToDefaultObjects()
        {
            if (Users.Count > 0 || Teachers.Count > 0 || Students.Count > 0)
            {
                Users.Clear();
                Students.Clear();
                Teachers.Clear();
                Lessons.Clear();
                LessonsEvaluated.Clear();
            }

            var defaultPassword = BCrypt.Net.BCrypt.HashPassword("123456789");
            var guidStudent = Guid.NewGuid().ToString();
            var guidTeacher = Guid.NewGuid().ToString();

            Users.Add(new User()
            {
                FirstName = "Aluno",
                LastName = "Klug",
                Login = "alunoklug@gmail.com",
                Password = defaultPassword,
                TypeUser = TypeUser.Student,
                Id = guidStudent,
            });

            Users.Add(new User()
            {
                FirstName = "Professor",
                LastName = "Klug",
                Login = "professorklug@gmail.com",
                Password = defaultPassword,
                TypeUser = TypeUser.Teacher,
                Id = guidTeacher,
            });

            Students.Add(new Student()
            {
                Approved = false,
                Id = Guid.NewGuid().ToString(),
                Recovery = false,
                IdUser = guidStudent
            });

            Teachers.Add(new Teacher()
            {
                Id = Guid.NewGuid().ToString(),
                IdUser = guidTeacher,
                Subject = "Matéria X"
            });

            Lessons.Add(new Lesson() { Id = Guid.NewGuid().ToString(), IdTeacher = Teachers.First().Id, Name = "Lesson 1" });
            Lessons.Add(new Lesson() { Id = Guid.NewGuid().ToString(), IdTeacher = Teachers.First().Id, Name = "Lesson 2" });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 20,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 20,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 4,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 15,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 8,
                IdLesson = Lessons.First().Id,
                IdStudent = Students.First().Id,
                IdTeacher = Teachers.First().Id,
                LessonName = Lessons.First().Name,
                MaxValue = 10,
                NameStudent = Users.First(u => u.Id == (Students.First()).IdUser).FirstName,
                NameTeacher = Users.First(u => u.Id == (Teachers.First()).IdUser).FirstName,
                PostedTimestamp = DateTime.Now.ToString("dd/mm/yyyy"),
            });
        }
    }
}