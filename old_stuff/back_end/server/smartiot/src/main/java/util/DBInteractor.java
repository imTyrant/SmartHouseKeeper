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
        // // Read config file from server.
        // Context initContext = new InitialContext();
        // Context envContext = (Context) initContext.lookup("java:comp/env");
        // ds = (DataSource) envContext.lookup("jdbc/SHKDB");

        String dbDriver = "com.mysql.jdbc.Driver";
        String dbURL = "jdbc:mysql://localhost:3306/";
        String dbName = "smarthousekeeper";
        String dbUsername = "root";
        String dbPassword = "lab000000";

        try {
            Class.forName(dbDriver);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        conn = DriverManager.getConnection(dbURL + dbName,  dbUsername,  dbPassword);
        // conn = ds.getConnection();
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