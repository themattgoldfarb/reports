package viewModels;


import com.google.gson.Gson;

/**
 * Created by matt on 11/15/14.
 */
public class DataViewModel{
    public int data[] = new int[]{4,8,15,16,23,42};

    public String getJson(){
        Gson gson = new Gson();

        return gson.toJson(this);
    }
}
