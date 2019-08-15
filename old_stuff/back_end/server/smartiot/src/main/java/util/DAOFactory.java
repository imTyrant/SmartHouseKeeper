package util;

import dao.ChoicesDOA;
import dao.KeeperDOA;
import dao.SHKDOA;
import dao.SettingDOA;

/**
 * DAOFactory
 */
public class DAOFactory {

    public static final SHKDOA getDOA(String sel) throws DOAInitExecption {

        switch (sel) {
            case "keepers":
                
                return new KeeperDOA();
            case "setting":
                
                return new SettingDOA();
            case "choices":
                
                return new ChoicesDOA();
            default:
                return null;
        }
    }
}