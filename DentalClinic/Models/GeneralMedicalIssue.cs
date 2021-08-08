using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DentalClinic.Models
{
    public class GeneralMedicalIssue
    {
        [Key]
        public int IssueID { get; set; }

        public string IssueName { get; set; }

        public ICollection<Patient> Patients { get; set; }
    }
}
