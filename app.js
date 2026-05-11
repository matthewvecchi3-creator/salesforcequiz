const APP_NAME = "MV's Upskilling - Salesforce";
const PASSING_SCORE = 70;
const STORAGE_KEY = "mv-salesforce-quiz-100-mc-random-v2";
const QUESTIONS = [
  {
    "id": 1,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "What is Salesforce primarily used for?",
    "options": [
      "Managing customer relationships and business processes",
      "Hosting video games",
      "Editing photos",
      "Running operating systems"
    ],
    "answer": "Managing customer relationships and business processes",
    "explanation": "Salesforce is a CRM platform used to manage customer, sales, service, marketing, and operational data."
  },
  {
    "id": 2,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "In Salesforce, what is an org?",
    "options": [
      "A type of email template",
      "A single report",
      "A browser extension",
      "A company's Salesforce environment"
    ],
    "answer": "A company's Salesforce environment",
    "explanation": "An org is the Salesforce environment where a company's configuration, data, users, and apps live."
  },
  {
    "id": 3,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "Which area do admins use to configure most Salesforce settings?",
    "options": [
      "Recycle Bin",
      "Setup",
      "Chatter Feed",
      "Calendar"
    ],
    "answer": "Setup",
    "explanation": "Setup is the main administration area for configuration, security, objects, automation, and more."
  },
  {
    "id": 4,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "The Salesforce user interface most users work in today is called Lightning ________.",
    "answer": "Experience",
    "explanation": "Lightning Experience is Salesforce's modern interface.",
    "options": [
      "Experience",
      "Object Manager",
      "Classic",
      "Console"
    ]
  },
  {
    "id": 5,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "What is an app in Salesforce?",
    "options": [
      "A backup copy of the database",
      "A single field on a page layout",
      "A collection of items like tabs, objects, and pages that support a business process",
      "A separate phone application only"
    ],
    "answer": "A collection of items like tabs, objects, and pages that support a business process",
    "explanation": "Salesforce apps group related items so users can work within a process such as Sales or Service."
  },
  {
    "id": 6,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "What does the App Launcher help users do?",
    "options": [
      "Export all records automatically",
      "Delete org data",
      "Change password policies only",
      "Find and open apps and items"
    ],
    "answer": "Find and open apps and items",
    "explanation": "The App Launcher gives users a way to access apps and items they have permission to use."
  },
  {
    "id": 7,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "Which option best describes a Salesforce record?",
    "options": [
      "A user profile",
      "A dashboard component",
      "A field type",
      "A single row of data for an object, such as one Account"
    ],
    "answer": "A single row of data for an object, such as one Account",
    "explanation": "A record is one instance of an object, like a specific customer account or opportunity."
  },
  {
    "id": 8,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "Which option is an example of a standard Salesforce object?",
    "options": [
      "Account",
      "Price Waterfall Sheet",
      "Customer SQL View",
      "Net Revenue Custom Table"
    ],
    "answer": "Account",
    "explanation": "Standard objects such as Account, Contact, Lead, and Opportunity are included with Salesforce."
  },
  {
    "id": 9,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "What is Trailhead?",
    "options": [
      "A data import tool only",
      "A report chart format",
      "A type of object relationship",
      "Salesforce's learning platform"
    ],
    "answer": "Salesforce's learning platform",
    "explanation": "Trailhead is Salesforce's official learning platform for role-based modules and trails."
  },
  {
    "id": 10,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "Which statement best describes Salesforce metadata?",
    "options": [
      "Only customer email addresses",
      "Configuration that defines how the org works",
      "A spreadsheet export",
      "Only deleted records"
    ],
    "answer": "Configuration that defines how the org works",
    "explanation": "Metadata includes configuration such as objects, fields, page layouts, automations, and security settings."
  },
  {
    "id": 11,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "What is a sandbox commonly used for?",
    "options": [
      "Testing changes before deploying to production",
      "Replacing user profiles",
      "Sending marketing emails only",
      "Archiving dashboards"
    ],
    "answer": "Testing changes before deploying to production",
    "explanation": "Sandboxes allow teams to test configuration and development changes away from production data and users."
  },
  {
    "id": 12,
    "module": "Salesforce Fundamentals",
    "type": "mc",
    "prompt": "Which environment should usually be protected most carefully?",
    "options": [
      "A training sandbox",
      "A local text editor",
      "A developer playground",
      "Production"
    ],
    "answer": "Production",
    "explanation": "Production is the live business environment where real users and data are active."
  },
  {
    "id": 13,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is an object in Salesforce?",
    "options": [
      "A dashboard color",
      "A table-like structure that stores a type of data",
      "A single login session",
      "A password rule"
    ],
    "answer": "A table-like structure that stores a type of data",
    "explanation": "Objects store records of a particular type, similar to tables in a database."
  },
  {
    "id": 14,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a field in Salesforce?",
    "options": [
      "A folder for reports only",
      "A column-like data element on an object",
      "A login method",
      "A whole database"
    ],
    "answer": "A column-like data element on an object",
    "explanation": "Fields capture specific values on records, such as name, amount, date, or status."
  },
  {
    "id": 15,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is the difference between standard and custom objects?",
    "options": [
      "There is no difference",
      "Custom objects cannot store records",
      "Standard objects come with Salesforce; custom objects are created for business-specific needs",
      "Standard objects can never be reported on"
    ],
    "answer": "Standard objects come with Salesforce; custom objects are created for business-specific needs",
    "explanation": "Standard objects are built in. Custom objects are created to support unique business processes."
  },
  {
    "id": 16,
    "module": "Data Model",
    "type": "mc",
    "prompt": "Custom objects commonly end with two underscores and the letter c in the API name, like Project___.",
    "answer": "c",
    "explanation": "Custom object API names use the __c suffix.",
    "options": [
      "x",
      "custom",
      "a",
      "c"
    ]
  },
  {
    "id": 17,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What does a lookup relationship do?",
    "options": [
      "Encrypts every field",
      "Links records without requiring strong parent-child ownership",
      "Automatically deletes all users",
      "Turns a dashboard into a report"
    ],
    "answer": "Links records without requiring strong parent-child ownership",
    "explanation": "Lookup relationships connect records but are generally looser than master-detail relationships."
  },
  {
    "id": 18,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a master-detail relationship best known for?",
    "options": [
      "A report chart style",
      "A login setting",
      "A strong parent-child relationship where detail records depend on the master",
      "A type of email alert"
    ],
    "answer": "A strong parent-child relationship where detail records depend on the master",
    "explanation": "Master-detail relationships tightly link records and often inherit ownership and sharing from the parent."
  },
  {
    "id": 19,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a formula field?",
    "options": [
      "A field that manually sends emails",
      "A field that stores uploaded documents only",
      "A field that calculates a value from other data",
      "A field used only for passwords"
    ],
    "answer": "A field that calculates a value from other data",
    "explanation": "Formula fields calculate values dynamically based on other fields, functions, or related data."
  },
  {
    "id": 20,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a picklist field?",
    "options": [
      "A free-text paragraph only",
      "A field with a defined list of selectable values",
      "A dashboard folder",
      "A type of security role"
    ],
    "answer": "A field with a defined list of selectable values",
    "explanation": "Picklists standardize values and reduce messy data entry."
  },
  {
    "id": 21,
    "module": "Data Model",
    "type": "mc",
    "prompt": "Why are validation rules useful?",
    "options": [
      "They replace all reports",
      "They prevent users from saving records that do not meet defined criteria",
      "They import data from spreadsheets",
      "They automatically create dashboards"
    ],
    "answer": "They prevent users from saving records that do not meet defined criteria",
    "explanation": "Validation rules protect data quality by enforcing business rules before record save."
  },
  {
    "id": 22,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a record type commonly used for?",
    "options": [
      "Running SQL queries",
      "Deleting old fields",
      "Encrypting dashboards",
      "Showing different business processes, picklist values, or page layouts for the same object"
    ],
    "answer": "Showing different business processes, picklist values, or page layouts for the same object",
    "explanation": "Record types support variations in process, layout, and picklist choices for the same object."
  },
  {
    "id": 23,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is a page layout?",
    "options": [
      "A user password file",
      "A configuration that controls fields, sections, and related lists users see on records",
      "A data backup",
      "A report export"
    ],
    "answer": "A configuration that controls fields, sections, and related lists users see on records",
    "explanation": "Page layouts help determine how record information is presented to users."
  },
  {
    "id": 24,
    "module": "Data Model",
    "type": "mc",
    "prompt": "What is Schema Builder used for?",
    "options": [
      "Changing browser fonts",
      "Building email campaigns only",
      "Viewing and managing objects, fields, and relationships visually",
      "Approving expense reports"
    ],
    "answer": "Viewing and managing objects, fields, and relationships visually",
    "explanation": "Schema Builder gives a visual view of the data model and relationships."
  },
  {
    "id": 25,
    "module": "Data Model",
    "type": "mc",
    "prompt": "Which design choice usually improves data quality?",
    "options": [
      "Creating duplicate fields for the same concept",
      "Avoiding required fields entirely",
      "Using picklists and validation rules where values should be standardized",
      "Letting every user type anything in every field"
    ],
    "answer": "Using picklists and validation rules where values should be standardized",
    "explanation": "Structured fields and validation make reporting and process automation more reliable."
  },
  {
    "id": 26,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What does a profile primarily control?",
    "options": [
      "Only dashboard colors",
      "Only the user's email signature",
      "A user's baseline permissions and access settings",
      "Only the company logo"
    ],
    "answer": "A user's baseline permissions and access settings",
    "explanation": "Profiles define baseline access such as object permissions, app access, and system permissions."
  },
  {
    "id": 27,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is a permission set used for?",
    "options": [
      "Granting additional permissions to users without changing their profile",
      "Creating report charts",
      "Deleting duplicate records",
      "Changing the company fiscal year"
    ],
    "answer": "Granting additional permissions to users without changing their profile",
    "explanation": "Permission sets extend access for specific users while avoiding too many profiles."
  },
  {
    "id": 28,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What does organization-wide default sharing control?",
    "options": [
      "The login page background",
      "The default dashboard color",
      "The baseline record access level for an object",
      "The default report format only"
    ],
    "answer": "The baseline record access level for an object",
    "explanation": "OWDs set the starting point for record-level sharing across the org."
  },
  {
    "id": 29,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What does a role hierarchy help with?",
    "options": [
      "Exporting attachments",
      "Extending record visibility upward through management structure",
      "Creating custom tabs",
      "Formatting phone numbers"
    ],
    "answer": "Extending record visibility upward through management structure",
    "explanation": "Role hierarchies can allow managers to see records owned by users below them."
  },
  {
    "id": 30,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is field-level security?",
    "options": [
      "Control over which users can see or edit specific fields",
      "A setting for dashboard colors",
      "A process for merging accounts",
      "A way to sort reports alphabetically"
    ],
    "answer": "Control over which users can see or edit specific fields",
    "explanation": "Field-level security restricts visibility/editability of sensitive fields regardless of page layout."
  },
  {
    "id": 31,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "Which is usually better than creating many nearly identical profiles?",
    "options": [
      "Give everyone System Administrator",
      "Create more duplicate profiles",
      "Disable sharing settings",
      "Use permission sets for incremental access"
    ],
    "answer": "Use permission sets for incremental access",
    "explanation": "Permission sets are a cleaner way to grant extra access without exploding profile count."
  },
  {
    "id": 32,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is a sharing rule used for?",
    "options": [
      "Importing a CSV",
      "Changing the app logo",
      "Creating a validation error",
      "Opening record access to groups of users based on criteria or ownership"
    ],
    "answer": "Opening record access to groups of users based on criteria or ownership",
    "explanation": "Sharing rules extend record access beyond the org-wide default."
  },
  {
    "id": 33,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is the principle of least privilege?",
    "options": [
      "Hide all data from every user",
      "Give every user maximum access",
      "Give users only the access they need to do their jobs",
      "Use one login for a team"
    ],
    "answer": "Give users only the access they need to do their jobs",
    "explanation": "Least privilege reduces risk by limiting unnecessary access."
  },
  {
    "id": 34,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is a public group commonly used for?",
    "options": [
      "Creating formula fields",
      "Storing picklist values",
      "Changing fiscal periods",
      "Grouping users for sharing rules or collaboration"
    ],
    "answer": "Grouping users for sharing rules or collaboration",
    "explanation": "Public groups make it easier to manage access and collaboration for sets of users."
  },
  {
    "id": 35,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is the difference between object access and record access?",
    "options": [
      "Object access only controls dashboards",
      "Object access controls whether users can interact with a type of data; record access controls which specific records they can see",
      "There is no difference",
      "Record access only controls passwords"
    ],
    "answer": "Object access controls whether users can interact with a type of data; record access controls which specific records they can see",
    "explanation": "A user may have access to the Account object but only see some Account records."
  },
  {
    "id": 36,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "The baseline record sharing model is set with organization-wide ________.",
    "answer": "defaults",
    "explanation": "Organization-wide defaults establish the baseline record visibility for each object.",
    "options": [
      "defaults",
      "queues",
      "profiles",
      "rules"
    ]
  },
  {
    "id": 37,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "Why might a user see a field on a page layout but not be able to view it?",
    "options": [
      "The app is not installed",
      "The dashboard is private",
      "The user's browser is too old",
      "Field-level security blocks access"
    ],
    "answer": "Field-level security blocks access",
    "explanation": "Field-level security can override what appears on a layout by hiding restricted fields."
  },
  {
    "id": 38,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "What is a permission set group?",
    "options": [
      "A group chat only",
      "A report folder",
      "A bundle of permission sets assigned together",
      "A duplicate account rule"
    ],
    "answer": "A bundle of permission sets assigned together",
    "explanation": "Permission set groups combine related permission sets to simplify assignment and management."
  },
  {
    "id": 39,
    "module": "Security & Access",
    "type": "mc",
    "prompt": "Which user should generally have System Administrator access?",
    "options": [
      "Only trusted admins who need broad configuration rights",
      "No one ever",
      "Every external partner",
      "Every sales rep"
    ],
    "answer": "Only trusted admins who need broad configuration rights",
    "explanation": "Admin access is powerful and should be limited to appropriate users."
  },
  {
    "id": 40,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What is a Lead in Salesforce?",
    "options": [
      "A dashboard filter",
      "A potential customer or prospect not yet qualified",
      "A user permission",
      "A closed invoice"
    ],
    "answer": "A potential customer or prospect not yet qualified",
    "explanation": "Leads represent prospects before they are qualified and converted."
  },
  {
    "id": 41,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What typically happens when a qualified Lead is converted?",
    "options": [
      "It becomes a permission set",
      "It is permanently deleted",
      "It becomes a dashboard",
      "It can create an Account, Contact, and optionally an Opportunity"
    ],
    "answer": "It can create an Account, Contact, and optionally an Opportunity",
    "explanation": "Lead conversion moves qualified prospect data into Account, Contact, and Opportunity records."
  },
  {
    "id": 42,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What does an Account usually represent?",
    "options": [
      "A password policy",
      "A company or organization you do business with",
      "A single field",
      "A dashboard widget"
    ],
    "answer": "A company or organization you do business with",
    "explanation": "Accounts often represent companies, households, or organizations depending on the data model."
  },
  {
    "id": 43,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What does a Contact usually represent?",
    "options": [
      "An individual person associated with an account",
      "A report folder",
      "A validation error",
      "A sales forecast period"
    ],
    "answer": "An individual person associated with an account",
    "explanation": "Contacts represent people associated with accounts."
  },
  {
    "id": 44,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What is an Opportunity used for?",
    "options": [
      "Storing company logos",
      "Creating user profiles",
      "Tracking a potential revenue-generating deal",
      "Running imports only"
    ],
    "answer": "Tracking a potential revenue-generating deal",
    "explanation": "Opportunities track sales deals, value, probability, stage, and close timing."
  },
  {
    "id": 45,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "Which field is especially important for pipeline reporting?",
    "options": [
      "Profile Description",
      "Report Folder Color",
      "User Time Zone",
      "Opportunity Stage"
    ],
    "answer": "Opportunity Stage",
    "explanation": "Opportunity stage drives pipeline, forecast, and sales process reporting."
  },
  {
    "id": 46,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What is a Sales Path used for?",
    "options": [
      "Guiding users through stages with key fields and guidance",
      "Deleting records in bulk",
      "Turning off dashboards",
      "Creating a sandbox"
    ],
    "answer": "Guiding users through stages with key fields and guidance",
    "explanation": "Sales Path gives stage-specific guidance and highlights important fields."
  },
  {
    "id": 47,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What does forecast category help represent?",
    "options": [
      "How an opportunity contributes to forecast commitments",
      "Whether a user has MFA enabled",
      "Which profile owns a field",
      "Which validation rule is active"
    ],
    "answer": "How an opportunity contributes to forecast commitments",
    "explanation": "Forecast category helps categorize pipeline for forecasting, such as pipeline, best case, commit, or closed."
  },
  {
    "id": 48,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "Why is close date important on an opportunity?",
    "options": [
      "It stores contact email",
      "It controls password resets",
      "It changes user permissions",
      "It determines when expected revenue is likely to land"
    ],
    "answer": "It determines when expected revenue is likely to land",
    "explanation": "Close date places opportunity value into a forecast or reporting period."
  },
  {
    "id": 49,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What does probability on an opportunity usually indicate?",
    "options": [
      "Estimated likelihood of winning the deal",
      "Report refresh speed",
      "Number of contacts",
      "Field-level security"
    ],
    "answer": "Estimated likelihood of winning the deal",
    "explanation": "Probability helps estimate expected value and pipeline health."
  },
  {
    "id": 50,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What is an activity in Salesforce sales context?",
    "options": [
      "A data import template only",
      "A task, event, email, or interaction related to records",
      "A permission set",
      "A custom report type"
    ],
    "answer": "A task, event, email, or interaction related to records",
    "explanation": "Activities capture interactions like calls, meetings, tasks, and emails."
  },
  {
    "id": 51,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "Which question is a pipeline dashboard likely to answer?",
    "options": [
      "How much opportunity value is open by stage and close month?",
      "How many fields exist in Setup only?",
      "What is the browser cache size?",
      "Which user has the nicest profile photo?"
    ],
    "answer": "How much opportunity value is open by stage and close month?",
    "explanation": "Pipeline dashboards summarize open opportunity value by dimensions like stage, owner, product, and close date."
  },
  {
    "id": 52,
    "module": "Sales Cloud",
    "type": "mc",
    "prompt": "What is the best reason to standardize opportunity stages?",
    "options": [
      "Automatic duplicate removal",
      "More colorful dashboards",
      "Consistent forecasting and process reporting",
      "Fewer login attempts"
    ],
    "answer": "Consistent forecasting and process reporting",
    "explanation": "Consistent stages make pipeline reporting meaningful across teams."
  },
  {
    "id": 53,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a Salesforce report?",
    "options": [
      "A sandbox refresh",
      "A user password setting",
      "A custom object only",
      "A filtered, organized view of records and fields"
    ],
    "answer": "A filtered, organized view of records and fields",
    "explanation": "Reports let users view, filter, group, and summarize Salesforce data."
  },
  {
    "id": 54,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What does a report type define?",
    "options": [
      "The Salesforce edition only",
      "Which objects and fields are available for a report",
      "The exact dashboard colors",
      "The user's login hours"
    ],
    "answer": "Which objects and fields are available for a report",
    "explanation": "Report types determine the data set available to a report based on objects and relationships."
  },
  {
    "id": 55,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a dashboard?",
    "options": [
      "A user profile",
      "A data import tool",
      "A visual display of report-based metrics and charts",
      "A field validation rule"
    ],
    "answer": "A visual display of report-based metrics and charts",
    "explanation": "Dashboards visualize data from source reports using charts, tables, metrics, and gauges."
  },
  {
    "id": 56,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a summary report useful for?",
    "options": [
      "Creating object relationships",
      "Grouping rows and showing subtotals",
      "Managing API limits",
      "Changing passwords"
    ],
    "answer": "Grouping rows and showing subtotals",
    "explanation": "Summary reports group records and provide subtotals for business analysis."
  },
  {
    "id": 57,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a matrix report useful for?",
    "options": [
      "Sending mass emails only",
      "Setting user roles only",
      "Grouping data by rows and columns",
      "Creating contacts"
    ],
    "answer": "Grouping data by rows and columns",
    "explanation": "Matrix reports summarize data across both row and column groupings."
  },
  {
    "id": 58,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a joined report?",
    "options": [
      "An automation rule",
      "A report that joins two dashboards permanently",
      "A duplicate account tool",
      "A report with multiple blocks that can show different report types"
    ],
    "answer": "A report with multiple blocks that can show different report types",
    "explanation": "Joined reports let users compare related information in separate blocks."
  },
  {
    "id": 59,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What does a dashboard running user affect?",
    "options": [
      "The dashboard title font only",
      "The report export format only",
      "The data visibility used to populate the dashboard",
      "The user's password"
    ],
    "answer": "The data visibility used to populate the dashboard",
    "explanation": "Dashboards can display data based on the running user's access, affecting what viewers see."
  },
  {
    "id": 60,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What does a report filter do?",
    "options": [
      "Creates fields automatically",
      "Changes the org's security model",
      "Deletes records after export",
      "Limits which records appear in the report"
    ],
    "answer": "Limits which records appear in the report",
    "explanation": "Filters narrow reports to the relevant records for the question being answered."
  },
  {
    "id": 61,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What is a bucket field?",
    "options": [
      "A way to group report values without creating a new field on the object",
      "A type of automation",
      "A security role",
      "A place to store files"
    ],
    "answer": "A way to group report values without creating a new field on the object",
    "explanation": "Bucket fields let report builders categorize values directly in a report."
  },
  {
    "id": 62,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What does conditional highlighting help with?",
    "options": [
      "Importing leads",
      "Calling attention to values based on thresholds",
      "Creating objects",
      "Changing user permissions"
    ],
    "answer": "Calling attention to values based on thresholds",
    "explanation": "Conditional highlighting visually flags metrics or summaries that meet thresholds."
  },
  {
    "id": 63,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "Which report question is most business-focused?",
    "options": [
      "Which products have the highest opportunity value this quarter?",
      "Which button is blue?",
      "Which user opened Setup yesterday only?",
      "Which page has the most whitespace?"
    ],
    "answer": "Which products have the highest opportunity value this quarter?",
    "explanation": "Business reports should answer decisions about revenue, customers, pipeline, operations, or performance."
  },
  {
    "id": 64,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "What should you check if a user says a report is missing records?",
    "options": [
      "Only the chart color",
      "Only the browser zoom level",
      "Only the user's email signature",
      "Filters, report type, sharing access, and field/object permissions"
    ],
    "answer": "Filters, report type, sharing access, and field/object permissions",
    "explanation": "Missing report data is often caused by filters, report type limitations, or access restrictions."
  },
  {
    "id": 65,
    "module": "Reports & Dashboards",
    "type": "mc",
    "prompt": "A dashboard component is usually powered by a source ________.",
    "answer": "report",
    "explanation": "Dashboard components visualize data from source reports.",
    "options": [
      "dashboard",
      "flow",
      "object",
      "report"
    ]
  },
  {
    "id": 66,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is Salesforce Flow used for?",
    "options": [
      "Only creating dashboards",
      "Automating business processes with clicks, logic, and screens",
      "Only resetting passwords",
      "Only editing CSS"
    ],
    "answer": "Automating business processes with clicks, logic, and screens",
    "explanation": "Flow is Salesforce's primary declarative automation tool."
  },
  {
    "id": 67,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a record-triggered flow?",
    "options": [
      "A chart type",
      "Automation that runs when a record is created, updated, or deleted",
      "A role hierarchy setting",
      "A data export file"
    ],
    "answer": "Automation that runs when a record is created, updated, or deleted",
    "explanation": "Record-triggered flows respond to changes on records."
  },
  {
    "id": 68,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a screen flow?",
    "options": [
      "A data model diagram",
      "A sandbox type",
      "A guided user interaction with screens and logic",
      "A dashboard image"
    ],
    "answer": "A guided user interaction with screens and logic",
    "explanation": "Screen flows guide users through forms, choices, and actions."
  },
  {
    "id": 69,
    "module": "Automation",
    "type": "mc",
    "prompt": "Why should automation be tested before production?",
    "options": [
      "It can update data or affect users at scale",
      "It only changes colors",
      "It automatically fixes itself",
      "It cannot affect records"
    ],
    "answer": "It can update data or affect users at scale",
    "explanation": "Automation can have broad impact, so testing helps prevent data or process issues."
  },
  {
    "id": 70,
    "module": "Automation",
    "type": "mc",
    "prompt": "What does a decision element in Flow do?",
    "options": [
      "Exports a CSV automatically",
      "Changes a user's photo",
      "Creates a report chart",
      "Branches logic based on conditions"
    ],
    "answer": "Branches logic based on conditions",
    "explanation": "Decision elements route a flow along different paths depending on criteria."
  },
  {
    "id": 71,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a common use for an email alert?",
    "options": [
      "Change field-level security",
      "Delete a dashboard",
      "Notify users or customers when a business condition is met",
      "Create an object relationship"
    ],
    "answer": "Notify users or customers when a business condition is met",
    "explanation": "Email alerts can notify stakeholders when records meet defined conditions."
  },
  {
    "id": 72,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a validation rule compared with Flow?",
    "options": [
      "A data import wizard",
      "Exactly the same as a dashboard",
      "A rule that blocks invalid saves, while Flow can perform broader automation",
      "A user login history"
    ],
    "answer": "A rule that blocks invalid saves, while Flow can perform broader automation",
    "explanation": "Validation rules enforce save criteria; Flow can create/update records, send notifications, and guide users."
  },
  {
    "id": 73,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a good automation design habit?",
    "options": [
      "Ignore data quality",
      "Use unclear names",
      "Document the business purpose and test edge cases",
      "Build every automation directly in production without testing"
    ],
    "answer": "Document the business purpose and test edge cases",
    "explanation": "Good naming, documentation, and testing make automation safer and easier to maintain."
  },
  {
    "id": 74,
    "module": "Automation",
    "type": "mc",
    "prompt": "Which scenario is a good fit for a screen flow?",
    "options": [
      "Replacing every report",
      "Guiding a rep through a structured intake form",
      "Deleting old profiles",
      "Changing all passwords nightly"
    ],
    "answer": "Guiding a rep through a structured intake form",
    "explanation": "Screen flows are useful when users need guided steps and inputs."
  },
  {
    "id": 75,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a scheduled flow?",
    "options": [
      "A report chart that refreshes visually",
      "A user permission",
      "Automation that runs at a defined time or frequency",
      "A field formula"
    ],
    "answer": "Automation that runs at a defined time or frequency",
    "explanation": "Scheduled flows run on a recurring schedule, often for maintenance or batch process needs."
  },
  {
    "id": 76,
    "module": "Automation",
    "type": "mc",
    "prompt": "What is a risky automation smell?",
    "options": [
      "Using criteria that match the business rule",
      "Clear naming and documentation",
      "Testing in sandbox first",
      "Multiple automations updating the same fields without clear order or ownership"
    ],
    "answer": "Multiple automations updating the same fields without clear order or ownership",
    "explanation": "Overlapping automation can cause unexpected results and maintenance difficulty."
  },
  {
    "id": 77,
    "module": "Automation",
    "type": "mc",
    "prompt": "Salesforce's main declarative automation tool is called ________.",
    "answer": "Flow",
    "explanation": "Flow is Salesforce's main no-code/low-code automation tool.",
    "options": [
      "Flow",
      "Report Builder",
      "Process Builder",
      "Data Loader"
    ]
  },
  {
    "id": 78,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What is the Data Import Wizard commonly used for?",
    "options": [
      "Writing Apex code",
      "Creating role hierarchies",
      "Importing common standard and custom object records through a guided interface",
      "Changing report colors"
    ],
    "answer": "Importing common standard and custom object records through a guided interface",
    "explanation": "The Data Import Wizard helps import data through a guided Salesforce interface."
  },
  {
    "id": 79,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What is Data Loader commonly used for?",
    "options": [
      "Creating dashboards only",
      "Editing user photos",
      "Bulk importing, updating, exporting, or deleting Salesforce records",
      "Changing app colors"
    ],
    "answer": "Bulk importing, updating, exporting, or deleting Salesforce records",
    "explanation": "Data Loader is a powerful bulk data management tool."
  },
  {
    "id": 80,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What is a Salesforce record ID?",
    "options": [
      "A unique identifier for a record",
      "A report schedule",
      "A dashboard title",
      "A picklist value only"
    ],
    "answer": "A unique identifier for a record",
    "explanation": "Record IDs uniquely identify Salesforce records and are important in imports and integrations."
  },
  {
    "id": 81,
    "module": "Data Management",
    "type": "mc",
    "prompt": "Why is deduplication important?",
    "options": [
      "Duplicate records can distort reporting and confuse users",
      "It changes login hours",
      "It makes dashboards prettier only",
      "It replaces validation rules"
    ],
    "answer": "Duplicate records can distort reporting and confuse users",
    "explanation": "Duplicates hurt data quality, process efficiency, and trust in reports."
  },
  {
    "id": 82,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What is a matching rule used for?",
    "options": [
      "Identifying possible duplicate records based on criteria",
      "Updating exchange rates",
      "Changing page layouts",
      "Creating dashboards"
    ],
    "answer": "Identifying possible duplicate records based on criteria",
    "explanation": "Matching rules help define how Salesforce identifies possible duplicates."
  },
  {
    "id": 83,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What should you do before a major data import?",
    "options": [
      "Skip testing and import everything",
      "Delete reports",
      "Give every user admin access",
      "Clean the file, map fields, test with a sample, and back up data if needed"
    ],
    "answer": "Clean the file, map fields, test with a sample, and back up data if needed",
    "explanation": "Preparation reduces import mistakes and makes rollback easier."
  },
  {
    "id": 84,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What does field mapping mean during import?",
    "options": [
      "Matching columns in the source file to Salesforce fields",
      "Changing user roles",
      "Approving a record",
      "Creating a dashboard widget"
    ],
    "answer": "Matching columns in the source file to Salesforce fields",
    "explanation": "Field mapping ensures incoming data lands in the right Salesforce fields."
  },
  {
    "id": 85,
    "module": "Data Management",
    "type": "mc",
    "prompt": "What is a data quality dashboard likely to monitor?",
    "options": [
      "Only login page images",
      "Missing required values, duplicates, stale records, and inconsistent statuses",
      "Only dashboard color themes",
      "Only app launcher icons"
    ],
    "answer": "Missing required values, duplicates, stale records, and inconsistent statuses",
    "explanation": "Data quality metrics help admins and business owners improve trust in the system."
  },
  {
    "id": 86,
    "module": "Data Management",
    "type": "mc",
    "prompt": "Which action is safest before mass updating records?",
    "options": [
      "Delete all validation rules permanently",
      "Disable every user",
      "Export a backup and test the update on a small sample",
      "Update all records blindly"
    ],
    "answer": "Export a backup and test the update on a small sample",
    "explanation": "Bulk changes should be tested and backed up because errors can affect many records."
  },
  {
    "id": 87,
    "module": "Data Management",
    "type": "mc",
    "prompt": "A CSV import requires matching source columns to Salesforce fields. This is called field ________.",
    "answer": "mapping",
    "explanation": "Field mapping connects source data columns to target Salesforce fields.",
    "options": [
      "sharing",
      "mapping",
      "validation",
      "matching"
    ]
  },
  {
    "id": 88,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A sales leader asks why pipeline dropped this month. Which Salesforce analysis is most useful?",
    "options": [
      "Opportunity stage movement, close date changes, lost deals, and new pipeline by owner",
      "Only login screen branding",
      "Only user profile photos",
      "Only app names"
    ],
    "answer": "Opportunity stage movement, close date changes, lost deals, and new pipeline by owner",
    "explanation": "Pipeline changes usually require analyzing opportunity movement, timing, creation, and loss reasons."
  },
  {
    "id": 89,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A user can open Accounts but cannot see a sensitive margin field. What is the likely cause?",
    "options": [
      "The dashboard is not refreshed",
      "Field-level security",
      "The user has too many list views",
      "The account name is too long"
    ],
    "answer": "Field-level security",
    "explanation": "Object access can allow Account access while field-level security hides a specific field."
  },
  {
    "id": 90,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A manager wants different required fields for two opportunity processes. What could help?",
    "options": [
      "Only dashboard colors",
      "Only a Chatter post",
      "Only a public group",
      "Record types and page layouts"
    ],
    "answer": "Record types and page layouts",
    "explanation": "Record types and page layouts can support process variation and different field presentation."
  },
  {
    "id": 91,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A dashboard looks different to two users. Which explanation is most likely?",
    "options": [
      "Different browser bookmarks",
      "Different email signatures",
      "Different record visibility or dashboard running user behavior",
      "Different laptop brands only"
    ],
    "answer": "Different record visibility or dashboard running user behavior",
    "explanation": "Security and dashboard running user settings can affect what data appears."
  },
  {
    "id": 92,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A report contains too many irrelevant rows. What should you adjust first?",
    "options": [
      "The AppExchange listing",
      "The company logo",
      "The user's profile photo",
      "Filters and report type"
    ],
    "answer": "Filters and report type",
    "explanation": "Filters and report type determine which data is included."
  },
  {
    "id": 93,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "Sales reps keep entering inconsistent competitor names. What is a strong admin fix?",
    "options": [
      "Use a picklist or controlled values where appropriate",
      "Ask everyone to type faster",
      "Ignore the issue",
      "Create more duplicate text fields"
    ],
    "answer": "Use a picklist or controlled values where appropriate",
    "explanation": "Controlled fields improve consistency and reporting."
  },
  {
    "id": 94,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A VP wants a weekly view of forecast vs. closed won revenue. What is a likely solution?",
    "options": [
      "A dashboard using opportunity reports grouped by period, stage, owner, or forecast category",
      "A validation rule only",
      "A duplicate rule only",
      "A user profile description"
    ],
    "answer": "A dashboard using opportunity reports grouped by period, stage, owner, or forecast category",
    "explanation": "Dashboards can summarize opportunity and forecast-related metrics for leadership."
  },
  {
    "id": 95,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A process needs to collect user inputs and then create records. What tool is a good fit?",
    "options": [
      "Role hierarchy only",
      "Screen Flow",
      "Report folder",
      "Bucket field only"
    ],
    "answer": "Screen Flow",
    "explanation": "Screen flows can collect user inputs and create or update records."
  },
  {
    "id": 96,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A user has object permission but still cannot see a particular record. What should you investigate?",
    "options": [
      "Record sharing settings such as OWD, role hierarchy, teams, or sharing rules",
      "Only the browser version",
      "Only app color",
      "Only report chart type"
    ],
    "answer": "Record sharing settings such as OWD, role hierarchy, teams, or sharing rules",
    "explanation": "Object permission is necessary but does not guarantee access to every record."
  },
  {
    "id": 97,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "An admin wants to give one user temporary access to export reports without changing their whole profile. What is usually best?",
    "options": [
      "Make the user CEO in role hierarchy",
      "Delete field-level security",
      "Clone the profile 20 times",
      "Assign a permission set"
    ],
    "answer": "Assign a permission set",
    "explanation": "Permission sets are useful for targeted incremental access."
  },
  {
    "id": 98,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A report total is wrong after an import. What should you check first?",
    "options": [
      "Only browser cookies",
      "Only app launcher order",
      "Duplicate records, field mapping, filters, and imported values",
      "Only the dashboard background image"
    ],
    "answer": "Duplicate records, field mapping, filters, and imported values",
    "explanation": "Bad imports can create duplicates, mis-mapped fields, or unexpected values that affect reports."
  },
  {
    "id": 99,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "A team wants to prevent opportunities from closing without a loss reason when marked Closed Lost. What is a strong solution?",
    "options": [
      "Dashboard component only",
      "Validation rule requiring Loss Reason when Stage equals Closed Lost",
      "Public group only",
      "Change the app icon"
    ],
    "answer": "Validation rule requiring Loss Reason when Stage equals Closed Lost",
    "explanation": "Validation rules enforce data requirements at save time."
  },
  {
    "id": 100,
    "module": "Business Scenarios",
    "type": "mc",
    "prompt": "Which skill set best describes a Salesforce business power user?",
    "options": [
      "Only changing fonts",
      "Understanding data model, security basics, reports, dashboards, automation, and business process design",
      "Only resetting Wi-Fi",
      "Only writing spreadsheets"
    ],
    "answer": "Understanding data model, security basics, reports, dashboards, automation, and business process design",
    "explanation": "A strong Salesforce user connects platform mechanics with business analysis and process improvement."
  }
];

const state = loadState();
let currentIndex = state.currentIndex || 0;
let activeModule = "All";
let reviewMode = false;

const $ = (id) => document.getElementById(id);

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { answers: {}, currentIndex: 0 };
    const parsed = JSON.parse(saved);
    return { answers: parsed.answers || {}, currentIndex: parsed.currentIndex || 0 };
  } catch (e) {
    return { answers: {}, currentIndex: 0 };
  }
}

function saveState() {
  state.currentIndex = currentIndex;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/[.,;:!?]/g, "").replace(/\s+/g, " ");
}

function questionSet() {
  let list = QUESTIONS;
  if (activeModule !== "All") list = list.filter(q => q.module === activeModule);
  if (reviewMode) list = list.filter(q => state.answers[q.id] && !state.answers[q.id].correct);
  return list;
}

function getStats() {
  const answered = QUESTIONS.filter(q => state.answers[q.id]);
  const correct = answered.filter(q => q && state.answers[q.id].correct);
  const pct = answered.length ? Math.round((correct.length / answered.length) * 100) : 0;
  return { answered: answered.length, correct: correct.length, pct, total: QUESTIONS.length };
}

function modules() {
  return ["All", ...Array.from(new Set(QUESTIONS.map(q => q.module)))];
}

function renderModuleFilters() {
  const wrap = $("moduleFilters");
  wrap.innerHTML = "";
  modules().forEach(module => {
    const btn = document.createElement("button");
    btn.className = "chip" + (module === activeModule ? " active" : "");
    btn.textContent = module;
    btn.onclick = () => {
      activeModule = module;
      reviewMode = false;
      currentIndex = 0;
      render();
    };
    wrap.appendChild(btn);
  });
}

function renderStats() {
  const stats = getStats();
  $("answeredStat").textContent = `${stats.answered} / ${stats.total}`;
  $("scoreStat").textContent = `${stats.pct}%`;
  $("correctStat").textContent = `${stats.correct}`;
  $("remainingStat").textContent = `${stats.total - stats.answered}`;
  $("progressFill").style.width = `${(stats.answered / stats.total) * 100}%`;
  $("progressText").textContent = `${stats.answered} of ${stats.total} questions answered`;

  const complete = stats.answered === stats.total;
  const passed = complete && stats.pct > PASSING_SCORE;
  const status = $("completionStatus");
  if (passed) {
    status.className = "status pass";
    status.innerHTML = `✅ Certificate unlocked. You answered all ${stats.total} questions and scored ${stats.pct}%.`;
    $("certificateSection").classList.remove("hidden");
    renderCertificate(stats);
  } else if (complete) {
    status.className = "status warn";
    status.innerHTML = `All questions answered, but your score is ${stats.pct}%. Review missed questions and reset when ready to try again. Certificate unlocks above ${PASSING_SCORE}%.`;
    $("certificateSection").classList.add("hidden");
  } else {
    status.className = "status";
    status.innerHTML = `Certificate unlocks after all ${stats.total} questions are answered with a final score over ${PASSING_SCORE}%.`;
    $("certificateSection").classList.add("hidden");
  }
}

function renderQuestion() {
  const list = questionSet();
  const panel = $("questionPanel");
  if (!list.length) {
    panel.innerHTML = `<div class="empty"><h2>No questions here yet</h2><p>There are no missed questions in the current view. Switch modules or return to all questions.</p></div>`;
    return;
  }
  if (currentIndex >= list.length) currentIndex = list.length - 1;
  if (currentIndex < 0) currentIndex = 0;
  const q = list[currentIndex];
  const saved = state.answers[q.id];
  const answeredClass = saved ? (saved.correct ? "correct" : "incorrect") : "";
  let input = "";
  input = `<div class="options">${q.options.map((opt, idx) => `
      <label class="option ${saved && saved.userAnswer === opt ? 'selected' : ''}">
        <input type="radio" name="answer" value="${escapeHtml(opt)}" ${saved && saved.userAnswer === opt ? 'checked' : ''} />
        <span class="choiceLetter">${String.fromCharCode(65 + idx)}</span>
        <span>${escapeHtml(opt)}</span>
      </label>`).join("")}</div>`;

  panel.innerHTML = `
    <div class="qMeta">
      <span class="badge">${escapeHtml(q.module)}</span>
      <span class="muted">Question ${currentIndex + 1} of ${list.length} in this view · #${q.id} of ${QUESTIONS.length}</span>
    </div>
    <h2>${escapeHtml(q.prompt)}</h2>
    ${input}
    <div class="actions">
      <button class="primary" onclick="submitAnswer()">Check Answer</button>
      <button onclick="showHint()">Hint</button>
      <button onclick="showSolution()">Show Solution</button>
    </div>
    <div id="feedback" class="feedback ${answeredClass} ${saved ? '' : 'hidden'}">
      ${saved ? feedbackMarkup(q, saved) : ''}
    </div>
  `;
}

function feedbackMarkup(q, saved) {
  const status = saved.correct ? "Correct" : "Not quite";
  const answer = q.type === "mc" ? q.answer : q.answer;
  return `<strong>${status}.</strong><br><span>Your answer: ${escapeHtml(saved.userAnswer || "—")}</span><br><span>Correct answer: ${escapeHtml(answer)}</span><p>${escapeHtml(q.explanation)}</p>`;
}

function submitAnswer() {
  const list = questionSet();
  const q = list[currentIndex];
  let userAnswer = "";
  const checked = document.querySelector('input[name="answer"]:checked');
  if (!checked) return flash("Choose an answer first.");
  userAnswer = checked.value;
  const correct = userAnswer === q.answer;
  state.answers[q.id] = { userAnswer, correct, answeredAt: new Date().toISOString() };
  saveState();
  render();
}

function showHint() {
  const list = questionSet();
  const q = list[currentIndex];
  const answer = q.type === "mc" ? q.answer : q.answer;
  const hint = answer.length > 16 ? answer.slice(0, 10) + "…" : answer[0] + "…";
  flash(`Hint: Think about ${q.module.toLowerCase()}. The answer starts like: ${hint}`);
}

function showSolution() {
  const list = questionSet();
  const q = list[currentIndex];
  const feedback = $("feedback");
  feedback.className = "feedback";
  feedback.innerHTML = `<strong>Solution:</strong> ${escapeHtml(q.answer)}<p>${escapeHtml(q.explanation)}</p>`;
}

function flash(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2500);
}

function nextQuestion() {
  const list = questionSet();
  currentIndex = Math.min(currentIndex + 1, list.length - 1);
  saveState();
  render();
}

function prevQuestion() {
  currentIndex = Math.max(currentIndex - 1, 0);
  saveState();
  render();
}

function nextUnanswered() {
  const list = questionSet();
  const idx = list.findIndex(q => !state.answers[q.id]);
  if (idx >= 0) { currentIndex = idx; render(); }
  else flash("No unanswered questions in this view.");
}

function toggleReview() {
  reviewMode = !reviewMode;
  currentIndex = 0;
  $("reviewBtn").textContent = reviewMode ? "Exit Review" : "Review Missed";
  render();
}

function resetProgress() {
  if (!confirm("Reset all progress for this Salesforce quiz?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state.answers = {};
  state.currentIndex = 0;
  currentIndex = 0;
  reviewMode = false;
  render();
}

function renderCertificate(stats) {
  const date = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  $("certName").textContent = APP_NAME;
  $("certDate").textContent = date;
  $("certScore").textContent = `${stats.pct}%`;
}

function printCertificate() {
  window.print();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function render() {
  document.title = APP_NAME;
  $("appTitle").textContent = APP_NAME;
  renderModuleFilters();
  renderStats();
  renderQuestion();
}

window.submitAnswer = submitAnswer;
window.showHint = showHint;
window.showSolution = showSolution;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.nextUnanswered = nextUnanswered;
window.toggleReview = toggleReview;
window.resetProgress = resetProgress;
window.printCertificate = printCertificate;

render();