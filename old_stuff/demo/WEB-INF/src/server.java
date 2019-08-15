import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class server extends HttpServlet {

    public void doPost(HttpServletRequest request,
                    HttpServletResponse response)
            throws ServletException, IOException
    {
        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.write("<p>");
        out.write("From: " + request.getRemoteHost() + ":" + request.getRemotePort());
        out.write("</br>");
        out.write("MSG: " + request.getParameter("text"));
        out.write("</p>\n");
    }
    public void doGet(HttpServletRequest request,
                    HttpServletResponse response)
            throws ServletException, IOException
    {
        doPost(request, response);
    }
}