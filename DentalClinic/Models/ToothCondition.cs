using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DentalClinic.Models
{
    public enum ConditionName
    {
        Caries = 0,
        Fracture = 1,
        Wear = 2,
        Missing = 3
    }
    public enum ConditionDegree
    {
        Mild = 0,
        Moderate = 1,
        Severe = 2,
    }
    public class ToothCondition
    {
        public int ID { get; set; }
        public ConditionName Name { get; set; }
        public ConditionDegree  Degree { get; set; }
        public Tooth Tooth { get; set; }
    }
}
