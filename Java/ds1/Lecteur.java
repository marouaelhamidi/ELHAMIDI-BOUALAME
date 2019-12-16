package DSTP;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import ds.MyBuffer;

public class Lecteur extends Thread {
	private String filename;
	String threadname;
	private MyBuffer buff;
	public BufferedInputStream bis;
	public static int stp = 0;

	public Lecteur(String threadname, String filename, MyBuffer buff) throws FileNotFoundException {
		this.threadname = threadname;
		this.filename = filename;
		this.buff = buff;
		bis= new BufferedInputStream(new FileInputStream(new File(filename)));
	}

	public String readword() throws IOException {
		byte[] b = new byte[1];
		int n = 0;
		String word ="";
		while ((n = this.bis.read(b)) >= 0 && Character.toString((char) b[0]).matches("\\w")&&((char) b[0])!='\n') {
			word += (char) b[0];
		}
		stp = n;
		return word;
	}
	public void run()  {
		while (true) {
			try {
				String s=readword();
				if(s!="")
				buff.addWord(s);
				if(stp==-1) break;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}