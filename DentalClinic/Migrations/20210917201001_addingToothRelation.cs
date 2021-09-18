using Microsoft.EntityFrameworkCore.Migrations;

namespace DentalClinic.Migrations
{
    public partial class addingToothRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PatientID",
                table: "Teeth",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Teeth_PatientID",
                table: "Teeth",
                column: "PatientID");

            migrationBuilder.AddForeignKey(
                name: "FK_Teeth_Patients_PatientID",
                table: "Teeth",
                column: "PatientID",
                principalTable: "Patients",
                principalColumn: "PatientID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teeth_Patients_PatientID",
                table: "Teeth");

            migrationBuilder.DropIndex(
                name: "IX_Teeth_PatientID",
                table: "Teeth");

            migrationBuilder.DropColumn(
                name: "PatientID",
                table: "Teeth");
        }
    }
}
