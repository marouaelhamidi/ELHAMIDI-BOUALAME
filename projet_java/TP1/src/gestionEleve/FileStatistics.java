package gestionEleve;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.security.PublicKey;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;
import java.util.TreeSet;

public class FileStatistics {

	private String filename;
	private File _f;
	private FileInputStream fis;
	private StringBuilder str;

	public FileStatistics(String filename) throws IOException {
		super();
		this.filename = filename;
		this._f = new File(filename);
	    this.fis =new FileInputStream(this._f);

		this.str = new StringBuilder();
		
	    for (byte b : this.fis.readAllBytes()) {

	    	this.str.append((char)b);
	    	//System.out.println(str.toString());
		}
	    //fis.close();
	}
	
	public int getCharCount() throws IOException {
		//System.out.println(fis.available());
		return str.toString().length();
		
	}
	public int getWordCount() throws IOException {


	    return this.str.toString().split("\\s+").length;
		
	}
	public int getSentenceCount() {
	  
		return str.toString().split("[!?.,:]+").length;
		
	}
	public int getParagraphCount() {

		
	    return this.str.toString().split("\n").length;
		
	}
	public HashMap<String,Integer> getDictionary() {
	String[] Words  = this.str.toString().split("\\s+");
	HashMap<String,Integer> _dictionary = new HashMap<String, Integer>();
	for (String word : Words) {
		if(_dictionary.containsKey(word)) {
			_dictionary.replace(word, _dictionary.get(word)+1);
			continue;
		}
		_dictionary.put(word, 1);
		
	}
	return _dictionary;
	}
	
	public void saveCount(String filename) throws IOException {
		FileWriter fw = new FileWriter(filename);
		fw.append("character count : "+getCharCount());
		fw.append("\n");
		fw.append("words count : "+getWordCount());
		fw.append("\n");
		fw.append("character count : "+getSentenceCount());
		fw.append("\n");
		fw.append("character count : "+getParagraphCount());
		fw.append("\n");
		fw.close();
	
	}
	
	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileStatistics fs = new FileStatistics("kenza.txt");
		String filename = "kenza.txt";
		File _f = new File(filename);
	    FileInputStream fis =new FileInputStream(_f);
	    String Text="";
	    StringBuilder str = new StringBuilder();
	    for (byte b : fis.readAllBytes()) {
	    	//Text += (char)b;
	    	str.append((char)b);
	    	//System.out.println(str.toString());
		}
	    //  str.toString().split(" ").length;
	    
	    fs.saveCount("Kenzy.txt");
	
	   
	    
	    Iterator<Entry<String, Integer>> entry = fs.getDictionary().entrySet().iterator();
	    while (entry.hasNext()) {
	    	Entry<String,Integer> it = entry.next();
	    	
			System.out.println(it.getKey() +" Appeared => "+it.getValue());
			
		}
	   // System.out.println(str.toString().split("[!?.,:]+").length);
	    //System.out.println(str.toString().split("\\s+").length);
	    //System.out.println(str.toString().split("\n").length);
	    
	}

}
