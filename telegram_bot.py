import requests

def send_post_request(endpoint):
    url = 'http://c97789lp.beget.tech:5000' + endpoint  # Замените 'your-server-address' на адрес вашего сервера
    response = requests.post(url)
    return response.text
