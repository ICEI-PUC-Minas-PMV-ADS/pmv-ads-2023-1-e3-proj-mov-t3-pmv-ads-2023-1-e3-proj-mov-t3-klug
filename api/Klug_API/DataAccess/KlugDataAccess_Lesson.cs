using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public List<LessonEvaluated> GetLessonsEvaluated(string idStudent)
        {
            return KlugDataAccess_Repo.LessonsEvaluated.Where(u => u.IdStudent.Equals(idStudent)).ToList();
        }
    }
}
