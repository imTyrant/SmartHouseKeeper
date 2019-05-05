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
}