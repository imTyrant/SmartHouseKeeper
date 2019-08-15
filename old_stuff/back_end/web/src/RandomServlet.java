import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import java.util.Random;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class RandomServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                /*随机触发，允许则存到session中，不允许则block
                */

       
		// // 获取参数
		// String id = request.getParameter("id");
        String selection = request.getParameter("selection");
		// // 存入名称和状态
		
		// // 把id翻译名称
		// int idx = Integer.parseInt(id);
		// // 名称
		// String name = names[idx - 1];


		String [] names = {"decision","door","light","water","window","alarm","motion","coffee","AC","heater"};
		String [] status=new String[10];
		for(int n=0;n<10;n++){
			status[n] = request.getParameter(names[n]);
		}

		//Map cart = new HashMap<String, String>();
		
		//获取session
		HttpSession session = request.getSession();
		//从session中获取cart
		Map cart = (Map) session.getAttribute("cart");
		Map cart1 = (Map) session.getAttribute("cart");
		
		
		
		for(int n=0; n<10; n++){
			cart.put(names[n], status[n]);
			cart1.put(names[n], status[n]);
		}
		
		// 存入到session中
		session.setAttribute("cart", cart);	//==========================

		// 从session中获取购物车，先获取seesion
		//HttpSession session = request.getSession();
		// 从session中获取购物车
		//Map cart = session.getAttribute("cart");
		//Map cart1 = session.getAttribute("cart");

		// String a=request.getParameter("decision");
		// String b=request.getParameter("door");
		// String c=request.getParameter("light");
		// String d=request.getParameter("water");
		// String e=request.getParameter("window");
		// String f=request.getParameter("alarm");
		// String g=request.getParameter("motion");
		// String h=request.getParameter("coffee");
		// String i=request.getParameter("AC");
		// String j=request.getParameter("heater");

		
		// cart.put(decision, a);
		// cart.put(door, b);
		// cart.put(light, c);
		// cart.put(water, d);
		// cart.put(window, e);
		// cart.put(alarm, f);
		// cart.put(motion, g);
		// cart.put(coffee, h);
		// cart.put(AC, h);
		// cart.put(heater, h);

		// 存入到session中
		//session.setAttribute("cart", cart);

		//cart.get(key);

		int i=10;
		String c="" ;       //触发后设备状态 b为设备，a为状态
		// for( i = 0 ; i < a.size() ; i++){
		// 	c+=b.get(i).getText().toString()+"---"+a.get(i).getText().toString()+"\n";
		// }

		Random random = new Random();
		final int num = random.nextInt(i-4);    //随机输出[0,i-4)的数字 设备
		final int num2 = random.nextInt(3)+ 7;  //漏水，警报，动作传感器[7,9)，10为age
		String et = "";
		String et2 = "";
		if(cart.get(names[num]).equals("unlock"))    //door, window的状态为unlock
		{
			et = "locked";
			cart1.get(names[num]).equals("locked");
		}
		else if(cart.get(names[num]).equals("locked"))   //door, window
		{
			et = "unlock";
			cart1.get(names[num]).equals("unlock");
		}
		else if(cart.get(names[num]).equals("on"))       //light, pot, AC, heater, sprinkler
		{
			et = "off";
			cart1.get(names[num]).equals("off");
		}
		else if(cart.get(names[num]).equals("off")){
			et = "on";
			cart1.get(names[num]).equals("on");
		}
		if(cart.get(names[num2]).equals("on"))           //alarm, water leakage sensor, motion sensor
		{
			et2 = "off";
			cart1.get(names[num2]).equals("off");
		}
		else if(cart.get(names[num2]).equals("off")){
			et2= "on";
			cart1.get(names[num2]).equals("on");
		}else{
			cart.put("decision", "allow");
			cart.put("door", "locked");
			cart.put("light", "off");
			cart.put("water", "off");
			cart.put("window", "locked");
			cart.put("alarm", "off");
			cart.put("motion", "off");
			cart.put("coffee", "off");
			cart.put("AC", "off");
			cart.put("heater", "off");
		
		}

		final String ett = et2;             //ett为传感器状态

		
		//final TextView door1=(TextView) findViewById(a.get(num));
		//    通过AlertDialog.Builder这个类来实例化我们的一个AlertDialog的对象
		// AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);
		// //    设置Title的内容
		// builder.setTitle("警告");
		// //    设置Content来显示一个信息
		// builder.setMessage(strLine+"发生事件：\n"+b.get(num2).getText().toString()+"的状态将变为"+et2+"\n确定执行这个策略吗？该策略会导致\n"+b.get(num).getText().toString()+"的状态从"+a.get(num).getText().toString()+"变为"+et+
		// 		"\n当前各设备状态如下：\n "+c);

		response.getWriter().write("<h1>警告</h1>");
		response.getWriter().write("<p>发生事件：\n</p>"+cart.get(names[num2])+"的状态将变为"+et2+"\n确定执行这个策略吗？该策略会导致\n"+cart.get(names[num])+"的状态从"+names[num]+"变为"+et+
				"\n当前各设备状态如下：\n "+c);
		
		if(cart != null){
		// 循环遍历
		Set<String> keys = cart.keySet();
		// 循环keys
		for(String key : keys){
			response.getWriter().write(key+"的状态为："+cart1.get(key));
			}
		}

		// 通过cart进行判断，是否是第一次访问
		if(selection == "allow"){
			/*
            allow则改变状态
            */
			
			// 存入到session中
			session.setAttribute("cart", cart);
            session.setAttribute("allow", selection);

		}else if(selection == "block"){
            /*
            block则保持原状态不变
            */
			session.setAttribute("cart", cart);
			}
		

		PrintWriter out = response.getWriter();
		out.print("<FORM action=\"HanderServlet.java\" name=\"myform\">");
		out.println("<script language=\"javascript\"  src=\"..link/hander.js\"> </script>"); 
		out.print("<Input type=\"hidden\" name=\"tdy218\">"); 
		//<span style="color: #FF0000;">这里是关键。</span>
		
		out.print("<Input type=\"button\"  name=\"allow\" value=\"allow\"  OnClick=\"bt1()\">");
		out.print("<Input type=\"button\"  name=\"block\" value=\"block\"  OnClick=\"bt2()\">");
		//out.print("<Input type=\"button\"  name=\"query\" value=\"查询"\  OnClick=\"bt3()\">");
		out.print("</form>");

		// // 继续购物或者结算
		// response.setContentType("text/html;charset=UTF-8");
		// response.getWriter().write("<h3><a href='/test_1/session/cartList.jsp'>继续购物</a> | <a href='/day11/session/pay.jsp'>去结算</a></h3>");
	}

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doGet(request, response);
    }

}
