using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DentalClinic.Models
{
    public class Patient
    {
        public Patient()
        {
            Sessions = new HashSet<Session>();
            GeneralMedicalHistory = new HashSet<GeneralMedicalIssue>();
        }
        public int PatientID { get; set; }

        [Required]
        public string NationalID { get; set; }

        public string PhoneNumber { get; set; }

        [Required]
        public string FirstName { get; set; }

        public string SecondName { get; set; }

        public string FamilyName { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        public string Notes { get; set; }

        public ICollection<Session> Sessions { get; set; }

        public ICollection<GeneralMedicalIssue> GeneralMedicalHistory { get; set; }

    }
}
