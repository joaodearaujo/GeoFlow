package joaodearaujo.geoflow.config;

import joaodearaujo.geoflow.domain.entities.*;
import joaodearaujo.geoflow.domain.enums.DeliveryStatus;
import joaodearaujo.geoflow.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final DeliveryRepository deliveryRepository;
    private final DriverRepository driverRepository;

    @Override
    public void run(String... args) throws Exception {

        // 1. Criar Motoristas
        Driver alfredo = createDriver("Alfredo", "+5521984425531");
        Driver carlos = createDriver("Carlos Silva", "+5521977665544");
        driverRepository.saveAll(List.of(alfredo, carlos));

        // 2. Criar Diversas Entregas
        // Exemplo 1: Centro -> Botafogo
        createAndSaveDelivery("Eletrônicos", DeliveryStatus.in_transit, -22.9035, -43.1759, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Centro", "Av. Rio Branco", 100, -22.9035, -43.1759,
                        "RJ", "Rio de Janeiro", "Botafogo", "Praia de Botafogo", 300, -22.9452, -43.1818), 5.5);

        // Exemplo 2: Tijuca -> Maracanã
        createAndSaveDelivery("Roupas", DeliveryStatus.pending, -22.9231, -43.2359, carlos,
                createRoute("RJ", "Rio de Janeiro", "Tijuca", "Rua Conde de Bonfim", 50, -22.9231, -43.2359,
                        "RJ", "Rio de Janeiro", "Maracanã", "Av. Maracanã", 20, -22.9121, -43.2302), 1.2);

        // Exemplo 3: Copacabana -> Lagoa
        createAndSaveDelivery("Alimentos", DeliveryStatus.in_transit, -22.9698, -43.1860, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Copacabana", "Av. Atlântica", 1500, -22.9698, -43.1860,
                        "RJ", "Rio de Janeiro", "Lagoa", "Av. Epitácio Pessoa", 100, -22.9739, -43.2081), 0.8);

        // Exemplo 4: Leblon -> Gávea
        createAndSaveDelivery("Livros", DeliveryStatus.delivered, -22.9856, -43.2245, carlos,
                createRoute("RJ", "Rio de Janeiro", "Leblon", "Rua Delfim Moreira", 200, -22.9856, -43.2245,
                        "RJ", "Rio de Janeiro", "Gávea", "Rua Marques de São Vicente", 50, -22.9782, -43.2332), 3.0);

        // Exemplo 5: Madureira -> Méier
        createAndSaveDelivery("Peças Automotivas", DeliveryStatus.pending, -22.8711, -43.3341, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Madureira", "Estrada do Portela", 30, -22.8711, -43.3341,
                        "RJ", "Rio de Janeiro", "Méier", "Rua Dias da Cruz", 120, -22.8988, -43.2842), 12.0);

        // Exemplo 6: Niterói -> São Gonçalo
        createAndSaveDelivery("Medicamentos", DeliveryStatus.in_transit, -22.8856, -43.1152, carlos,
                createRoute("RJ", "Niterói", "Centro", "Rua XV de Novembro", 10, -22.8856, -43.1152,
                        "RJ", "São Gonçalo", "Centro", "Rua Feliciano Sodré", 100, -22.8267, -43.0533), 0.5);

        // Exemplo 7: Barra -> Jacarepaguá
        createAndSaveDelivery("Suplementos", DeliveryStatus.in_transit, -23.0003, -43.3658, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Barra", "Av. Ayrton Senna", 3000, -23.0003, -43.3658,
                        "RJ", "Rio de Janeiro", "Taquara", "Estrada de Jacarepaguá", 500, -22.9344, -43.3572), 2.5);

        // Exemplo 8: Santa Teresa -> Glória
        createAndSaveDelivery("Artesanato", DeliveryStatus.pending, -22.9189, -43.1925, carlos,
                createRoute("RJ", "Rio de Janeiro", "Santa Teresa", "Rua Almirante Alexandrino", 400, -22.9189, -43.1925,
                        "RJ", "Rio de Janeiro", "Glória", "Rua da Glória", 50, -22.9201, -43.1768), 4.2);

        // Exemplo 9: Humaitá -> Urca
        createAndSaveDelivery("Vinhos", DeliveryStatus.in_transit, -22.9567, -43.1998, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Humaitá", "Rua Humaitá", 80, -22.9567, -43.1998,
                        "RJ", "Rio de Janeiro", "Urca", "Av. Portugal", 20, -22.9461, -43.1633), 8.5);

        // Exemplo 10: Flamengo -> Catete
        createAndSaveDelivery("Documentos", DeliveryStatus.delivered, -22.9300, -43.1765, carlos,
                createRoute("RJ", "Rio de Janeiro", "Flamengo", "Praia do Flamengo", 200, -22.9300, -43.1765,
                        "RJ", "Rio de Janeiro", "Catete", "Rua do Catete", 150, -22.9259, -43.1770), 0.2);

        // Exemplo 11: Ilha do Governador -> Bonsucesso
        createAndSaveDelivery("Componentes PC", DeliveryStatus.pending, -22.8122, -43.2105, alfredo,
                createRoute("RJ", "Rio de Janeiro", "Ilha", "Estrada do Galeão", 1000, -22.8122, -43.2105,
                        "RJ", "Rio de Janeiro", "Bonsucesso", "Rua Uranos", 500, -22.8631, -43.2541), 1.8);

        // Exemplo 12: Grajaú -> Vila Isabel
        createAndSaveDelivery("Instrumento Musical", DeliveryStatus.in_transit, -22.9185, -43.2599, carlos,
                createRoute("RJ", "Rio de Janeiro", "Grajaú", "Rua Uberaba", 15, -22.9185, -43.2599,
                        "RJ", "Rio de Janeiro", "Vila Isabel", "Boulevard 28 de Setembro", 100, -22.9161, -43.2428), 6.7);

        System.out.println("Base de dados populada com sucesso com 12 entregas!");
    }

    // --- MÉTODOS AUXILIARES ---

    private Driver createDriver(String name, String phone) {
        Driver driver = new Driver();
        driver.setName(name);
        driver.setPhoneNumber(phone);
        return driver;
    }

    private Route createRoute(String oState, String oCity, String oNeigh, String oStreet, int oNum, double oLat, double oLon,
                              String dState, String dCity, String dNeigh, String dStreet, int dNum, double dLat, double dLon) {
        Address origin = new Address();
        origin.setState(oState); origin.setCity(oCity); origin.setNeighborhood(oNeigh);
        origin.setStreet(oStreet); origin.setNumber(oNum); origin.setLatitude(oLat); origin.setLongitude(oLon);

        Address destiny = new Address();
        destiny.setState(dState); destiny.setCity(dCity); destiny.setNeighborhood(dNeigh);
        destiny.setStreet(dStreet); destiny.setNumber(dNum); destiny.setLatitude(dLat); destiny.setLongitude(dLon);

        Route route = new Route();
        route.setOrigin(origin);
        route.setDestiny(destiny);
        return route;
    }

    private void createAndSaveDelivery(String desc, DeliveryStatus status, double curLat, double curLon, Driver driver, Route route, double weight) {
        Pack pack = new Pack();
        pack.setWeight(weight);

        Delivery d = new Delivery();
        d.setDescription(desc);
        d.setStatus(status);
        d.setCurrentLat(curLat);
        d.setCurrentLon(curLon);
        d.setDriver(driver);
        d.setRoute(route);
        d.setPack(pack);
        deliveryRepository.save(d);
    }
}