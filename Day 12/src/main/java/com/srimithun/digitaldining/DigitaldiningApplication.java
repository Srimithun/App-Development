package com.srimithun.digitaldining;

import com.srimithun.digitaldining.auth.AuthenticationService;
import com.srimithun.digitaldining.auth.RegisterRequest;
import com.srimithun.digitaldining.model.enumerate.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class DigitaldiningApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitaldiningApplication.class, args);

	}
	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service
		){
			return args -> {
				var admin = RegisterRequest.builder().firstname("Sri").lastname("Mithun").username("DDadmin").password("DDadmin")
				.role(Role.ADMIN).build();
				System.out.println("Admin Token : "+ service.register(admin).getToken());


				var staff = RegisterRequest.builder().firstname("Employee").lastname("1").username("emp001").password("emp@001")
				.role(Role.STAFF).build();

				System.out.println("Employee Token : "+ service.register(staff).getToken());
			};
		}

}
