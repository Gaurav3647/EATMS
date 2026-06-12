using Microsoft.AspNetCore.Mvc;

namespace EATMS.API.Controllers
{
    [ApiController]
    [Route("api/health")]
    public class HealthController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new
            {
                status = "EATMS API is running",
                time = DateTime.UtcNow
            });
        }
    }
}
