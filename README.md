# CRA (Create React App) Chat App

An interactive messaging app built using React that utilizes email/password authentication and websockets.

## Live Demo

[Live Demo](https://craca.onrender.com/)

## Project Planning

[Trello](https://trello.com/b/K0RqWpgQ/cra-chat-app)

## Installation

1. Clone the repo.
2. Run `npm install` to install.

## How to Use

Create .env file in root folder like the example. Add a file called "serviceAccountKey.json" containing your Firebase service account key into the root folder. Run `npm run dev` to start server and client together.

## Technologies Used

- React with TailwindCSS for the frontend
- Node/Express for creating API endpoints
- MongoDB for storing chat room members and messages
- Firebase Authentication for authentication
- Socket.io for making the app real-time

## Basic Features

- Users can register and login using email/password.
- Users can create a room to chat with others.
- Chats are maintained real-time.
- Emoji picker is also integrated.
- Users can update their display name and avatar on profile page.
- Generate random avatars with [DiceBear Avatar API](https://avatars.dicebear.com/docs/http-api)
- Users can see online status.
- Dark mode theme.
- Searching of chats.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
