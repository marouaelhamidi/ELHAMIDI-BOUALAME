package streams;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Main {

	public static void main(String[] args) throws IOException {

		File f = new File("fichier.txt");

        FileInputStream fis = new FileInputStream(f);
        FileOutputStream fos = new FileOutputStream(new File("fichier2.txt"));
        
        byte[] buf = new byte[8];
        
        while(fis.read(buf)>=0) {
        	
        	fos.write(buf);
        }
        System.out.println("end ...");
	}

}