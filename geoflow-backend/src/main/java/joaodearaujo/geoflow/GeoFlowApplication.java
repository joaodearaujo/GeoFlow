package joaodearaujo.geoflow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GeoFlowApplication {
	public static void main(String[] args) {
		SpringApplication.run(GeoFlowApplication.class, args);
	}
}