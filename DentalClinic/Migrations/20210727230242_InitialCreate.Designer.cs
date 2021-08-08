﻿// <auto-generated />
using System;
using DentalClinic.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DentalClinic.Migrations
{
    [DbContext(typeof(DentalClinicContext))]
    [Migration("20210727230242_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.8")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DentalClinic.Models.GeneralMedicalIssue", b =>
                {
                    b.Property<int>("IssueID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("IssueName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IssueID");

                    b.ToTable("GeneralMedicalIssues");
                });

            modelBuilder.Entity("DentalClinic.Models.Patient", b =>
                {
                    b.Property<int>("PatientID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FamilyName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NationalID")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Notes")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SecondName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PatientID");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("DentalClinic.Models.Session", b =>
                {
                    b.Property<int>("SessionID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("AmountPaid")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("AmountToPay")
                        .HasColumnType("decimal(18,2)");

                    b.Property<decimal>("Description")
                        .HasColumnType("decimal(18,2)");

                    b.Property<int>("PatientID")
                        .HasColumnType("int");

                    b.HasKey("SessionID");

                    b.HasIndex("PatientID");

                    b.ToTable("Sessions");
                });

            modelBuilder.Entity("GeneralMedicalIssuePatient", b =>
                {
                    b.Property<int>("GeneralMedicalHistoryIssueID")
                        .HasColumnType("int");

                    b.Property<int>("PatientsPatientID")
                        .HasColumnType("int");

                    b.HasKey("GeneralMedicalHistoryIssueID", "PatientsPatientID");

                    b.HasIndex("PatientsPatientID");

                    b.ToTable("GeneralMedicalIssuePatient");
                });

            modelBuilder.Entity("DentalClinic.Models.Session", b =>
                {
                    b.HasOne("DentalClinic.Models.Patient", "Patient")
                        .WithMany("Sessions")
                        .HasForeignKey("PatientID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("GeneralMedicalIssuePatient", b =>
                {
                    b.HasOne("DentalClinic.Models.GeneralMedicalIssue", null)
                        .WithMany()
                        .HasForeignKey("GeneralMedicalHistoryIssueID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DentalClinic.Models.Patient", null)
                        .WithMany()
                        .HasForeignKey("PatientsPatientID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("DentalClinic.Models.Patient", b =>
                {
                    b.Navigation("Sessions");
                });
#pragma warning restore 612, 618
        }
    }
}
