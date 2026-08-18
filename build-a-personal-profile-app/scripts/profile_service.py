from http.server import BaseHTTPRequestHandler, HTTPServer
import json

PROFILE = {
    "name": "Camper Bot",
    "hobbies": ["cycling", "boating", "guitar"],
    "skills": ["JavaScript", "Node.js", "Express.js"]
}

class Handler(BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        return

    def _send(self, status, body, ctype="text/plain"):
        self.send_response(status)
        self.send_header("Content-Type", ctype)
        self.end_headers()
        self.wfile.write(body.encode() if isinstance(body, str) else body)

    def do_GET(self):
        if self.path == "/":
            self._send(200, "Welcome to Camper Bot's homepage!")
        elif self.path == "/hobbies":
            self._send(200, "I cycle, go boating, and play guitar.")
        elif self.path == "/skills":
            self._send(200, "JavaScript, Node.js, and Express.js!")
        elif self.path == "/api/profile":
            self._send(200, json.dumps(PROFILE), "application/json")
        else:
            self._send(404, "Not found")

if __name__ == "__main__":
    server = HTTPServer(("", 3000), Handler)
    print("Python profile service on http://localhost:3000")
    server.serve_forever()
