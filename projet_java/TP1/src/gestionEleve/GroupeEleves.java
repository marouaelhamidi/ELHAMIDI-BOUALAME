package gestionEleve;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class GroupeEleves {

	private ArrayList<Eleve> listEleve ;
	
	public int nombre() {
		return listEleve.size();
	}
	
	public ArrayList<Eleve> liste(){
		
		return listEleve;
	}
	public void AjouterEleve(Eleve eleve) {
		
		if(this.listEleve==null) this.listEleve=new ArrayList<Eleve>();
		listEleve.add(eleve);
	}
	
	public Eleve chercher(String nom) {
		Iterator<Eleve> it = listEleve.iterator();
		while(it.hasNext()) {
			Eleve e = it.next();
		if(e.getNom().equals(nom))
			return e;
	}
		    return null;
		}
	
	public void lister() {
		Iterator<Eleve> it = listEleve.iterator();
		int i=0;
		while(it.hasNext()) {
			System.out.println(i+"-"+it.next().toString());
			
			i++;
		}	
	}
	public Eleve meilleurEleve() {
		
			return 	Collections.max(listEleve);
	}
		   
		
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GroupeEleves g= new GroupeEleves();
		Eleve e1=new Eleve("marwa");
        e1.ajouterNote(17); 
        e1.ajouterNote(3); 
        e1.ajouterNote(7); 
        e1.ajouterNote(15); 
        e1.ajouterNote(11);
    
    	Eleve e2=new Eleve("kenza");
        e2.ajouterNote(17); 
        e2.ajouterNote(30); 
        e2.ajouterNote(7); 
        e2.ajouterNote(5); 
        e2.ajouterNote(11);
      
		g.AjouterEleve(e1);
		g.AjouterEleve(e2);
		g.lister();
		
		System.out.println(g.meilleurEleve());
	}

}
