import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.math.BigInteger;

public class PrimeCheckerService {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(3002), 0);
        server.createContext("/check", new PrimeHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Java Enterprise Microservice Active: Port 3002");
    }

    static class PrimeHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            if ("POST".equalsIgnoreCase(t.getRequestMethod())) {
                InputStream is = t.getRequestBody();
                String body = new String(is.readAllBytes());
                String numStr = body.replaceAll("[^0-9]", "");
                
                if (numStr.isEmpty()) {
                    sendResponse(t, 400, "{\"error\":\"Invalid payload\"}");
                    return;
                }
                
                BigInteger num = new BigInteger(numStr);
                boolean isPrime = num.isProbablePrime(100);
                
                String response = String.format("{\"number\":%s,\"is_prime\":%b,\"status\":\"secured\"}", numStr, isPrime);
                sendResponse(t, 200, response);
            } else {
                sendResponse(t, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }

        private void sendResponse(HttpExchange t, int code, String response) throws IOException {
            t.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add("Content-Type", "application/json");
            t.sendResponseHeaders(code, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
