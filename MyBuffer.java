package DSTP;

import java.util.LinkedList;

public class MyBuffer {

	private int size;
	private LinkedList<String> data=new LinkedList<String>();
	
	
	
	public MyBuffer(int size) {
	
		this.size=size;

	}
	
	public  LinkedList<String> getdata(){
		
		return data;
	}
	
	public int getsize() {
		
		return this.size;
	}
	
	public void addWord(String mot) throws AddWordException{
		if(size>=data.size()) {
			data.add(mot);
		}
		throw new AddWordException();
	}
	
	public synchronized String getWord() throws InterruptedException {
		while(data.size()==0) {
		System.out.println("DATA IS EMPTY , PLEASE WAIT !");
		wait();
		}
		String a=data.poll();
		System.out.println("THIS WORD IS POLLED "+a);
		System.out.println("IS NOTIFIED ");
		notify();
		
		return a;
	}
	
	
}

