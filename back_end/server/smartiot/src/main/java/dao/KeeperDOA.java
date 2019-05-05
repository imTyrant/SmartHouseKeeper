package dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;

import model.MKeeper;
import util.DOAInitExecption;

/**
 * KeeperDOA
 */
public class KeeperDOA extends SHKDOA<MKeeper> {

    public KeeperDOA() throws DOAInitExecption {
        super();
        this.table = "keepers";
    }

    @Override
    public boolean add(MKeeper raw) {
        try {
            if (find(raw.getKid())) return false; // Check whether a same keeper exists.

            String sql = "INSERT INTO " + this.table + " VALUES(?, ?)";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            statement.setString(1, raw.getKid());
            statement.setInt(2, raw.getAge());

            
            statement.executeUpdate();

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        
        return true;
    }

    @Override
    public MKeeper get(Object... keys) {
        try {

            String sql = "SELECT * FROM " + this.table + " WHERE keeper = ?;";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            statement.setString(1, (String)keys[0]);

            ResultSet result = statement.executeQuery(sql);

            if (result.next()) {
                MKeeper mKeeper = new MKeeper();

                mKeeper.setKid(result.getString("keeper"));
                mKeeper.setAge(result.getInt("age"));


                return mKeeper;
            }

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return null;
    }

    @Override
    public List<MKeeper> getAll() {
        LinkedList<MKeeper> rtn = new LinkedList<>();

        try {

            String sql = "SELECT * FROM " + this.table + ";";
            PreparedStatement statement = this.dbInteractor.getConnection().prepareStatement(sql);

            // statement.setString(0, this.table);
            
            ResultSet result = statement.executeQuery(sql);

            while (result.next()) {
                MKeeper mKeeper = new MKeeper();

                mKeeper.setKid(result.getString("keeper"));
                mKeeper.setAge(result.getInt("age"));

                rtn.add(mKeeper);
            }

            return rtn;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // TODO
    @Override
    public boolean update(MKeeper raw, Object... keys) {
        return false;
    }
    
    // TODO
    @Override
    public boolean delet(Object... keys) {
        return false;
    }
    
}