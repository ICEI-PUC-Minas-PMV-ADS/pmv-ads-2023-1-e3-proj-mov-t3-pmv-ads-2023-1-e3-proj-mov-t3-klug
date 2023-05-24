namespace Klug_API.Models
{
    public class LoginDTO
    {
        public string Login {get;set;}
        public string Password {get;set;}
    }

    public class UserDTO : User
    {
        public bool Approved { get; set; }
        public bool Recovery { get; set; }
        public string Subject { get; set; }
        public string? IdStudent { get; set; }
        public string? IdTeacher { get; set; }
    }
}