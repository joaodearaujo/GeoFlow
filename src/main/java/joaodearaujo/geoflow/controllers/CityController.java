package joaodearaujo.geoflow.controllers;

import joaodearaujo.geoflow.domain.entities.City;
import joaodearaujo.geoflow.services.CityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cities")
@CrossOrigin("*")
public class CityController {

    private final CityService cityService;

    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public List<City> getAll() {
        return cityService.listAll();
    }
}