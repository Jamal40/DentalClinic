using System;
using System.ComponentModel.DataAnnotations;

namespace DentalClinic.Models
{
    public class Session
    {
        public int SessionID { get; set; }

        [Required]
        [Range(0, double.MaxValue)]
        public decimal AmountToPay { get; set; }

        [Range(0, double.MaxValue)]
        public decimal AmountPaid { get; set; }

        public string Description { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public int PatientID { get; set; }
        public Patient Patient { get; set; }
    }
}
