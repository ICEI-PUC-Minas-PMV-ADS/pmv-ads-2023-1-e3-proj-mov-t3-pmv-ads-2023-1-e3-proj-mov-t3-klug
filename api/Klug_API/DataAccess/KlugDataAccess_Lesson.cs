using Klug_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public List<LessonEvaluated> GetLessonsEvaluated(string idStudent)
        {
            return KlugDataAccess_Repo.LessonsEvaluated.Where(u => u.Student.Id.Equals(idStudent)).ToList();
        }

        public List<LessonEvaluated> GetLessonsEvaluatedByTeacherId(string idTeacher)
        {
            return KlugDataAccess_Repo.LessonsEvaluated
                .Where(u => u.Lesson.Teacher.Id.Equals(idTeacher))
                .OrderByDescending(x => x.Lesson.CreatedAt)
                .ToList();
        }

        public List<LessonPublished> GetPublishedLessons()
        {
            return KlugDataAccess_Repo.LessonsPublished.ToList();
        }

        public Lesson GetLesson(string idLesson)
        {
            return KlugDataAccess_Repo.Lessons.FirstOrDefault(l => l.Id.Equals(idLesson));
        }

        public LessonEvaluated AvaliateLesson(Lesson lesson)
        {
            if (lesson is null)
                return null;

            var selectedUserAnsers = new List<Answer>();

            foreach (var question in lesson.Questions)
                selectedUserAnsers.AddRange(question.Answers.Where(a => a.IsSelected));

            int points = 0;

            var dbAnswers = GetAnswers();

            foreach (var question in lesson.Questions)
                if (question.VerifyAnswer())
                    points++;

            var student = GetStudentByUser(lesson.IdStudent);

            var lessonEvaluated = new LessonEvaluated()
            {
                EvaluatedTimestamp = DateTime.Now.ToString("dd/MM/yyyy HH:mm"),
                EvaluatedValue = points,
                Id = Guid.NewGuid().ToString(),
                Lesson = lesson,
                Student = student
            };

            KlugDataAccess_Repo.LessonsEvaluated.Add(lessonEvaluated);

            return lessonEvaluated;
        }
    }
}
