package beans;

public class PointEntry  {
    private double x,y,r;
    private String currentTime, executeTime;
    private boolean inArea;

    public PointEntry() {
        this(0, 0, 0, "", "", false);
    }
    public PointEntry(double x, double y, double r, String currentTime, String executeTime, boolean res) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.currentTime = currentTime;
        this.executeTime = executeTime;
        this.inArea = res;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public String getExecuteTime() {
        return executeTime;
    }

    public void setExecuteTime(String execTime) {
        this.executeTime = execTime;
    }

    public boolean isInArea() {
        return inArea;
    }

    public void setInArea(boolean inArea) {
        inArea = inArea;
    }

    public String toJson() {
        return '{' +
                "\"xval\":" + "\"" + this.getX() + "\"" + "," +
                "\"yval\":" + "\"" + this.getY() + "\"" + "," +
                "\"rval\":" + "\"" + this.getR() + "\"" + "," +
                "\"executeTime\":" + "\"" + this.getExecuteTime() + "\"" + "," +
                "\"currentTime\":" + "\"" + this.getCurrentTime() + "\"" + "," +
                "\"result\":"+ "\"" +this.isInArea() + "\"" +
                "}";
    }
}


