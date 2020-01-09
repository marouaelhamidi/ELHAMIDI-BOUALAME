package threads;

public class Counter  implements Runnable{
	
	private int value ;
	
	public Counter(int value) {
		super();
		this.value = value;
	}

	@Override
	public void run() {
  
    	if(this.value >=0) {
    		  for(int i=0;i<=1000;i++) {
    		value=i;
    		System.out.println("t1 = "+value);
    	}}
    	else if(this.value <0) {
    		  for(int i=1000;i>0;i--) {
    	    		value=i;
    	    		System.out.println("t2 = "+value);
    	    	}
    	}
    	
    }

		
	
	public static void main(String[] args)  {
		
		// TODO Auto-generated method stub
 
		
		Runnable c1 = new Counter(1); 
		Thread t1 = new Thread(c1);
		t1.start();
		Runnable c2 = new Counter(-1); 
		Thread t2 = new Thread(c2);
		t2.start();
	}

	


}
