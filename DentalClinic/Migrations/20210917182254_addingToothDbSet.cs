using Microsoft.EntityFrameworkCore.Migrations;

namespace DentalClinic.Migrations
{
    public partial class addingToothDbSet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Teeth",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Number = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teeth", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "TeethConditions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<int>(type: "int", nullable: false),
                    Degree = table.Column<int>(type: "int", nullable: false),
                    ToothID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TeethConditions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_TeethConditions_Teeth_ToothID",
                        column: x => x.ToothID,
                        principalTable: "Teeth",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TeethConditions_ToothID",
                table: "TeethConditions",
                column: "ToothID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TeethConditions");

            migrationBuilder.DropTable(
                name: "Teeth");
        }
    }
}
