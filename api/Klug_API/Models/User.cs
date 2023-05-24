using Klug_API.Interfaces;
namespace Klug_API.Models{
    public class User : IValidate {
        public string Id { get; set; }
        public string FirstName {get;set;}
        public string Login {get;set;}
        public string LastName {get;set;}
        public string Password {get;set;}
        public TypeUser TypeUser {get;set;}

        public string Validate(){

            if(string.IsNullOrEmpty(FirstName))
                return "O primeiro nome do usuário não pode ser vazio.";

            if(string.IsNullOrEmpty(LastName))
                return "O ultimo nome do usuário não pode ser vazio.";

            if(string.IsNullOrEmpty(LastName))
                return "A senha do usuário não pode ser vazia.";

            if(string.IsNullOrEmpty(Login))
                return "O login do usuário não pode ser vazia.";

            return null;
        }
    }

    public class Teacher {
        public string Id { get; set; }
        public string Subject { get; set; }
        public string IdUser { get; set; }
    }

    public class Student {
        public string Id { get; set; }
        public bool Approved { get; set; }
        public bool Recovery { get; set; }
        public string IdUser { get; set; }
    }

    public class Lesson
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string IdTeacher { get; set; }
    }

    public class LessonEvaluated
    {
        public string Id { get; set; }

        public string IdLesson { get; set; }
        public string LessonName { get; set; }
        public string PostedTimestamp { get; set; }

        public string IdStudent { get; set; }
        public string NameStudent { get; set; }

        public string IdTeacher { get; set; }
        public string NameTeacher { get; set; }

        public int MaxValue { get; set; }
        public int EvaluatedValue { get; set; }
    }

    public enum TypeUser {
        Student = 0,
        Teacher = 1,
        Adm = 2
    }
}