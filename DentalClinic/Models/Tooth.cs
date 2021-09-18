using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DentalClinic.Models
{
    public class Tooth
    {
        public Tooth()
        {
            Conditions = new HashSet<ToothCondition>();
        }
        public int ID { get; set; }
        public int Number { get; set; }
        public ICollection<ToothCondition> Conditions { get; set; }
        public Patient Patient { get; set; }
    }
}
