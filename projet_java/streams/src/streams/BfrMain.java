package streams;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


public class BfrMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		FileInputStream fis =null;
		FileOutputStream fos = null ;
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;
	    File f = new File("fichier.txt");
		try {
			fis = new FileInputStream(f);
			fos = new FileOutputStream(new File("fichier1.txt"));
			bis = new BufferedInputStream(new FileInputStream(new File("fichier.txt")));
			bos = new BufferedOutputStream(new FileOutputStream(new File("fichier2.txt")));
			
			byte[] buf = new byte[8];
			long start = System.currentTimeMillis();
			while(fis.read(buf)>=0) {
				fos.write(buf);
			}
			System.out.println("fis "+(System.currentTimeMillis()-start)+"ms");
			long start1 = System.currentTimeMillis();
			while(bis.read(buf)>=0) {
				bos.write(buf);
			}
			System.out.println("bis "+(System.currentTimeMillis()-start1)+"ms");
		} catch (IOException e) {
			// TODO: handle exception
		}
		
	}

}
