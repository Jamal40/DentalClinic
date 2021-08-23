using DentalClinic.Data;
using DentalClinic.Models;
using DentalClinic.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DentalClinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly DentalClinicContext _context;

        public PatientsController(DentalClinicContext context)
        {
            _context = context;
        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetFilteredPatients([FromQuery]string searchText="")
        {
            searchText = string.IsNullOrEmpty(searchText) ? "" : searchText;
            return await _context.Patients
                        .Where(
                                p => p.FirstName.Contains(searchText)
                                || p.SecondName.Contains(searchText)
                                || p.FamilyName.Contains(searchText)
                                || p.PhoneNumber.Contains(searchText)
                                || p.NationalID.Contains(searchText)
                               ).ToListAsync();
        }

        // GET: api/Patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TransmittedPatient>> GetPatient(int id)
        {
            var patient = await _context.Patients.Include(p => p.GeneralMedicalHistory).Include(p => p.Sessions).FirstOrDefaultAsync(p => p.PatientID == id);

            if (patient == null)
            {
                return NotFound();
            }

            var resultedPatient = new TransmittedPatient();
            resultedPatient.AssignedGeneralHealthIssues = patient.GeneralMedicalHistory.Select(issue => new TransmittedGeneralMedicalIssue() { IssueID = issue.IssueID, IssueName = issue.IssueName }).ToArray();
            resultedPatient.AssignedSessions = patient.Sessions
                                                       .Select(session => new TransmittedSession()
                                                       {
                                                           SessionID = session.SessionID,
                                                           AmountPaid = session.AmountPaid,
                                                           AmountToPay = session.AmountToPay,
                                                           Description = session.Description,
                                                           Date = session.Date,
                                                           PatientID = session.PatientID
                                                       }).ToArray();
            resultedPatient.Patient = patient;
            return resultedPatient;
        }

        // PUT: api/Patients/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatient(int id, TransmittedPatient editedPatient)
        {
            var patient = editedPatient.Patient;

            if (id != patient.PatientID)
            {
                return BadRequest();
            }

            var x = _context.Patients.Include(p => p.GeneralMedicalHistory).FirstOrDefault(p => p.PatientID == editedPatient.Patient.PatientID);

            x.GeneralMedicalHistory.Clear();

            try
            {
                _context.Update(x);
                await _context.SaveChangesAsync();
                _context.Entry(x).State = EntityState.Detached;
            }
            catch (Exception e)
            {

            }

            patient.GeneralMedicalHistory = _context.GeneralMedicalIssues.Where(issue => editedPatient.AssignedGeneralHealthIssues
                                                                          .Select(innerIssue => innerIssue.IssueID)
                                                                          .Contains(issue.IssueID)).ToList();
            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientExists(id))
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

        // POST: api/Patients
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Patient>> PostPatient(TransmittedPatient addedPatient)
        {
            var patient = addedPatient.Patient;
            patient.GeneralMedicalHistory = _context.GeneralMedicalIssues
                                            .Where(issue => addedPatient.AssignedGeneralHealthIssues
                                                                        .Select(innerIssue => innerIssue.IssueID)
                                                                        .Contains(issue.IssueID)).ToList();
            try
            {
                _context.Patients.Add(patient);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

            patient.GeneralMedicalHistory = null;

            return CreatedAtAction("GetPatient", new { id = patient.PatientID }, patient);
        }

        // DELETE: api/Patients/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.PatientID == id);
        }
    }
}
