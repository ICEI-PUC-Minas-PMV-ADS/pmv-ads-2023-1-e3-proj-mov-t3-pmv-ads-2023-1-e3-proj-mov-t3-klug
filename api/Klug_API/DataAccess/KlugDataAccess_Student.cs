using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public Student SaveStudent(Student student){

            student.Id = Guid.NewGuid().ToString();
            student.TypeUser = TypeUser.Student;

            KlugDataAccess_Repo.Students.Add(student);

            return student;
        }

        public Student PutStudent(Student student){

            var dbStudent = KlugDataAccess_Repo.Students.FirstOrDefault(u => u.Id == student.Id);

            if(dbStudent != null){

                dbStudent.FirstName = student.FirstName;
                dbStudent.LastName = student.LastName;
                dbStudent.Password = student.Password;
                dbStudent.Login = student.Login;

                var index = KlugDataAccess_Repo.Students.IndexOf(dbStudent);
                KlugDataAccess_Repo.Students[index] = dbStudent;

                return dbStudent;
            }   

            return null;
        }

        public Student GetStudent(string login, string senha){

            var dbStudent = KlugDataAccess_Repo.Students.FirstOrDefault(u => u.Login.Equals(login)); 

            if(dbStudent != null){
                if(dbStudent.Password.Equals(senha))
                    return dbStudent;
            }

            return null;
        }

        public bool ExistStudentLoginAlreadyCreated(string login){
            return KlugDataAccess_Repo.Students.FirstOrDefault(t => t.Login.Equals(login)) != null;
        }
    }
}