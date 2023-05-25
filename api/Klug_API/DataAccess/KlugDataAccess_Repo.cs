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
        public static List<LessonPublished> LessonsPublished { get; set; } = new List<LessonPublished>();

        public static void ResetToDefaultObjects()
        {
            if (Users.Count > 0 || Teachers.Count > 0 || Students.Count > 0)
            {
                Users.Clear();
                Students.Clear();
                Teachers.Clear();
                Lessons.Clear();
                LessonsEvaluated.Clear();
                LessonsPublished.Clear();
            }

            var defaultPassword = BCrypt.Net.BCrypt.HashPassword("123456789");
            var guidStudent = Guid.NewGuid().ToString();
            var guidTeacher = Guid.NewGuid().ToString();

            var klugUserStudent = new User()
            {
                FirstName = "Aluno",
                LastName = "Klug",
                Login = "alunoklug@gmail.com",
                Password = defaultPassword,
                TypeUser = TypeUser.Student,
                Id = guidStudent,
            };

            var klugUserTeacher = new User()
            {
                FirstName = "Professor",
                LastName = "Klug",
                Login = "professorklug@gmail.com",
                Password = defaultPassword,
                TypeUser = TypeUser.Teacher,
                Id = guidTeacher,
            };

            Users.Add(klugUserStudent);
            Users.Add(klugUserTeacher);

            var klugStudent = new Student()
            {
                Approved = false,
                Id = Guid.NewGuid().ToString(),
                Recovery = false,
                User = klugUserStudent
            };

            var klugTeacher = new Teacher()
            {
                Id = Guid.NewGuid().ToString(),
                User = klugUserTeacher,
                Subject = "Matéria X"
            };

            Console.WriteLine("Student ID: " + klugStudent.Id);
            Console.WriteLine("Teacher ID: " + klugTeacher.Id);

            Teachers.Add(klugTeacher);
            Students.Add(klugStudent);

            var question = new Question()
            {
                Id = Guid.NewGuid().ToString(),
                Text = "Qual é o sentido da vida?",
                Answers = new Answer[]
                {
                    new Answer { Id= Guid.NewGuid().ToString(), Text = "Viver bem.", IsCorrect=true, IsSelected = false },
                    new Answer { Id= Guid.NewGuid().ToString(), Text = "Eu sei lakkk.", IsCorrect=false, IsSelected = false },
                    new Answer { Id= Guid.NewGuid().ToString(), Text = "Comer.", IsCorrect=false, IsSelected = false },
                    new Answer { Id= Guid.NewGuid().ToString(), Text = "MEU DEUS ME AJUDA.", IsCorrect=false, IsSelected = false }
                }
            };

            var questions = new List<Question>()
            {
                question, question, question, question, question, question
            };

            var lesson1 = new Lesson() { Id = Guid.NewGuid().ToString(), Teacher = klugTeacher, Name = "Tarefa 1", MaxValue = 20, Questions = questions };
            var lesson2 = new Lesson() { Id = Guid.NewGuid().ToString(), Teacher = klugTeacher, Name = "Tarefa 2", MaxValue = 25, Questions = questions };

            Console.WriteLine("Lesson Id: " + lesson1.Id);

            Lessons.Add(lesson1);
            Lessons.Add(lesson2);

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 20,
                Lesson = lesson1,
                Student = klugStudent,
                EvaluatedTimestamp = DateTime.Now.ToString("dd/MM/yyyy"),
            });

            LessonsEvaluated.Add(new LessonEvaluated()
            {
                Id = Guid.NewGuid().ToString(),
                EvaluatedValue = 20,
                Lesson = lesson2,
                Student = klugStudent,
                EvaluatedTimestamp = DateTime.Now.ToString("dd/MM/yyyy"),
            });

            LessonsPublished.Add(new LessonPublished()
            {
                Id = Guid.NewGuid().ToString(),
                Lesson = lesson1,
                PublishedTimestamp= DateTime.Now.ToString("dd/MM/yyyy")
            });

            LessonsPublished.Add(new LessonPublished()
            {
                Id = Guid.NewGuid().ToString(),
                Lesson = lesson2,
                PublishedTimestamp = DateTime.Now.ToString("dd/MM/yyyy")
            });
        }
    }
}