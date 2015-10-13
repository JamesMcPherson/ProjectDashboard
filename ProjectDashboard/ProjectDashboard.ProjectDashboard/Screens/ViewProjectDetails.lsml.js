/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProjectDetails.Period_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("stringValue", function (newValue) {
        if (newValue) {
            var monthYear = moment(newValue).format('MMM YYYY');
            $(element).find('.id-element').html(monthYear);
        }
        else {
            // var monthYear = moment(contentItem.value).format('MMM YYYY');
            //$(element).find('.id-element').html(monthYear);

        }

    });
};
myapp.ViewProjectDetails.Address1_postRender = function (element, contentItem) {
    // Write code here.
    var template = '<div class="msls-text"><span class="id-element">{0}</span></div>';
    var address1 = contentItem.value;
    var address2 = contentItem.screen.Project.Address2;
    var city = contentItem.screen.Project.City;
    var state = contentItem.screen.Project.StateProvince;
    var zip = contentItem.screen.Project.PostalCode;
    if (address1) {
        address1 = '<div>' + address1 + '</div>';
    }
    else {
        address1 = '';
    }

    var comma = ' ';
    if (state || zip) {
        comma = ', ';
    }

    if (address2) { address2 = '<div>' + address2 + '</div>' }
    else { address2 = ''; }

    if (!city) { city = ''; }
    if (!state) { state = ''; }
    if (!zip) { zip = ''; }

    var addressOutput = address1 + address2 + '<div>' + city + comma + state + ' ' + zip + '</div>';
    var field = stringFormat(template, addressOutput);
    $(element).html(field);
};
