using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public static class KlugDataAccess_Repo
    {
        public static List<Student> Students { get; set; } = new List<Student>();
        public static List<Teacher> Teachers { get; set; } = new List<Teacher>();
        public static List<User> Users { get; set; } = new List<User>();
    }
}