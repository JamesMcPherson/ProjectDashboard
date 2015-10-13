using Microsoft.LightSwitch.Security.Server;
using Microsoft.LightSwitch;
using System.Text;
using System.Linq;
using System.Collections.Generic;
using System;
using System.Diagnostics;

namespace LightSwitchApplication
{
    public partial class ProjectDataServiceService
    {
        partial void Projects_Updating(Project entity)
        {
            //entity.UpdatedBy = this.Application.User.Name;
            //entity.UpdatedDateTime = DateTime.UtcNow;
        }

        partial void SafetyIncidentRates_Updating(SafetyIncidentRate entity)
        {
            entity.UpdatedBy = this.Application.User.Name;
            entity.UpdatedDateTime = DateTimeOffset.Now;
        }

        partial void SafetyIncidentRates_Inserting(SafetyIncidentRate entity)
        {
            var currentDateTime = DateTimeOffset.Now;
            entity.UpdatedBy = this.Application.User.Name;
            entity.UpdatedDateTime = currentDateTime;
            entity.CreatedBy = this.Application.User.Name;
            entity.CreatedDateTime = currentDateTime;
        }

        partial void Projects_Inserting(Project entity)
        {
            //var currentDateTime = DateTime.UtcNow;
            //entity.UpdatedBy = this.Application.User.Name;
            //entity.UpdatedDateTime = currentDateTime;
            //entity.CreatedBy = this.Application.User.Name;
            //entity.CreatedDateTime = currentDateTime;
        }
    }
}