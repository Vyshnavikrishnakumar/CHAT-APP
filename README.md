# CHAT-APP

This project is a chat application built using Firebase for authentication. Users can log in using their Gmail accounts and participate in group chats.

### Technologies Used:
- **Firebase**: For authentication and real-time database functionality.
- **JavaScript**: For scripting functionalities.
- **HTML**: For structuring the web pages.
- **CSS**: For styling the application.

### Features:
- **Gmail Authentication**: Users can sign in to the chat app using their Gmail accounts.
- **Group Chat**: Once logged in, users can participate in group chats with other logged-in users.
- **Real-time Updates**: Messages are updated in real-time, providing a seamless chat experience.
- **Responsive Design**: The application is designed to be responsive and accessible across different devices.

### Project Structure:
- **`App.js`**: The main entry point of the application. Handles user authentication and routing.
- **`firebase.js`**: Configuration file for Firebase. Initializes the Firebase app and exports the authentication object.
- **`Chat.js`**: Component for the chat interface, where users can view and send messages.
- **`SignIn.js`**: Component for the sign-in page, where users can authenticate using their Gmail accounts.
- **`App.css`**: Stylesheet containing CSS styles for the application components.
- **`index.html`**: HTML file serving as the main template for the React application.
- **`manifest.json`**: Manifest file providing metadata for the web app.

### Usage:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Access the application in your browser at `http://localhost:3000`.

### Note:
- Make sure to configure Firebase with your own API keys and credentials for authentication to work properly.
- Customize the styling and functionality of the application as per your requirements.

Feel free to explore, contribute, and enhance this chat application to meet your specific needs!
