﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.Entities
{
    public class Contact : BaseEntity
    {
        public string? Fullname { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public string? Message { get; set; }
    }
}
