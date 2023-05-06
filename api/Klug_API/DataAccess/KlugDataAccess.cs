using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public User PostLogin(string login, string senha)
        {
            return KlugDataAccess_Repo.Users.FirstOrDefault(u => u.Login.Equals(login) && u.Password.Equals(senha));
        }
    }
}