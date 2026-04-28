package joaodearaujo.geoflow.services;
import joaodearaujo.geoflow.domain.entities.Route;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RouteService {

    public Integer calcularEstimateTime() {
        return 45;
    }

    public void validateRoute() {

    }
}