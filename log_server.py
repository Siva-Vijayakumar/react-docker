from flask import Flask, request, jsonify
import datetime

app = Flask(__name__)

@app.route('/logs', methods=['POST'])
def receive_logs():
    data = request.get_json()

    print("Received Log:")
    print(data)

    # Optionally store to file
    with open("received_logs.txt", "a") as f:
        f.write(str(data) + "\n")

    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)