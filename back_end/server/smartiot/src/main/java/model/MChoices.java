package model;

/**
 * MChoices
 */
public class MChoices {

    private String keeper;
    private String sid;
    private String softwareVersion;
    private String time;
    private String status;

    /**
     * @return the keeper
     */
    public String getKeeper() {
        return keeper;
    }

    /**
     * @return the status
     */
    public String getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * @return the time
     */
    public String getTime() {
        return time;
    }

    /**
     * @param time the time to set
     */
    public void setTime(String time) {
        this.time = time;
    }

    /**
     * @return the softwareVersion
     */
    public String getSoftwareVersion() {
        return softwareVersion;
    }

    /**
     * @param softwareVersion the softwareVersion to set
     */
    public void setSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
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
     * @param keeper the keeper to set
     */
    public void setKeeper(String keeper) {
        this.keeper = keeper;
    }
}