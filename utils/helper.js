import fs from 'fs';

export function readUsers(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const users = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        return users;
    } catch (err) {
        console.error('Error reading the file:', err);
        return [];
    }
}

export function getRandomProxy() {
    if (!fs.existsSync('proxy.txt')) {
        return null;
    }
    const proxies = fs.readFileSync('proxy.txt', 'utf-8').split('\n').filter(Boolean);

    if (proxies.length === 0) {
        return null;
    }
    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
    return randomProxy;
}

