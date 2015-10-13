/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewMaintainSafetyIncidentRates.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.SafetyIncidentRate.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.SafetyIncidentRate." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}
