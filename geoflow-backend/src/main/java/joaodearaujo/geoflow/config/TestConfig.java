package joaodearaujo.geoflow.config;

import joaodearaujo.geoflow.domain.entities.*;
import joaodearaujo.geoflow.domain.enums.DeliveryStatus;
import joaodearaujo.geoflow.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final DeliveryRepository deliveryRepository;
    private final DriverRepository driverRepository;

    @Override
    public void run(String... args) throws Exception {

        Driver driver = new Driver();
        driver.setName("Alfredo");
        driver.setPhoneNumber("+5521984425531");
        driverRepository.save(driver);

        Address origin = new Address();
        origin.setState("Rio de Janeiro");
        origin.setCity("Rio de Janeiro");
        origin.setNeighborhood("Leme");
        origin.setStreet("Gustavo Sampaio");
        origin.setNumber(621);
        origin.setLatitude(-22.9619);
        origin.setLongitude(-43.1670);

        Address destiny = new Address();
        destiny.setState("Rio de Janeiro");
        destiny.setCity("Rio de Janeiro");
        destiny.setNeighborhood("Ipanema");
        destiny.setStreet("Visconde de Pirajá");
        destiny.setNumber(440);
        destiny.setLatitude(-22.9847);
        destiny.setLongitude(-43.2000);

        Route route = new Route();
        route.setOrigin(origin);
        route.setDestiny(destiny);

        Pack pack = new Pack();
        pack.setWeight(15.5);

        Delivery d1 = new Delivery();
        d1.setDescription("Documentos Urgentes");
        d1.setStatus(DeliveryStatus.IN_TRANSIT);
        d1.setCurrentLat(-22.9997);
        d1.setCurrentLon(-43.3602);
        d1.setDriver(driver);
        d1.setRoute(route);
        d1.setPack(pack);
        deliveryRepository.save(d1);


        Address origin2 = new Address();
        origin2.setState("Rio de Janeiro");
        origin2.setCity("Rio de Janeiro");
        origin2.setNeighborhood("Barra da Tijuca");
        origin2.setStreet("Avenida das Américas");
        origin2.setNumber(500);
        origin2.setLatitude(-22.9997);
        origin2.setLongitude(-43.3602);

        Address destiny2 = new Address();
        destiny2.setState("Rio de Janeiro");
        destiny2.setCity("Rio de Janeiro");
        destiny2.setNeighborhood("Recreio");
        destiny2.setStreet("Avenida Lúcio Costa");
        destiny2.setNumber(17000);
        destiny2.setLatitude(-23.0282);
        destiny2.setLongitude(-43.4628);

        Route route2 = new Route();
        route2.setOrigin(origin2);
        route2.setDestiny(destiny2);

        Pack pack2 = new Pack();
        pack2.setWeight(2.0);

        Delivery d2 = new Delivery();
        d2.setDescription("Documentos Urgentes");
        d2.setStatus(DeliveryStatus.PENDING);
        d2.setCurrentLat(-22.9997);
        d2.setCurrentLon(-43.3602);
        d2.setDriver(driver);
        d2.setRoute(route2);
        d2.setPack(pack2);

        deliveryRepository.save(d2);


        Address origin3 = new Address();
        origin3.setState("Rio de Janeiro");
        origin3.setCity("Rio de Janeiro");
        origin3.setNeighborhood("Centro");
        origin3.setStreet("Avenida Rio Branco");
        origin3.setNumber(1);
        origin3.setLatitude(-22.8988);
        origin3.setLongitude(-43.1782);

        Address destiny3 = new Address();
        destiny3.setState("Rio de Janeiro");
        destiny3.setCity("Niterói");
        destiny3.setNeighborhood("Icaraí");
        destiny3.setStreet("Avenida Jornalista Alberto Francisco Torres");
        destiny3.setNumber(211);
        destiny3.setLatitude(-22.9069);
        destiny3.setLongitude(-43.1119);

        Route route3 = new Route();
        route3.setOrigin(origin3);
        route3.setDestiny(destiny3);

        Pack pack3 = new Pack();
        pack3.setWeight(45.0);

        Delivery d3 = new Delivery();
        d3.setDescription("Móveis de Escritório");
        d3.setStatus(DeliveryStatus.DELIVERED);
        d3.setCurrentLat(-22.9069); 
        d3.setCurrentLon(-43.1119);
        d3.setDriver(driver);
        d3.setRoute(route3);
        d3.setPack(pack3);

        deliveryRepository.save(d3);
        System.out.println("Base de dados populada com sucesso!");
    }
}