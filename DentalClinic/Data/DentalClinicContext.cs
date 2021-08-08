using DentalClinic.Models;
using Microsoft.EntityFrameworkCore;

namespace DentalClinic.Data
{
    public class DentalClinicContext : DbContext
    {
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<GeneralMedicalIssue> GeneralMedicalIssues { get; set; }
        public DentalClinicContext(DbContextOptions<DentalClinicContext> options) : base(options) { }
    }
}
