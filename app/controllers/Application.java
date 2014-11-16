package controllers;

import play.mvc.*;

import viewModels.DataViewModel;
import views.html.*;



public class Application extends Controller {

    public static Result index() {
        DataViewModel dataViewModel = new DataViewModel();

        return ok(index.render(dataViewModel));
    }

    public static Result metricsGraphics(){
        DataViewModel dataViewModel = new DataViewModel();

        return ok(metricsGraphics.render(dataViewModel));
    }

    public static Result boxes(){
        return ok(boxes.render());
    }

    public static Result splitContainer(){
        return ok(splitContainer.render());
    }
}
