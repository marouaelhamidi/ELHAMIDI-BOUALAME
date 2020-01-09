package DS1;

import java.util.HashMap;

public class Processor implements Runnable{
private MyBuffer buff ;
private String Pname;
private HashMap<String,Integer> wordsCounts;
	
	
public void run() {
	while(true) {
		
	}
}
public void processe() {
	this.wordsCounts.put(this.buff.getData().getLast(), this.wordsCounts.size()+1);
	this.buff.getData().removeLast();
}
public HashMap<String,Integer> getWordsCounts(){
	return this.wordsCounts;
}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}

