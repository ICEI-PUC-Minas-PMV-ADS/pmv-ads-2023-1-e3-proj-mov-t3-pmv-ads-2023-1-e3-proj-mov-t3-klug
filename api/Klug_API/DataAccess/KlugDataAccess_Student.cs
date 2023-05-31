using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public Student SaveStudent(Student student){

            student.Id = Guid.NewGuid().ToString();
            KlugDataAccess_Repo.Students.Add(student);

            return student;
        }

        public Student PutStudent(Student student){

            var dbStudent = KlugDataAccess_Repo.Students.FirstOrDefault(u => u.Id.Equals(student.Id));

            if(dbStudent != null){

                dbStudent.Recovery = student.Recovery;
                dbStudent.Approved = student.Approved;

                var index = KlugDataAccess_Repo.Students.IndexOf(dbStudent);
                KlugDataAccess_Repo.Students[index] = dbStudent;

                return dbStudent;
            }   

            return null;
        }

        public Student GetStudent(string idStudent){

            return KlugDataAccess_Repo.Students.FirstOrDefault(u => u.Id.Equals(idStudent)); 
        }

        public Student GetStudentByUser(string idUser)
        {

            return KlugDataAccess_Repo.Students.FirstOrDefault(u => u.User.Id.Equals(idUser));
        }
    }
}