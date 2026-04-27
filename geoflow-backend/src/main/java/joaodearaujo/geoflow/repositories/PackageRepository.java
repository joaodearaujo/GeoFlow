package joaodearaujo.geoflow.repositories;

import joaodearaujo.geoflow.domain.entities.Package;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PackageRepository extends JpaRepository<Package, Long> {
}
