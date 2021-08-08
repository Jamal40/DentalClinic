export interface GeneralMedicalIssue {
  issueID: number;
  issueName: string;
}

export interface GeneralMedicalIssue {
  issueID: number;
  issueName: string;
}

export interface Session {
  sessionID: number;
  amountToPay: number;
  amountPaid: number;
  description: string;
  date: Date;
  patientID: number;
}

export interface Patient {
  patientID: number;
  firstName: string;
  secondName: string;
  familyName: string;
  nationalID: string;
  phoneNumber: string;
  birthDate: Date;
  notes: string;
  generalMedicalHistory: GeneralMedicalIssue[];
  assignedSessions: Session[];
}

export interface TransmittedPatient {
  patient: Patient;
  assignedGeneralHealthIssues: GeneralMedicalIssue[];
  assignedSessions: Session[];
}
