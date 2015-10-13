/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.AddEditMaintainSafetyIncidentRates.Delete_execute = function (screen) {
    // Write code here.
    myapp.SafetyIncidentRate.deleteIncident(screen);
};
myapp.AddEditMaintainSafetyIncidentRates.created = function (screen) {
    // Write code here.
    myapp.SafetyIncidentRate.initialize(screen);
};