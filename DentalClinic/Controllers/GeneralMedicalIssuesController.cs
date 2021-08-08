using DentalClinic.Data;
using DentalClinic.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DentalClinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneralMedicalIssuesController : ControllerBase
    {
        private readonly DentalClinicContext _context;

        public GeneralMedicalIssuesController(DentalClinicContext context)
        {
            _context = context;
        }

        // GET: api/GeneralMedicalIssues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GeneralMedicalIssue>>> GetGeneralMedicalIssues()
        {
            return await _context.GeneralMedicalIssues.ToListAsync();
        }

        // GET: api/GeneralMedicalIssues/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GeneralMedicalIssue>> GetGeneralMedicalIssue(int id)
        {
            var generalMedicalIssue = await _context.GeneralMedicalIssues.FindAsync(id);

            if (generalMedicalIssue == null)
            {
                return NotFound();
            }

            return generalMedicalIssue;
        }

        // PUT: api/GeneralMedicalIssues/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGeneralMedicalIssue(int id, GeneralMedicalIssue generalMedicalIssue)
        {
            if (id != generalMedicalIssue.IssueID)
            {
                return BadRequest();
            }

            _context.Entry(generalMedicalIssue).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GeneralMedicalIssueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/GeneralMedicalIssues
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<GeneralMedicalIssue>> PostGeneralMedicalIssue(GeneralMedicalIssue generalMedicalIssue)
        {
            _context.GeneralMedicalIssues.Add(generalMedicalIssue);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGeneralMedicalIssue", new { id = generalMedicalIssue.IssueID }, generalMedicalIssue);
        }

        // DELETE: api/GeneralMedicalIssues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGeneralMedicalIssue(int id)
        {
            var generalMedicalIssue = await _context.GeneralMedicalIssues.FindAsync(id);
            if (generalMedicalIssue == null)
            {
                return NotFound();
            }

            _context.GeneralMedicalIssues.Remove(generalMedicalIssue);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GeneralMedicalIssueExists(int id)
        {
            return _context.GeneralMedicalIssues.Any(e => e.IssueID == id);
        }
    }
}
