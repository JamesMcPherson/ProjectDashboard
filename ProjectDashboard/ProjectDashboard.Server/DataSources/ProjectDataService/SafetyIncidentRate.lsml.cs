using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;

namespace LightSwitchApplication
{
    public partial class SafetyIncidentRate
    {
        partial void SafetyIncidentRate_Created()
        {
            var entity = this;
            var currentDateTime = DateTime.UtcNow;
            entity.UpdatedBy = this.Application.User.Name;
            entity.UpdatedDateTime = currentDateTime;
            entity.CreatedBy = this.Application.User.Name;
            entity.CreatedDateTime = currentDateTime;
        }
    }
}