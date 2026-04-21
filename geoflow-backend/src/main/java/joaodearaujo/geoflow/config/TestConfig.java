package joaodearaujo.geoflow.config;

import joaodearaujo.geoflow.domain.entities.City;
import joaodearaujo.geoflow.domain.entities.Delivery;
import joaodearaujo.geoflow.domain.enums.DeliveryStatus;
import joaodearaujo.geoflow.repositories.CityRepository;
import joaodearaujo.geoflow.repositories.DeliveryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final CityRepository cityRepository;
    private final DeliveryRepository deliveryRepository;

    @Override
    public void run(String... args) throws Exception {


        if (cityRepository.count() == 0) {

            City c1 = new City();
            c1.setName("São Paulo");
            c1.setState("SP");
            c1.setLatitude(-23.5505);
            c1.setLongitude(-46.6333);

            City c2 = new City();
            c2.setName("Rio de Janeiro");
            c2.setState("RJ");
            c2.setLatitude(-22.9068);
            c2.setLongitude(-43.1729);

            cityRepository.saveAll(List.of(c1, c2));

            Delivery d1 = new Delivery();
            d1.setDescription("Entrega de Eletrônicos");
            d1.setStatus(DeliveryStatus.IN_TRANSIT);
            d1.setCurrentLat(-23.5500);
            d1.setCurrentLon(-46.6330);

            d1.setCity(c1);

            deliveryRepository.save(d1);

            System.out.println("Banco de dados populado com sucesso!");
        } else {
            System.out.println("Cidades já existem no banco. Pulando carga inicial.");
        }
    }
}