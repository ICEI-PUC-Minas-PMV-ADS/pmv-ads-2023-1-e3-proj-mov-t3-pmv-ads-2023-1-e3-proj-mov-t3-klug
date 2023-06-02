using Klug_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public List<LessonEvaluated> GetLessonsEvaluated(string idStudent)
        {
            return KlugDataAccess_Repo.LessonsEvaluated.Where(u => u.Student.Id.Equals(idStudent)).OrderByDescending(o => o.EvaluatedTimestamp).ToList();
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
            return KlugDataAccess_Repo.LessonsPublished.Where(l => !l.Lesson.IsRemoved).OrderByDescending(o => o.PublishedTimestamp).ToList();
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

            foreach (var question in lesson.Questions)
                if (question.VerifyAnswer())
                    points++;

            var student = GetStudentByUser(lesson.IdStudent);

            int totalQuestions = lesson.Questions.Count();
            double media = totalQuestions * 0.6;

            var lessonEvaluated = new LessonEvaluated()
            {
                EvaluatedTimestamp = DateTime.Now.ToString("dd/MM/yyyy HH:mm"),
                EvaluatedValue = points,
                Id = Guid.NewGuid().ToString(),
                Lesson = lesson,
                Student = student,
                IsApproved = (points >= media) ? true : false
            };

            KlugDataAccess_Repo.LessonsEvaluated.Add(lessonEvaluated);

            return lessonEvaluated;
        }

        public List<Lesson> GetLessonsByTeacherId(string idTeacher)
        {
            return KlugDataAccess_Repo.Lessons
                .Where(u => u.Teacher.Id.Equals(idTeacher))
                .OrderByDescending(x => x.CreatedAt)
                .ToList();
        }

        public Lesson SetLessonRemoved(string idLesson, bool isRemoved)
        {
            var lesson = KlugDataAccess_Repo.Lessons.FirstOrDefault(l => l.Id.Equals(idLesson));
            if(lesson != null)
            {
                lesson.IsRemoved = isRemoved;
                return lesson;
            }

            return null;
        }

        public Lesson CreateLessonByFrontEnd(LessonByFrontend lessonByFrontend)
        {
            var lesson = new Lesson();

            var teacher = KlugDataAccess_Repo.Teachers.FirstOrDefault(t => t.Id.Equals(lessonByFrontend.IdTeacher));

            lesson.Id = Guid.NewGuid().ToString();
            lesson.Teacher = teacher;
            lesson.MaxValue = lessonByFrontend.Questions.Count();
            lesson.Name = lessonByFrontend.LessonName;
            lesson.CreatedAt = DateTime.Now;
            lesson.Questions = new List<Question>();

            foreach(var question in lessonByFrontend.Questions)
            {
                var questionDb = new Question();
                questionDb.Id = Guid.NewGuid().ToString();
                questionDb.Text = question.Question;
                questionDb.Answers = new Answer[]
                {
                    new Answer { Id = Guid.NewGuid().ToString(), Text = question.Options.A, IsCorrect = question.Options.Correct.ToUpper().Equals("A") },
                    new Answer { Id = Guid.NewGuid().ToString(), Text = question.Options.B, IsCorrect = question.Options.Correct.ToUpper().Equals("B") },
                    new Answer { Id = Guid.NewGuid().ToString(), Text = question.Options.C, IsCorrect = question.Options.Correct.ToUpper().Equals("C") },
                    new Answer { Id = Guid.NewGuid().ToString(), Text = question.Options.D, IsCorrect = question.Options.Correct.ToUpper().Equals("D") }
                };

                lesson.Questions.Add(questionDb);
            }

            var lessonPublished = new LessonPublished()
            {
                Id = Guid.NewGuid().ToString(),
                Lesson = lesson,
                PublishedTimestamp = DateTime.Now.ToString("dd/MM/yyyy mm/ss"),
            };

            KlugDataAccess_Repo.Lessons.Add(lesson);
            KlugDataAccess_Repo.LessonsPublished.Add(lessonPublished);

            return lesson;
        }
    }
}
