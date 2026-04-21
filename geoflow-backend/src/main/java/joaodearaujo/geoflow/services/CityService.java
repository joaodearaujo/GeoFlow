package joaodearaujo.geoflow.services;
import joaodearaujo.geoflow.domain.entities.City;
import joaodearaujo.geoflow.repositories.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;

    public List<City> listAll() {
        return cityRepository.findAll();
    }
}