package DSTP;

import java.io.IOException;
import java.util.Iterator;
import java.util.Map.Entry;
import java.util.Set;

import ds.MyBuffer;

public class Test {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		MyBuffer Mybuff=new MyBuffer(100);
		Mybuff.addWord("marwa");
		Mybuff.addWord("el hamidi");
		Processor p1=new Processor(Mybuff, "P1");
		Processor p2=new Processor(Mybuff, "P2");
		Lecteur L1 = new Lecteur("T1","file.txt",Mybuff);
		Lecteur L2 = new Lecteur("T2","file1.txt",Mybuff);
		L1.start();
		p1.start();
		while(L1.isAlive()) {}
		System.out.println("START THE OPERATION ");
		Set<Entry<String,Integer>>set=p1.getWordsCounts().entrySet();
		Iterator<Entry<String,Integer>>it=set.iterator();
		while(it.hasNext()) {
			Entry<String,Integer>d=it.next();
			System.out.println(d.getKey()+" "+d.getValue());
		}

	}

}
