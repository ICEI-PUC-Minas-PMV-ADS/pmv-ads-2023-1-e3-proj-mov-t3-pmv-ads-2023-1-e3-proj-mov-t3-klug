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
        public User User { get; set; }
    }

    public class Student {
        public string Id { get; set; }
        public bool Approved { get; set; }
        public bool Recovery { get; set; }
        public User User { get; set; }
    }

    public class Lesson
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public Teacher Teacher { get; set; }
        public List<Question> Questions { get; set; } = new List<Question>();
        public int MaxValue { get; set; }

        // used only when student send the lesson to evaluate.
        public string IdStudent { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }

    public class LessonPublished
    {
        public string Id { get; set; }
        public Lesson Lesson { get; set; }
        public string PublishedTimestamp { get; set; }
    }

    public class Question
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public Answer[] Answers { get; set; } = new Answer[4];
        public bool VerifyAnswer()
        {
            return Answers.FirstOrDefault(a => a.IsSelected && a.IsCorrect) is null ? false : true;
        }
    }

    public class Answer
    {
        public string Id { get; set; }
        public string Text { get; set; }
        public bool IsSelected { get; set; }
        public bool IsCorrect { get; set; }
    }

    public class LessonEvaluated
    {
        public string Id { get; set; }
        public Lesson Lesson { get; set; }
        public string EvaluatedTimestamp { get; set; }
        public Student Student { get; set; }
        public int EvaluatedValue { get; set; }
        public bool IsApproved { get; set; }
    }

    public enum TypeUser {
        Student = 0,
        Teacher = 1,
        Adm = 2
    }
}