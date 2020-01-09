package gestionEleve;

import java.util.ArrayList;
import java.util.Iterator;

public class Eleve implements Comparable<Eleve>{

	private String nom ;
	private String type ;
	private ArrayList<Integer> notes ;
	private double moyenne;

	
	public Eleve(String nom) {
		this.nom= nom ;
		this.moyenne=0;
		this.notes=new ArrayList<Integer>();
	}
	
	public double getMoyenne() {
		
		return this.moyenne;
	}
	public void ajouterNote(int note) {
		if(note<0) note=0;
		if(note >20) note=20;
		this.moyenne =(this.moyenne* notes.size()+note)/(notes.size()+1);
		this.notes.add(note);
		
	}

	public String toString() {
		return "Eleve [nom=" + nom + ", type=" + type + ", notes=" + notes + ", moyenne=" + moyenne + "]";
	}

	public String getNom() {
		return this.nom;
	}
	public ArrayList<Integer> getListNotes(){

		return notes;
		
	}
	
	public int compareTo(Eleve autreEleve) {
	
		if (this.moyenne < autreEleve.moyenne) return -1;
		if (this.moyenne > autreEleve.moyenne) return 1;
		return 0;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
           Eleve e1=new Eleve("marwa");
           e1.ajouterNote(17); 
           e1.ajouterNote(30); 
           e1.ajouterNote(7); 
           e1.ajouterNote(15); 
           e1.ajouterNote(11);
	       	Eleve e2=new Eleve("kenza");
	        e2.ajouterNote(1); 
	        e2.ajouterNote(13); 
	        e2.ajouterNote(7); 
	        e2.ajouterNote(15); 
	        e2.ajouterNote(10);
	      
           System.out.println(e1.toString());          
           System.out.println(e2.toString());  
           System.out.println(e1.compareTo(e2));
           
	}



}