// Google Apps Script code to handle lead form submissions
function doPost(e) {
  try {
    // Log the incoming request for debugging
    Logger.log("Received request: " + e.postData.contents);

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.service) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Missing required fields",
        }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Invalid email format",
        }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Validate phone format
    if (!isValidPhone(data.phone)) {
      return ContentService.createTextOutput(
        JSON.stringify({
          status: "error",
          message: "Invalid phone number format",
        }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Get the active spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Sheet1");

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = spreadsheet.insertSheet("Sheet1");
      const headers = [
        "timestamp",
        "name",
        "phone",
        "email",
        "address",
        "service",
        "urgency",
        "message",
        "source",
        "status",
        "notes",
      ];
      newSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      newSheet.setFrozenRows(1);
      sheet = newSheet;
    }

    // Prepare the row data - exactly matching spreadsheet columns
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name,
      data.phone,
      data.email,
      data.address || "",
      data.service,
      data.urgency || "Not Specified",
      data.message || "",
      data.source || "Website Form",
      data.status || "New",
      data.notes || "",
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Format the new row
    const lastRow = sheet.getLastRow();
    const numColumns = sheet.getLastColumn();
    const dataRange = sheet.getRange(lastRow, 1, 1, numColumns);

    // Apply formatting
    dataRange.setWrap(true);
    dataRange.setVerticalAlignment("top");

    // Auto-resize columns to fit content
    sheet.autoResizeColumns(1, numColumns);

    // Log success for debugging
    Logger.log("Successfully added row: " + JSON.stringify(rowData));

    // Return success response with proper CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Lead submitted successfully",
        data: {
          timestamp: data.timestamp,
          name: data.name,
          email: data.email,
          service: data.service,
        },
      }),
    )
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader("Access-Control-Allow-Origin", "*")
      .addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      .addHeader("Access-Control-Allow-Headers", "Content-Type")
      .addHeader("Access-Control-Max-Age", "86400");
  } catch (error) {
    // Log the error for debugging
    Logger.log("Error processing submission: " + error.toString());

    // Return error response with proper CORS headers
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Error processing submission: " + error.toString(),
      }),
    )
      .setMimeType(ContentService.MimeType.JSON)
      .addHeader("Access-Control-Allow-Origin", "*")
      .addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      .addHeader("Access-Control-Allow-Headers", "Content-Type")
      .addHeader("Access-Control-Max-Age", "86400");
  }
}

// Handle preflight CORS requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .addHeader("Access-Control-Allow-Origin", "*")
    .addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .addHeader("Access-Control-Allow-Headers", "Content-Type")
    .addHeader("Access-Control-Max-Age", "86400");
}

// Utility function to validate email format
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Utility function to validate phone format
function isValidPhone(phone) {
  // Remove all non-numeric characters
  var cleanPhone = phone.replace(/\D/g, "");
  // Check if the cleaned number is between 10 and 15 digits
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
}

// Test function to verify the script is working
function testScript() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: "Test User",
    phone: "07990101321",
    email: "test@example.com",
    address: "123 Test St",
    service: "Roof Repair",
    urgency: "High",
    message: "Test Message",
    source: "Website Form",
    status: "New",
    notes: "Test Notes",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  Logger.log("Test result: " + result.getContent());
  return result;
}
