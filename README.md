# Customer Rewards Program Management System

## Project Description

The Customer Rewards Program Management System is a React.js application designed to calculate and display reward points for retail customers based on their purchase transactions. The system implements a straightforward points calculation algorithm, awarding 2 points for every dollar spent over $100 and 1 point for each dollar spent between $50 and $100.

## Key features include:

* **State Management:** Utilizes React's useState and useEffect hooks for efficient data handling without Redux, ensuring a clean component structure and improved performance.
* **Asynchronous Data Simulation:** Simulates API calls to fetch transaction data, incorporating loading states and error handling to enhance user experience.
* **Data Processing:** Aggregates reward points by month and year, leveraging JavaScript's Date object for precise time-based reporting.
* **User Interface:** Presents an intuitive and responsive UI using modular components, enabling users to easily navigate through their reward points and transaction history.
* **Testing and Version Control:** Includes unit tests for core functionalities and follows best practices in version control with Git, ensuring maintainability and collaboration efficiency.

This project demonstrates proficiency in React.js and robust application design principles, making it a valuable tool for retailers aiming to enhance customer engagement through a structured rewards program.

## Setup and Execution Steps

1. **Clone the Repository:**

   ![Screenshot 2024-10-08 135344](https://github.com/user-attachments/assets/6422205b-49e3-44c5-9733-472b0dde082d)

3. **Install Dependencies:** Run the following command to install all required packages:

   ![Screenshot 2024-10-08 135501](https://github.com/user-attachments/assets/68b7f4fb-c448-49ad-af17-440171e80a8a)

4. **Start the Development Server:** Launch the application locally:

   ![Screenshot 2024-10-08 135552](https://github.com/user-attachments/assets/ddc6aaae-295a-4359-9989-64c6b3ad546b)

   The app will be accessible at http://localhost:3000/.

5. **Simulate API Data Fetch:** The application simulates fetching transaction data from an API using useEffect. The mock data is displayed once the asynchronous call is completed.

6. **Points Calculation:** Transactions are processed based on the business logic, awarding points according to customer purchases. The points are aggregated by month and displayed for each customer.

7. **Run Tests:** To ensure the correctness of the implementation, run the provided test cases:
   ![Screenshot 2024-10-08 135701](https://github.com/user-attachments/assets/e7c857b4-3740-4975-8c49-7c58e2b7a886)

8. **Build the Application:** For production, create a build of the project:
   ![Screenshot 2024-10-08 135813](https://github.com/user-attachments/assets/4a078470-2279-4162-8b73-5c36c2da080d)
 
   
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
