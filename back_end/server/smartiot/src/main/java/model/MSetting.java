package model;

/**
 * MSetting
 */
public class MSetting {

    private String keeper;
    private String sid;
    private String sname;
    private String houseVersion;
    private String setting;

    /**
     * @return the setting
     */
    public String getSetting() {
        return setting;
    }

    /**
     * @return the houseVersion
     */
    public String getHouseVersion() {
        return houseVersion;
    }

    /**
     * @param houseVersion the houseVersion to set
     */
    public void setHouseVersion(String houseVersion) {
        this.houseVersion = houseVersion;
    }

    /**
     * @return the sname
     */
    public String getSname() {
        return sname;
    }

    /**
     * @param sname the sname to set
     */
    public void setSname(String sname) {
        this.sname = sname;
    }

    /**
     * @return the sid
     */
    public String getSid() {
        return sid;
    }

    /**
     * @param sid the sid to set
     */
    public void setSid(String sid) {
        this.sid = sid;
    }

    /**
     * @return the keeper
     */
    public String getKeeper() {
        return keeper;
    }

    /**
     * @param keeper the keeper to set
     */
    public void setKeeper(String keeper) {
        this.keeper = keeper;
    }

    /**
     * @param setting the setting to set
     */
    public void setSetting(String setting) {
        this.setting = setting;
    }

}