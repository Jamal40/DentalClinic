using Microsoft.EntityFrameworkCore.Migrations;

namespace DentalClinic.Migrations
{
    public partial class ChangingRelationOfTeeth : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teeth_Patients_PatientID",
                table: "Teeth");

            migrationBuilder.RenameColumn(
                name: "PatientID",
                table: "Teeth",
                newName: "SessionID");

            migrationBuilder.RenameIndex(
                name: "IX_Teeth_PatientID",
                table: "Teeth",
                newName: "IX_Teeth_SessionID");

            migrationBuilder.AddForeignKey(
                name: "FK_Teeth_Sessions_SessionID",
                table: "Teeth",
                column: "SessionID",
                principalTable: "Sessions",
                principalColumn: "SessionID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teeth_Sessions_SessionID",
                table: "Teeth");

            migrationBuilder.RenameColumn(
                name: "SessionID",
                table: "Teeth",
                newName: "PatientID");

            migrationBuilder.RenameIndex(
                name: "IX_Teeth_SessionID",
                table: "Teeth",
                newName: "IX_Teeth_PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_Teeth_Patients_PatientID",
                table: "Teeth",
                column: "PatientID",
                principalTable: "Patients",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
