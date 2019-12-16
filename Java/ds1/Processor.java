package DSTP;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
import java.util.Map.Entry;

import ds.MyBuffer;

public class Processor extends Thread{
	
	private MyBuffer buff;
	private String PName;
	private HashMap<String,Integer> wordsCount;
	
	public Processor(MyBuffer buff,String PName) {
		
		this.buff=buff;
		this.PName=PName;
		wordsCount=new HashMap<String, Integer>();
		
	}
	
	public HashMap<String,Integer> getWordsCounts(){
		return  wordsCount;
	}
	public void processe() throws InterruptedException {
		
		String a=buff.getWord();
		int c=0;
		Set<Entry<String,Integer>>set=wordsCount.entrySet();
		Iterator<Entry<String,Integer>>it=set.iterator();
		while(it.hasNext()) {
			
			Entry<String,Integer>d=it.next();
			if(a.equals(d.getKey())) 
				c=d.getValue();
			
		}
		if(wordsCount.containsKey(a)) {
			wordsCount.put(a,c+1);
		}else
		wordsCount.put(a,1);
	}

}
