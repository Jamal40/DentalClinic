using DentalClinic.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DentalClinic.Data
{
    public class DentalClinicContext : IdentityDbContext
    {
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Tooth> Teeth { get; set; }
        public DbSet<ToothCondition> TeethConditions { get; set; }
        public DbSet<GeneralMedicalIssue> GeneralMedicalIssues { get; set; }
        public DentalClinicContext(DbContextOptions<DentalClinicContext> options) : base(options) { }
    }
}
