from flask import Flask, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST", "TRACE", "PUT", "DELETE"])
def log_request():
    print("Request received:")
    print(request.headers)
    return "Request logged!", 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
