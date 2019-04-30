package web;

import java.util.List;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.SHKDOA;
import model.MKeeper;
import util.DAOFactory;
import util.DOAInitExecption;

/**
 * RegisterUser
 */
public class RegisterUser extends HttpServlet {

    private static final long serialVersionUID = -6936458966790372446L;

    public RegisterUser() {
        super();

    }

    @Override
    public void init() throws ServletException {
        super.init();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            PrintWriter out = resp.getWriter();
            SHKDOA shkdoa = DAOFactory.getDOA("keepers");
            for (MKeeper each : (List<MKeeper>) shkdoa.getAll()) {
                out.write(each.getKid() +each.getAge() + "\n");
            }
            
            
		    
        } catch (DOAInitExecption e) {
            e.printStackTrace();
            throw new ServletException();
        }
    }
    
}