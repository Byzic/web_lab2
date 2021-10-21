import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp
    ){
        long startTime = System.nanoTime();

        String xStr = req.getParameter("x");
        String yStr = req.getParameter("y").replace(',', '.');
        String rStr = req.getParameter("r");
        boolean isValuesValid = validateXYR(xStr, yStr, rStr);
        resp.setHeader("isValid",String.valueOf(isValuesValid));





    }
    private boolean validateXYR(String x,String y,String z){
        return true;
    }
}
