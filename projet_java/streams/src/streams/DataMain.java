package streams;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class DataMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
     
		DataInputStream dis = null;
		DataOutputStream dos = null;
		
		try {
			dis= new DataInputStream(new BufferedInputStream(new FileInputStream(new File("fichier1.txt"))));
			dos = new DataOutputStream(new BufferedOutputStream(new FileOutputStream(new File("fichier1.txt"))));
		   
			dos.writeByte(100);
			dos.writeChar('C');
			dos.writeDouble(20.30);
			dos.writeInt(10);
			
			dos.close();
			System.out.println(dis.readChar());
			System.out.println(dis.readByte());
			System.out.println(dis.readDouble());
			
			dis.close();
		} catch (IOException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		
	}

}