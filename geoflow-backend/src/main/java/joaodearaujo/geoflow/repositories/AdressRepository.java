package joaodearaujo.geoflow.repositories;

import joaodearaujo.geoflow.domain.entities.Adress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdressRepository extends JpaRepository<Adress, Long> {
}
