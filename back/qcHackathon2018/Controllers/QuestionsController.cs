﻿using System;
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
        readonly QuizContext context;
        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Models.Question>> Get()
        {
            return new Models.Question[] {
                new Models.Question(){Text="hello"},
                new Models.Question(){Text="hi"}

            };
        }
        // POST api/values
        [HttpPost]
        public void Post([FromBody] Models.Question question)
        {
            context.Questions.Add(new Models.Question() { Text = "test" });
            context.SaveChanges();
        }
    }
}