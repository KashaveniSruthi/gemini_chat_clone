# Gemini AI Chat Clone (React)

A simple **Gemini AI Chat application** built using **React.js** that allows users to send prompts and receive AI-generated responses using the **Google Gemini API**.

This project replicates basic features of modern AI chat applications like ChatGPT or Gemini, including chat history, recent prompts, and a collapsible sidebar.

---

##  Features

- AI-powered chat using **Google Gemini API**
- **New Chat** functionality
- **Recent prompts history**
- **Collapsible sidebar navigation**
- **Formatted AI responses**
  - Bold text
  - Headings
  - Line breaks
- **Typing-style response rendering**
- **Responsive UI**
- State management using **React Context API**

---

##  Tech Stack

- **React.js**
- **JavaScript (ES6)**
- **CSS**
- **Google Gemini API**
- **React Context API**

---
    src
    │
    ├── assets
    │ └── icons and images
    │
    ├── components
    │ ├── Main
    │ │ ├── Main.jsx
    │ │ └── Main.css
    │ │
    │ └── Sidebar
    │ ├── Sidebar.jsx
    │ └── Sidebar.css
    │
    ├── context
    │ └── Context.jsx
    │
    ├── config
    │ └── gemini.js
    │
    ├── App.jsx
    ├── App.css
    └── main.jsx
    
    
    ---

##  Installation

###  1.Clone the repository
``` 
git clone https://github.com/KashaveniSruthi/gemini-chat-clone.git
 ```

2. Navigate to the project folder
```
cd gemini-chat-clone
```
3. Install dependencies
```
npm install
```
4.Start the development server
```
npm run dev
```

The app will start at:

http://localhost:5173
## Gemini API Setup

- Go to Google AI Studio

https://aistudio.google.com/

- Generate a Gemini API Key

- Add your API key inside the file:

src/config/gemini.js

Example:

const API_KEY = "YOUR_API_KEY_HERE";
## How the Application Works

- User enters a prompt in the chat input.

- The prompt is sent to the Gemini API.

- Gemini generates a response.

- The response is formatted and displayed in the UI.

- The prompt is stored in Recent Prompts in the sidebar.

- Clicking a recent prompt reloads that conversation.

## State Management

The project uses React Context API to manage global states such as:

- User input

- Recent prompts

- AI responses

- Loading state

- Chat visibility

Main context file:

```src/context/Context.jsx```

## Future Improvements

- Multiple chat sessions

- Save chats in LocalStorage

- Dark mode support

- Streaming AI responses

- Authentication system

- Markdown support

- Mobile UI improvements

