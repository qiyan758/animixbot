# Animix Telegram Miniapp Bot
![banner](img/image.png)

这个脚本自动化执行 Animix miniapp Telegram 中的各种任务。

## 功能

- **自动加入/领取任务**
- **自动抽取新宠物**
- **自动完成任务**
- **自动合并宠物**
- **自动领取奖励**
- **支持多账户**
- **支持代理使用**

## 前置条件

- 需要在你的机器上安装 Node.js
- 需要一个 `users.txt` 文件，其中包含用户数据，按照以下步骤获取：
- 打开 Animix miniapp Telegram [https://t.me/animix_game_bot](https://t.me/animix_game_bot?startapp=A2veN3aAUJqc)
- 使用开发者工具（按 F12 或右键“检查”）打开，找到 session storage，找到 `tgWebAppData` 并复制其中的值，格式为 `user=....`
![usersData](img/image-1.png)

## 安装步骤

1. 克隆代码仓库：
    ```sh
    git clone https://github.com/Zlkcyber/animixBot.git
    cd animixBot
    ```

2. 安装所需依赖：
    ```sh
    npm install
    ```

3. 将你的用户数据输入到 `users.txt` 文件中，每行一个用户：
    ```sh
    nano users.txt
    ```

4. 可选步骤：你可以使用代理：
- 将代理信息粘贴到 `proxy.txt` 中，格式为 `http://用户名:密码@ip:端口`
    ```sh
    nano proxy.txt
    ```

5. 运行脚本：
    ```sh
    npm run start
    ```

