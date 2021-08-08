using DentalClinic.Models;

namespace DentalClinic.ViewModels
{
    public class TransmittedPatient
    {
        private Patient patient;

        public Patient Patient
        {
            get { return patient; }
            set { patient = value; patient.GeneralMedicalHistory = null; patient.Sessions = null; }
        }


        public TransmittedGeneralMedicalIssue[] AssignedGeneralHealthIssues { get; set; }
        public TransmittedSession[] AssignedSessions { get; set; }
    }
}
