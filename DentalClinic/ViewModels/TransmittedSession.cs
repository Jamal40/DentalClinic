using System;

namespace DentalClinic.ViewModels
{
    public class TransmittedSession
    {
        public int SessionID { get; set; }

        public decimal AmountToPay { get; set; }

        public decimal AmountPaid { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public int PatientID { get; set; }
    }
}
