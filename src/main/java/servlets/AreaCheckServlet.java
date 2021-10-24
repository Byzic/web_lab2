package servlets;

import beans.PointEntry;
import beans.Results;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.stream.Collectors;
import java.util.stream.Stream;

//@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp
    ) throws IOException {
        resp.setContentType("text/html;charset=UTF-8");
        Results results=(Results)req.getSession().getAttribute("results");
        if (results == null) results = new Results();
        double x = 0;
        double y = 0, r = 0;
        PrintWriter pw = resp.getWriter();
        long startTime = System.nanoTime();
        String strX = req.getParameter("x").replace(",", ".");
        String strY = req.getParameter("y").replace(',', '.');
        String strR = req.getParameter("r").replace(",", ".");
        try {
            x = Double.parseDouble(strX);
            y = Double.parseDouble(strY);
            r = Double.parseDouble(strR);
            if (isValid(x,y,r)){
                PointEntry entry=createPointEntry(x,y,r, startTime);
                results.getListWithPoints().add(entry);
                req.getSession().setAttribute("results", results);

            } else {
                pw.println(results.toJson());
                return;
            }
            req.getSession().setAttribute("shotForBean", results);
            req.getRequestDispatcher(("resultPage.jsp")).forward(req, resp);



        } catch (NumberFormatException | ServletException e) {

        }



    }

    private PointEntry createPointEntry(double x,double y,double r, long startTime) {
        String exT= String.valueOf(new DecimalFormat("#0.0000").format((System.nanoTime() - startTime) / 1e9));
        return new PointEntry(x, y, r,  new SimpleDateFormat("HH:mm:ss").format(new Date()),
                exT,isInArea(x,y,r));
    }

    private boolean isValid(double x, double y, double r) {
        return (x > -3 && x < 5) && (y >= -3 && y <= 5) && (r >= 1 && r <= 3);
    }
    private boolean isInArea(double x, double y, double r){
        return checkRectangle(x, y, r) || checkTriangle(x, y, r) || checkCircle(x, y, r);

    }

    private boolean checkTriangle(double x,double y,double r){
        return x<=0 &&y >=0 && y<=r/2+x/2;
    }
    private boolean checkRectangle(double x,double y,double r){
        return x>=0 &&y <=0 && y>=-r && x<=r/2;
    }
    private boolean checkCircle(double x,double y,double r){
        return x<=0 &&y <=0 && y*y<=r*r-x*x;
    }

}
