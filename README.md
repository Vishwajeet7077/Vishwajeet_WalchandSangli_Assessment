<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HandCraft - Handmade Crafts Website</title>
</head>
<body>
  <h1>HandCraft - Handmade Crafts Website</h1>

  <h2>Features</h2>
  <ul>
    <li><strong>Homepage</strong>:
      <ul>
        <li>Header with navigation menu (<strong>Home</strong>, <strong>Products</strong>, <strong>Contact</strong>)</li>
        <li>Featured section showcasing products</li>
        <li>About section introducing the business</li>
        <li>Contact section with a form for inquiries</li>
        <li>Footer with social media links (<strong>Facebook</strong>, <strong>Instagram</strong>, <strong>Twitter</strong>)</li>
      </ul>
    </li>
    <li><strong>Products</strong>:
      <ul>
        <li>Displays various categories of handmade crafts</li>
        <li>Clicking on a category shows products in that category</li>
      </ul>
    </li>
    <li><strong>Contact Form</strong>:
      <ul>
        <li>Allows customers to submit inquiries</li>
        <li>Validates user input (<strong>name</strong>, <strong>email</strong>, <strong>message</strong>)</li>
      </ul>
    </li>
    <li><strong>Responsive Design</strong>:
      <ul>
        <li>Optimized for various screen sizes (mobile, tablet, desktop)</li>
      </ul>
    </li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>React</strong></li>
    <li><strong>Axios</strong> for HTTP requests</li>
    <li><strong>Font Awesome</strong> for icons</li>
    <li><strong>Tailwind CSS</strong> for styling</li>
  </ul>

  <h2>Setup Instructions</h2>
  <ol>
    <li><strong>Clone the repository</strong>:
      <pre><code>git clone https://github.com/Vishwajeet7077/handcraft</code></pre>
    </li>
    <li><strong>Install dependencies</strong>:
      <pre><code>cd handcraft <br>npm install</code></pre>
    </li>
    <li><strong>Create a .env file</strong> in the root directory and add the following:
      <pre><code>REACT_APP_SERVICES_API=http://localhost:1030/services
REACT_APP_COMPANY_API=http://localhost:1030/companies</code></pre>
      <p><strong>Note:</strong> Replace <code>1030</code> with your desired port number for the JSON server.</p>
    </li>
    <li><strong>Start the JSON server</strong>:
      <ul>
        <li>Install JSON Server globally if you haven't already:
          <pre><code>npm install -g json-server</code></pre>
        </li>
        <li>Start the JSON Server on port 1030 (or your chosen port):
          <pre><code>json-server --watch db.json --port 1030</code></pre>
        </li>
        <li>Make sure your <code>db.json</code> file contains the following data structure:
          <pre>
            <code>
{
  "companies": [
    {
      "id": 1,
      "name": "Artisanal Creations",
      "logoUrl": "../src/component/homePage/homeDiv2/company1.jpg"
    },
    {
      "id": 2,
      "name": "Crafty Designs",
      "logoUrl": "../src/component/homePage/homeDiv2/company2.jpg"
    },
    {
      "id": 3,
      "name": "Handmade Haven",
      "logoUrl": "../src/component/homePage/homeDiv2/company3.jpg"
    }
    // Add more companies as needed
  ],
  "services": [
    {
      "id": "Handmade",
      "image_link": "https://collection.cloudinary.com/dmg2kfb5y/63c39813b824f015c656f98aa43cad6f"
    },
    {
      "id": "Decor",
      "image_link": "https://collection.cloudinary.com/dmg2kfb5y/73c39813b824f015c656f98aa43cad6f"
    }
    // Add more services as needed
  ],
  "servicesSubtype": {
    "Handmade": [
      {
        "id": "Jewelry",
        "image_link": "#"
      },
      {
        "id": "Home Decor",
        "image_link": "#"
      }
      // Add more subtypes for Handmade as needed
    ],
    "Decor": [
      {
        "id": "Wall Art",
        "image_link": "#"
      },
      {
        "id": "Furniture",
        "image_link": "#"
      }
      // Add more subtypes for Decor as needed
    ]
    // Add more subtypes as needed
  }
}
            </code>
          </pre>
        </li>
      </ul>
    </li>
    <li><strong>Start the development server for the React app</strong>:
      <pre><code>npm start</code></pre>
    </li>
    <li><strong>Open the app</strong>:
      <p>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view it in the browser.</p>
    </li>
  </ol>

  <h2>Additional Notes</h2>
  <ul>
    <li>This project assumes you have <strong>Node.js</strong> and <strong>npm</strong> installed globally.</li>
    <li><strong>JSON Server</strong> is used to simulate a backend API. Make sure it's running on port 1030.</li>
    <li>Replace <code>REACT_APP_COMPANY_API</code> with your actual API endpoint for fetching company data.</li>
    <li>Customize the project according to your business needs.</li>
  </ul>
</body>
</html>
