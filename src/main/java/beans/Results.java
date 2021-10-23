package beans;

import java.util.ArrayList;
import java.util.List;

public class Results {
    private List<PointEntry> listWithPoints;

    public Results() {
        this.listWithPoints = new ArrayList<>();
    }
    public List<PointEntry> getListWithPoints() {
        return listWithPoints;
    }

    public Results(List<PointEntry> listWithPoints) {
        this.listWithPoints = listWithPoints;
    }

    public void setReListWithPoints(List<PointEntry> listWithPoints) {
        this.listWithPoints = listWithPoints;
    }

    public String toJson() {
        List<PointEntry> points = listWithPoints;
        String res = "{" + "\"response\":[";
        for (PointEntry h : points) {
            res = res.concat(h.toJson() + ",");
        }
        res = res.substring(0, res.length() - 1);
        return res + "]}";
    }
}
