(function () {
  // Initialize an array to store the data
  const csvData = [];

  // Get all the div elements with class "row item message"
  const divElements = document.querySelectorAll('div.row.item.message');

  // Loop through the found elements and process each row
  for (let i = 0; i < divElements.length; i++) {
    const row = divElements[i];

    // Find the span element with class "date_non_mobile hidden-xs hidden-sm"
    const dateElement = row.querySelector('span.date_non_mobile.hidden-xs.hidden-sm');
    const date = dateElement ? dateElement.textContent.trim() : '';

    // Find the div element with class "col-xs-12 col-md-3 user remove_padding_only_mobile"
    const nameElement = row.querySelector('div.col-xs-12.col-md-3.user.remove_padding_only_mobile');
    const name = nameElement ? nameElement.textContent.trim() : '';

    // Find the div element with class "col-xs-12 col-md-6 remove_padding_only_mobile"
    const betreftElement = row.querySelector('div.col-xs-12.col-md-6.remove_padding_only_mobile');
    const betreft = betreftElement ? betreftElement.textContent.trim() : '';

    // Append the data to the csvData array
    csvData.push([date, name, betreft]);
  }

  // Function to convert the csvData array to CSV format
  function convertToCSV(dataArray) {
    return dataArray.map(row => row.join(',')).join('\n');
  }

  // Convert the csvData array to CSV format
  const csvContent = convertToCSV(csvData);

  // Create a Blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a download link and simulate a click to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.csv';
  a.click();

  // Clean up the URL object
  URL.revokeObjectURL(url);
})();
