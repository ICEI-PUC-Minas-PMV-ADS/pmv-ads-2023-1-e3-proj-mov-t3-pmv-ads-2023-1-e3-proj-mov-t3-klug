using Klug_API.Models;
namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public Teacher SaveTeacher(Teacher teacher){
            
            teacher.Id = Guid.NewGuid().ToString();
            KlugDataAccess_Repo.Teachers.Add(teacher);

            return teacher;
        }

        public Teacher PutTeacher(Teacher teacher){
            var dbTeacher = KlugDataAccess_Repo.Teachers.FirstOrDefault(u => u.Id == teacher.Id);

            if(dbTeacher != null){

                dbTeacher.Subject = teacher.Subject;

                var index = KlugDataAccess_Repo.Teachers.IndexOf(dbTeacher);
                KlugDataAccess_Repo.Teachers[index] = dbTeacher;

                return dbTeacher;
            }   

            return null;
        }

        public Teacher GetTeacher(string idTeacher){

            return KlugDataAccess_Repo.Teachers.FirstOrDefault(u => u.Id.Equals(idTeacher)) ?? null; 
        }    

        public Teacher GetTeacherByUser(string idUser)
        {

            return KlugDataAccess_Repo.Teachers.FirstOrDefault(u => u.IdUser.Equals(idUser));
        }
    }
}