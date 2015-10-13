/// <reference path="~/GeneratedArtifacts/viewModel.js" />
myapp.BrowseProjects.rows_render = function (element, contentItem) {
    // Write code here.
    var template = '<div class="msls-text"><span class="id-element">{0}</span></div>';
    //msls-font-style-large
    var jdeprojectId = contentItem.value.JDEProjectId;
    var projectName = contentItem.value.ProjectName;
    var division = contentItem.value.Division;
    var address1 = contentItem.value.Address1;
    var address2 = contentItem.value.Address2;
    var city = contentItem.value.City;
    var state = contentItem.value.StateProvince;
    var zip = contentItem.value.PostalCode;

    var projectOutput = '<strong>' + jdeprojectId + '</strong> ' + projectName;
    
    if (division) {
        division = '<div>Division: ' + division + '</div>';
    }
    else {
        division = '';
    }

    if (address1)
    {
        address1 = '<div>' + address1 + '</div>';
    }
    else {
        address1 = '';
    }

    var comma = ' ';
    if (state || zip)
    {
        comma = ', ';
    }

    if (address2) {address2 = '<div>' + address2 + '</div>' }
    else { address2 = ''; }

    if (!city) { city = ''; }
    if (!state) { state = ''; }
    if (!zip) { zip = ''; }

    var addressOutput = address1 + address2 + '<div>' + city + comma + state + ' ' + zip + '</div>'; 
    var field = stringFormat(template, projectOutput + division +  addressOutput);
    $(element).html(field);
};

var stringFormat = (function () {
    var pattern = /\{\{|\}\}|\{(\d+)\}/g;
    return function () {
        var parameters = arguments;
        return parameters[0].replace(pattern, function (match, group) {
            var value;
            if (match === "{{")
                return "{";
            if (match === "}}")
                return "}";
            value = parameters[parseInt(group, 10) + 1];
            return value ? value.toString() : "";
        });
    };
})();
