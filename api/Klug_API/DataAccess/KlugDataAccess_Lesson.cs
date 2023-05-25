using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public List<LessonEvaluated> GetLessonsEvaluated(string idStudent)
        {
            return KlugDataAccess_Repo.LessonsEvaluated.Where(u => u.Student.Id.Equals(idStudent)).ToList();
        }

        public List<LessonPublished> GetPublishedLessons()
        {
            return KlugDataAccess_Repo.LessonsPublished.ToList();
        }

        public Lesson GetLesson(string idLesson)
        {
            return KlugDataAccess_Repo.Lessons.FirstOrDefault(l => l.Id.Equals(idLesson));
        }
    }
}
