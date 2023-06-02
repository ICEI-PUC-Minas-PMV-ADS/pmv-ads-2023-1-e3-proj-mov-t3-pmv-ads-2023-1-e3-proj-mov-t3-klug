namespace Klug_API.Models
{
    public class LessonByFrontend
    {
        public string LessonName { get; set; }
        public List<QuestionByFrontEnd> Questions { get; set; }
        public string IdTeacher { get; set; }
    }

    public class QuestionByFrontEnd
    {
        public string Question { get; set; }
        public OptionsByFrontEnd Options { get; set; }
    }

    public class OptionsByFrontEnd
    {
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public string D { get; set; }
        public string Correct { get; set; }
    }
}
