using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public User PostLogin(string login, string password)
        {
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(password);
            return KlugDataAccess_Repo.Users.FirstOrDefault(u => u.Login.Equals(login) && u.Password.Equals(passwordHash));
        }

        public void ResetAPI()
        {
            KlugDataAccess_Repo.ResetToDefaultObjects();
        }
    }
}