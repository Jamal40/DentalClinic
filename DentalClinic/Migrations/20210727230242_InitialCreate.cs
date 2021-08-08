using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace DentalClinic.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GeneralMedicalIssues",
                columns: table => new
                {
                    IssueID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IssueName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralMedicalIssues", x => x.IssueID);
                });

            migrationBuilder.CreateTable(
                name: "Patients",
                columns: table => new
                {
                    PatientID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NationalID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SecondName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FamilyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patients", x => x.PatientID);
                });

            migrationBuilder.CreateTable(
                name: "GeneralMedicalIssuePatient",
                columns: table => new
                {
                    GeneralMedicalHistoryIssueID = table.Column<int>(type: "int", nullable: false),
                    PatientsPatientID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeneralMedicalIssuePatient", x => new { x.GeneralMedicalHistoryIssueID, x.PatientsPatientID });
                    table.ForeignKey(
                        name: "FK_GeneralMedicalIssuePatient_GeneralMedicalIssues_GeneralMedicalHistoryIssueID",
                        column: x => x.GeneralMedicalHistoryIssueID,
                        principalTable: "GeneralMedicalIssues",
                        principalColumn: "IssueID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GeneralMedicalIssuePatient_Patients_PatientsPatientID",
                        column: x => x.PatientsPatientID,
                        principalTable: "Patients",
                        principalColumn: "PatientID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Sessions",
                columns: table => new
                {
                    SessionID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AmountToPay = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    AmountPaid = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Description = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PatientID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sessions", x => x.SessionID);
                    table.ForeignKey(
                        name: "FK_Sessions_Patients_PatientID",
                        column: x => x.PatientID,
                        principalTable: "Patients",
                        principalColumn: "PatientID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GeneralMedicalIssuePatient_PatientsPatientID",
                table: "GeneralMedicalIssuePatient",
                column: "PatientsPatientID");

            migrationBuilder.CreateIndex(
                name: "IX_Sessions_PatientID",
                table: "Sessions",
                column: "PatientID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GeneralMedicalIssuePatient");

            migrationBuilder.DropTable(
                name: "Sessions");

            migrationBuilder.DropTable(
                name: "GeneralMedicalIssues");

            migrationBuilder.DropTable(
                name: "Patients");
        }
    }
}
