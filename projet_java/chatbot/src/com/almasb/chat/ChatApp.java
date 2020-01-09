package com.almasb.chat;

import java.awt.TextArea;
import java.awt.TextField;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

public class ChatApp extends Application {
	
	private boolean isServer = false;
	
	TextArea messages = new TextArea();
	private NetworkConnection connection = isServer ? createServer() : createClient();
		
	private Parent createContent() {
		messages.setPrefHeight(550);
		TextField input = new TextField();
		input.setOnAction(event -> {
			String message = isServer ? "Server: " : "Client: ";
			message += input.getText();
			input.clear();
			
			messages.appendText(message + "\n");
			
			try {
			connection.send(message);
			}
			catch (Exception e) {
				messages.appendText("Failed to send\n");
			}
		});
		
		VBox root = new VBox(20);
		root.setPrefSize(600, 600);
		return root;
	}
	
	public void init() throws Exception {
		NetworkConnection connection = null;
		connection.startConnection();
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		primaryStage.setScene(new Scene(createContent()));
		primaryStage.show();
	}
	
	@Override
	public void stop() throws Exception {
		NetworkConnection connection = null;
		connection.closeConnection();
	}
	
	private Server createServer() {
		return new Server(55555, data -> {
			Platform.runLater(() -> {
				messages.appendText(data.toString() + "\n");
			});
		});
	}
	
	private Client createClient() {
		return new Client("127.0.0.1", 555555, data -> {
	});
	}
	
	public static void main(String[] args) {
		launch(args);
	}

}
;