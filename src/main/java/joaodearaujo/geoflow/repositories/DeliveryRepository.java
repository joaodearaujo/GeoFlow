package joaodearaujo.geoflow.repositories;

import joaodearaujo.geoflow.domain.entities.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeliveryRepository extends JpaRepository<Delivery, Long> {
}
