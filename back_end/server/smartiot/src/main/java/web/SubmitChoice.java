package web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.SHKDOA;
import model.MChoices;
import util.DAOFactory;
import util.DOAInitExecption;

/**
 * SubmitChoice
 */
public class SubmitChoice extends HttpServlet{
    private static final long serialVersionUID = 1751385779254455448L;
    
    public SubmitChoice() {
        super();
    }

    @Override
    public void init() throws ServletException {
        super.init();

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        MChoices mChoices = new MChoices();
        mChoices.setKeeper(req.getParameter("kid"));
        mChoices.setSid(req.getParameter("sid"));
        mChoices.setTime(req.getParameter("time"));
        mChoices.setStatus(req.getParameter("choice"));
        mChoices.setSoftwareVersion(req.getParameter("version"));
        
        PrintWriter out = resp.getWriter();
        try {
            SHKDOA<MChoices> shkdoa = DAOFactory.getDOA("choices");
            if (shkdoa.add(mChoices)) {
                out.write("success");
            } else {
                out.write("fail");
            }

        } catch (DOAInitExecption e) {
            e.printStackTrace();
            throw new ServletException();
        }

    }

    @Override
    public void destroy() {
        super.destroy();
    }
    
}