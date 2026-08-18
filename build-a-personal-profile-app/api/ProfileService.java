import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class ProfileService {
    static final String PROFILE = "{\"name\":\"Camper Bot\",\"hobbies\":[\"cycling\",\"boating\",\"guitar\"],\"skills\":[\"JavaScript\",\"Node.js\",\"Express.js\"]}";

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(3000), 0);
        server.createContext("/", new RootHandler());
        server.createContext("/hobbies", new HobbiesHandler());
        server.createContext("/skills", new SkillsHandler());
        server.createContext("/api/profile", new ProfileHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Java profile service on http://localhost:3000");
    }

    static void send(HttpExchange ex, int code, String body, String ctype) throws IOException {
        ex.getResponseHeaders().set("Content-Type", ctype);
        byte[] bytes = body.getBytes();
        ex.sendResponseHeaders(code, bytes.length);
        try (OutputStream os = ex.getResponseBody()) { os.write(bytes); }
    }

    static class RootHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {
            send(ex, 200, "Welcome to Camper Bot's homepage!", "text/plain");
        }
    }

    static class HobbiesHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {
            send(ex, 200, "I cycle, go boating, and play guitar.", "text/plain");
        }
    }

    static class SkillsHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {
            send(ex, 200, "JavaScript, Node.js, and Express.js!", "text/plain");
        }
    }

    static class ProfileHandler implements HttpHandler {
        public void handle(HttpExchange ex) throws IOException {
            send(ex, 200, PROFILE, "application/json");
        }
    }
}
