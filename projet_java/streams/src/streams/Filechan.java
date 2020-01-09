package streams;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.Buffer;
import java.nio.channels.FileChannel;

import java.nio.ByteBuffer;

public class Filechan {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
    
		BufferedInputStream bis = null;
		FileInputStream fis = null;
	    FileChannel fc ;
		try {
			bis = new BufferedInputStream(new FileInputStream(new File("fichier.txt")));
	        long start = System.currentTimeMillis()	;	
			while(bis.read()!= -1) {
			bis.read();
			}
			System.out.println("bis = "+(System.currentTimeMillis()-start)+"ms");
			bis.close();
			
			fis = new FileInputStream(new File("fichier.txt"));
			fc = fis.getChannel();
			int size = (int)fc.size();
			ByteBuffer bbuf = ByteBuffer.allocate(size);
			long startfc = System.currentTimeMillis();
			fc.read(bbuf);
			bbuf.flip();
			System.out.println("fc = "+(System.currentTimeMillis()-startfc));
		} catch (IOException e) {
			// TODO: handle exception
		}
		
	}
}