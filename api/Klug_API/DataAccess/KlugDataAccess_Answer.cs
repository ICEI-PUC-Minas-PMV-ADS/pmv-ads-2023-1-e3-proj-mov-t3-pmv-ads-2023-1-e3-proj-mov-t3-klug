using Klug_API.Models;

namespace Klug_API.DataAccess
{
    public partial class KlugDataAccess
    {
        public List<Answer> GetAnswers()
        {
            return KlugDataAccess_Repo.Answers;
        }
    }
}
