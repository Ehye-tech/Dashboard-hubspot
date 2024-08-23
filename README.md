## Dashboard-hubspot

Services and Functionality:

This dash board project implements a series of Node.js services designed to process data from the HubSpot API (version 5). It focuses on contact data manipulation and analysis, demonstrating key functionalities and their potential business impact includes:

1. Improve decision-making: Provide visual insights into contact data, enabling data-driven decisions by customizing mapping user's data in unique way.
Increase efficiency: Quickly identify trends and patterns in contact data, saving time and resources.

2. Enhance collaboration: Share insights with team members through a centralized dashboard.
Demonstrate value: Showcase the capabilities of your data processing service and its impact on the business.

**Services:**

* **Contact Service (contactService.js):**
  - Fetches contact data from HubSpot using the `getAllContacts` function.
  - Processes contact timestamps and groups them based on a duration threshold.
  - Provides functions for domain extraction from email addresses and filtering contacts by domain.

* **Utility Service (utilService.js):**
  - Offers various helper functions including:
      - Domain extraction from email addresses.
      - Contact filtering by email domain.
      - Timestamp comparison and grouping based on a duration.
      - Timestamp conversion to Unix milliseconds.

**Further Development:**

* **Visualizations:** Integrate data visualization libraries to create charts and graphs highlighting trends identified during analysis.
* **Dashboard Integration:** Build a dashboard to display key metrics and insights derived from contact data processing.
* **Authentication:** Implement OAuth authentication for secure access to the HubSpot API.
* **Error Handling:** Incorporate robust error handling mechanisms to ensure the service remains reliable.


**Installation Instructions**

**Prerequisites**

- **Node.js and npm :** These are essential for running the project and managing dependencies. 

**Installation**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/dashboard-hubspot.git
   ```

   Replace `your-username` with your actual GitHub username.

2. **Navigate to the Project Directory:**

   ```bash
   cd dashboard-hubspot
   ```

3. **Install Dependencies:**

   Run one of the following commands in your terminal to install the required dependencies:

   ```bash
   npm install  # Using npm
   ```

   This will download and install all the necessary libraries and packages that your project relies on.

**Running the Project**

**1. Environment Variables:**

   Before starting the project, you'll need to configure your HubSpot API credentials. Create a `.env` file in the project root directory (**not** included in version control) and set the following environment variables:

   ```
   HUBSPOT_API_KEY=your_hubspot_api_key
   ```

   Replace `your_hubspot_api_key` with your actual HubSpot API key, which you can obtain from your HubSpot developer account.

**2. Start the Server:**

   ```bash
   node index.js  
   ```

   This will start the Node.js server and make the dashboard application accessible. The exact location of the dashboard might vary depending on your server setup. Consult your server documentation for details on accessing applications.
