# Animix telegram miniapp bot
![banner](img/image.png)

This script automates various tasks for the Animix miniapp telegram.

## Features

- **Auto Join/Claim Missions**
- **Auto Gatcha New Pets**
- **Auto Complete Quests**
- **Auto Merge Pets**
- **Auto Claim Rewards**
- **Support Multy accounts**
- **Support Proxy Usage**

## Prerequisites

- Node.js installed on your machine
- `users.txt` file containing user data follow instruction below to get:
- Open Animix miniapp telegram [https://t.me/animix_game_bot](https://t.me/animix_game_bot?startapp=A2veN3aAUJqc)
- inspect or just F12 find application
- in session storage find `tgWebAppData` and copy all value. `user=....`
![usersData](img/image-1.png)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Zlkcyber/animixBot.git
    cd animixBot
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```
3. Input your user data in `users.txt` file, one user per line;
    ```sh
    nano users.txt
    ```
4. optionally you can use proxy: 
- paste proxy in `proxy.txt` format `http://username:password@ip:port` 
    ```sh
    nano proxy.txt
    ```
5. Run the script:
    ```sh
    npm run start
    ```

## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is licensed under the [MIT License](LICENSE).