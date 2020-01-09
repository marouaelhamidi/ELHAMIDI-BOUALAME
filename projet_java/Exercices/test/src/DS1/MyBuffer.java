package DS1;

import java.util.LinkedList;

public class MyBuffer {

	private int size ;
	private LinkedList<String> data ;
	
	public MyBuffer(int size) {
		this.size = size;
	}
	
	public LinkedList<String> getData() {
		return data;
	}

	public synchronized void addWord(String d) {
		if(this.data.size()<= this.size) {
			this.data.add(d);
		}
		else 
			System.out.println("IMPOSSIBLE ....");
	}

}