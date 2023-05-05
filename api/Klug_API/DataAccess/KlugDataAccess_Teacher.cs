using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public Teacher SaveTeacher(Teacher teacher){
            
            teacher.Id = Guid.NewGuid().ToString();
            teacher.TypeUser = TypeUser.Teacher;

            KlugDataAccess_Repo.Teachers.Add(teacher);

            return teacher;
        }

        public Teacher PutTeacher(Teacher teacher){
            var dbTeacher = KlugDataAccess_Repo.Teachers.FirstOrDefault(u => u.Id == teacher.Id);

            if(dbTeacher != null){

                dbTeacher.FirstName = teacher.FirstName;
                dbTeacher.LastName = teacher.LastName;
                dbTeacher.Password = teacher.Password;
                dbTeacher.Login = teacher.Login;

                var index = KlugDataAccess_Repo.Teachers.IndexOf(dbTeacher);
                KlugDataAccess_Repo.Teachers[index] = dbTeacher;

                return dbTeacher;
            }   

            return null;
        }

        public Teacher GetTeacher(string login, string senha){

            var dbTeacher = KlugDataAccess_Repo.Teachers.FirstOrDefault(u => u.Login.Equals(login)); 

            if(dbTeacher != null){
                if(dbTeacher.Password.Equals(senha))
                    return dbTeacher;
            }

            return null;
        }

        public bool ExistTeacherLoginAlreadyCreated(string login){
            return KlugDataAccess_Repo.Teachers.FirstOrDefault(t => t.Login.Equals(login)) != null;
        }
    }
}