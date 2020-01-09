package streams;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;

public class Filewr {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		File f =new File("fw.txt");
		FileReader fr;
		FileWriter fw;
		
		
		try {
			fw = new FileWriter(f);
			fw.write("\tmarwaaaa martitchka");
			fw.close();
			String str="" ;
			fr = new FileReader(f);
			fr.read();
			int i;
			while((i=fr.read())!=-1) {
				str+=(char)(i);
				
			}
			
			System.out.println(str);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
