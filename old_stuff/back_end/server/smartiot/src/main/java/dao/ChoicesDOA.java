package dao;

import java.util.List;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;

import model.MChoices;
import util.DBInteractor;
import util.DOAInitExecption;

/**
 * ChoicesDOA
 */
public class ChoicesDOA extends SHKDOA<MChoices> {

    public ChoicesDOA() throws DOAInitExecption {
        super();
        this.table = "choices";
    }

    @Override
    public boolean add(MChoices raw) {
        try {
            if (find(raw.getKeeper(), raw.getSid())) return false; // Check whether a same keeper exists.

            String sql = "INSERT INTO " + this.table + " VALUES(?, ?, ?, ?, ?)";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            statement.setString(1, raw.getKeeper());
            statement.setString(2, raw.getSid());
            statement.setString(3, raw.getSoftwareVersion());
            statement.setString(4, raw.getTime());
            statement.setString(5, raw.getStatus());
            
            statement.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }

    @Override
    public MChoices get(Object... keys) {
        try {

            String sql = "SELECT * FROM " + this.table + " WHERE keeper = ? and sid = ?;";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            statement.setString(1, (String)keys[0]);
            statement.setString(2, (String)keys[1]);

            ResultSet result = statement.executeQuery(sql);

            if (result.next()) {
                MChoices mChoices = new MChoices();

                mChoices.setKeeper(result.getString("keeper"));
                mChoices.setSid(result.getString("sid"));
                mChoices.setSoftwareVersion(result.getString("software_version"));
                mChoices.setTime("time");
                mChoices.setStatus("status");

                return mChoices;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return null;
    }


    @Override
    public List<MChoices> getAll() {
        LinkedList<MChoices> rtn = new LinkedList<>();

        try {

            String sql = "SELECT * FROM " + this.table + ";";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            ResultSet result = statement.executeQuery(sql);

            while (result.next()) {
                MChoices mChoices = new MChoices();

                mChoices.setKeeper(result.getString("keeper"));
                mChoices.setSid(result.getString("sid"));
                mChoices.setSoftwareVersion(result.getString("software_version"));
                mChoices.setTime("time");
                mChoices.setStatus("status");

                rtn.add(mChoices);
            }

            return rtn;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // TODO
    @Override
    public boolean update(MChoices raw, Object... keys) {
        return false;
    }

    // TODO
    @Override
    public boolean delet(Object... keys) {
        return false;
    }
}