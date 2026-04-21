package joaodearaujo.geoflow.services;

import joaodearaujo.geoflow.domain.entities.Delivery;
import joaodearaujo.geoflow.domain.enums.DeliveryStatus;
import joaodearaujo.geoflow.repositories.DeliveryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DeliveryService {

    private final DeliveryRepository deliveryRepository;

    @Scheduled(fixedRate = 5000)
    public void simulateMovement() {
        List<Delivery> activeDeliveries = deliveryRepository.findAll();

        for (Delivery delivery : activeDeliveries) {
            if (delivery.getStatus() == DeliveryStatus.IN_TRANSIT) {
                delivery.setCurrentLat(delivery.getCurrentLat() + 0.001);
                delivery.setCurrentLon(delivery.getCurrentLon() + 0.001);

                deliveryRepository.save(delivery);
                System.out.println("Entrega " + delivery.getId() + " moveu-se para: " + delivery.getCurrentLat());
            }
        }
    }
}

