package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.sql.DataSource;

// import javax.activation.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

/**
 * DBWriter
 */
public class DBInteractor {
    private static DBInteractor mDbInteractor = null;

    private DataSource ds = null;
    private Connection conn = null;

    private DBInteractor() throws SQLException, NamingException {
        // Read config file from server.
        // Context ctx = (Context) new InitialContext().lookup("java:/comp/env");
        // ds = (DataSource) ctx.lookup("jdbc/SHKDB");

        String dbDriver = "com.mysql.cj.jdbc.Driver";
        String dbURL = "jdbc:mysql://localhost:3306/";
        // Database name to access
        String dbName = "smarthousekeeper";
        String dbUsername = "root";
        String dbPassword = "lab000000";

        try {
            Class.forName(dbDriver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        Connection con = DriverManager.getConnection(dbURL + dbName, 
                                                     dbUsername,  
                                                     dbPassword);
        conn = ds.getConnection();
    }

    public static DBInteractor getDBConnection() {
        if (mDbInteractor == null) {
            try {
                mDbInteractor = new DBInteractor();
            } catch (SQLException | NamingException e) {
                e.printStackTrace();
                return null;
            }
        }

        return mDbInteractor;
    }

    public Connection getConnection() {
        return conn;
    }

    public DataSource getDataSource() {
        return ds;
    }
}