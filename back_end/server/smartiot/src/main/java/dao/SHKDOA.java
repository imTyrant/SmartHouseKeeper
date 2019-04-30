package dao;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.List;

import util.DBInteractor;
import util.DOAInitExecption;

/**
 * SHKDOA
 * 
 * @param <T>
 */
abstract public class SHKDOA<T> implements ISHKDOA<T> {
    protected DBInteractor dbInteractor;
    protected String table = "";


    public SHKDOA() throws DOAInitExecption {
        if ((this.dbInteractor = DBInteractor.getDBConnection()) == null) {
            throw new DOAInitExecption();
        }
    }

    @Override
    public boolean find(Object... keys) {
        if (get(keys) != null) return true;
        return false;
    }

    // @Override
    // public List<T> getAll() {
    //     LinkedList<T> rtn = new LinkedList<>();
    
    //     String sql = "SELECT * FROM %;";
    //     sql.replace("%", this.table);

    //     try {
    //         Statement statement = this.dbInteractor.getConnection().createStatement();

    //         ResultSet result = statement.executeQuery(sql);

    //         while (result.next()) {
    //             Object object = new Object();
    //             T mChoices = (T) object;

    //             // ((Object) mChoices).setKeeper(result.getString("keeper"));
    //             // mChoices.setSid(result.getString("sid"));
    //             // mChoices.setSoftwareVersion(result.getString("software_version"));
    //             // mChoices.setTime("time");
    //             // mChoices.setStatus("status");

    //             rtn.add(mChoices);
    //         }

    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         return null;
    //     }

    //     return rtn;
    // }
}