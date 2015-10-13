/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.SafetyIncidentRate.created = function (entity) {
    // Write code here.
    var currentDateTime = new Date();
    entity.UpdatedBy = 'placeholder';
    entity.UpdatedDateTime = currentDateTime;
    entity.CreatedBy = 'placeholder';
    entity.CreatedDateTime = currentDateTime;
};

myapp.SafetyIncidentRate.initialize = function (screen) {
    var deleteButton = screen.findContentItem("btnDelete");
    if (screen.SafetyIncidentRate.details.entityState == msls.EntityState.added) {
        if (deleteButton) { deleteButton.isVisible = false; }
    } else {
        if (deleteButton) { deleteButton.isVisible = true; }
    }
};

myapp.SafetyIncidentRate.deleteIncident = function (screen) {
    screen.SafetyIncidentRate.deleteEntity();
    return myapp.commitChanges().then(null, function fail(e) {
        myapp.cancelChanges();
        throw e;
    });
}