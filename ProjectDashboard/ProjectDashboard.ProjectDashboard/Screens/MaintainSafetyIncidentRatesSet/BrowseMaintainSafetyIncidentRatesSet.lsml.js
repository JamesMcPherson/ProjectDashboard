/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseMaintainSafetyIncidentRatesSet.PeriodBeginDateTime_postRender = function (element, contentItem) {
    // Write code here.
        contentItem.dataBind("stringValue", function (newValue) {
            if (newValue)
            {
                var monthYear = moment(newValue).format('MMM YYYY');
                $(element).find('.id-element').html(monthYear);
            }
            else
            {
               // var monthYear = moment(contentItem.value).format('MMM YYYY');
                //$(element).find('.id-element').html(monthYear);

            }
            
        });
};
