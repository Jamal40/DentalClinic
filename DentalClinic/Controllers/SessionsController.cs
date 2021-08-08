using DentalClinic.Data;
using DentalClinic.Models;
using DentalClinic.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DentalClinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        private readonly DentalClinicContext _context;

        public SessionsController(DentalClinicContext context)
        {
            _context = context;
        }

        // GET: api/Sessions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Session>>> GetSessions()
        {
            return await _context.Sessions.ToListAsync();
        }

        // GET: api/Sessions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Session>> GetSession(int id)
        {
            var session = await _context.Sessions.FindAsync(id);

            if (session == null)
            {
                return NotFound();
            }

            return session;
        }

        // PUT: api/Sessions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSession(int id, TransmittedSession transmittedSession)
        {
            var session = new Session()
            {
                SessionID = transmittedSession.SessionID,
                AmountPaid = transmittedSession.AmountPaid,
                AmountToPay = transmittedSession.AmountToPay,
                Description = transmittedSession.Description,
                Date = transmittedSession.Date,
                PatientID = transmittedSession.PatientID
            };
            if (id != session.SessionID)
            {
                return BadRequest();
            }

            _context.Entry(session).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SessionExists(id))
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

        // POST: api/Sessions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // used
        [HttpPost]
        public async Task<ActionResult<TransmittedSession>> PostSession(TransmittedSession transmittedSession)
        {
            var session = new Session()
            {
                AmountPaid = transmittedSession.AmountPaid,
                AmountToPay = transmittedSession.AmountToPay,
                Description = transmittedSession.Description,
                Date = transmittedSession.Date,
                PatientID = transmittedSession.PatientID,
            };
            _context.Sessions.Add(session);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSession", new { id = session.SessionID }, session);
        }

        // DELETE: api/Sessions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSession(int id)
        {
            var session = await _context.Sessions.FindAsync(id);
            if (session == null)
            {
                return NotFound();
            }

            _context.Sessions.Remove(session);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SessionExists(int id)
        {
            return _context.Sessions.Any(e => e.SessionID == id);
        }
    }
}
