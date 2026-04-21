package joaodearaujo.geoflow.repositories;

import joaodearaujo.geoflow.domain.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
