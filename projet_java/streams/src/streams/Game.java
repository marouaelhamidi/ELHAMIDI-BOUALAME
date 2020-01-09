package streams;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public class Game implements Serializable{

	private String style,nom;
	private double prix;
	
	
	public Game(String style, String nom, double prix) {
		super();
		this.style = style;
		this.nom = nom;
		this.prix = prix;
	}


	@Override
	public String toString() {
		return "Game [style=" + style + ", nom=" + nom + ", prix=" + prix + "]";
	}


	public static void main(String[] args) {
		// TODO Auto-generated method stub
        File f = new File("game.txt");
        ObjectInputStream ois = null;
        ObjectOutputStream oos = null;
        try {
			oos = new ObjectOutputStream(new BufferedOutputStream(new FileOutputStream(f)));
			Game g = new Game("martitchake","maroua",10.3);
			oos.writeObject(g.toString());
		     oos.close();
		     ois = new ObjectInputStream(new BufferedInputStream(new FileInputStream(f)));
		     System.out.println(ois.readObject());
		     
		     System.out.println("the end ...");
        } catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}