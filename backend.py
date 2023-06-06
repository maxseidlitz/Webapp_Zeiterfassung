from flask import Flask, request

app = Flask(__name__)

time_entries = []

@app.route('/save_time', methods=['POST'])
def save_time():
    time = request.form['time']
    date = request.form['date']
    entry = f"{date} - {time}"
    time_entries.append(entry)
    return {'success': True}

if __name__ == '__main__':
    app.run()
