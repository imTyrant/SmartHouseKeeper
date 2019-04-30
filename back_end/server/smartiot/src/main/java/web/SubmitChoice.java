package web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import util.DBInteractor;

/**
 * SubmitChoice
 */
public class SubmitChoice extends HttpServlet{
    private static final long serialVersionUID = 1751385779254455448L;
    private DBInteractor dbInteractor;

    public SubmitChoice() {
        super();
    }

    @Override
    public void init() throws ServletException {
        // this.dbInteractor = DBInteractor.initDBConnection();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }

    @Override
    public void destroy() {
        
        super.destroy();
    }
    
}