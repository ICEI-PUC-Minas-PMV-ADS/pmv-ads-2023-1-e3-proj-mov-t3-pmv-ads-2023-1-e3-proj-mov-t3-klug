using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public User GetUser(int idUser)
        {
            return KlugDataAccess_Repo.Users.FirstOrDefault(u => u.Id.Equals(idUser));
        }

        public User PutUser(User user)
        {

            var dbUser = KlugDataAccess_Repo.Users.FirstOrDefault(u => u.Id == user.Id);

            if (dbUser != null)
            {

                dbUser.FirstName = user.FirstName;
                dbUser.LastName = user.LastName;
                dbUser.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                dbUser.Login = user.Login;

                var index = KlugDataAccess_Repo.Users.IndexOf(dbUser);
                KlugDataAccess_Repo.Users[index] = dbUser;

                return dbUser;
            }

            return null;
        }

        public User SaveUser(User user)
        {

            user.Id = Guid.NewGuid().ToString();
            KlugDataAccess_Repo.Users.Add(user);

            return user;
        }

        public bool ExistSomeUserWithSameLogin(string login)
        {
            return KlugDataAccess_Repo.Users.FirstOrDefault(t => t.Login.Equals(login)) != null;
        }
    }
}
