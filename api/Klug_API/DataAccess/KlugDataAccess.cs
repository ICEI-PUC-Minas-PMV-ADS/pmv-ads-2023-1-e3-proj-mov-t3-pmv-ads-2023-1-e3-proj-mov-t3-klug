using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public User PostLogin(string login, string password)
        {
            return KlugDataAccess_Repo.Users.FirstOrDefault(u => u.Login.Equals(login) && BCrypt.Net.BCrypt.Verify(password, u.Password));
        }

        public void ResetAPI()
        {
            KlugDataAccess_Repo.ResetToDefaultObjects();
        }
    }
}