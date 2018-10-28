using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace qcHackathon2018.Controllers
{
    [Produces("application/json")]
    [Route("api/questions")]
   
    public class QuestionsController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody] Models.Question question)
        {
        }
    }
}