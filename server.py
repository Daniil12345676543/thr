from flask import Flask, request
import subprocess

app = Flask(__name__)

@app.route('/restart', methods=['POST'])
def restart():
    # Код для перезагрузки сайта
    # Здесь можно выполнить любые необходимые действия для перезагрузки сайта
    subprocess.call(['service', 'apache2', 'restart'])  # Пример команды перезагрузки сервера

    return 'Сайт перезагружен'

@app.route('/shutdown', methods=['POST'])
def shutdown():
    # Код для выключения сайта
    # Здесь можно выполнить любые необходимые действия для выключения сайта
    subprocess.call(['service', 'apache2', 'stop'])  # Пример команды остановки сервера

    return 'Сайт выключен'

@app.route('/start', methods=['POST'])
def start():
    # Код для включения сайта
    # Здесь можно выполнить любые необходимые действия для включения сайта
    subprocess.call(['service', 'apache2', 'start'])  # Пример команды запуска сервера

    return 'Сайт включен'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)