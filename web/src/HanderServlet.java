import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class HanderServlet extends HttpServlet{
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// String a = req.getParameter("age");
		
         
        // req.setAttribute("age",a);

        // RequestDispatcher dispatcher = req.getRequestDispatcher("page1.jsp");
        // dispatcher.forward(req, resp);
		
		//获取session
		HttpSession session = request.getSession();
		//从session中获取cart
        Map cart = (Map) request.getSession().getAttribute("cart");
        Map cart1 = (Map) request.getSession().getAttribute("cart1");
        
        String selection = request.getParameter("selection");

        int  info = Integer.parseInt(request.getParameter("tdy218"));
        if(info==1){
            /*
            allow则改变状态
            */
            
            // 存入到session中
            //cart=cart1;
            session.setAttribute("cart", cart1);

            session.setAttribute("allow", selection);

                }
        else if(info==2){
            /*
            block则改变状态
            */

            //cart1=cart;
            session.setAttribute("cart1", cart);
            session.setAttribute("allow", selection);
            }

        // 继续购物或者结算
		response.setContentType("text/html;charset=UTF-8");
		response.getWriter().write("<h3><a href='/web/page1.jsp'>返回</a></h3>");

	}


	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(req, resp);
	}

}
