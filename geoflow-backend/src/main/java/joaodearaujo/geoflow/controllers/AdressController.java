package joaodearaujo.geoflow.controllers;

import joaodearaujo.geoflow.domain.entities.City;
import joaodearaujo.geoflow.services.CityService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Adress")
@CrossOrigin("*")
public class AdressController {

    private final CityService cityService;

    public AdressController(AdressService cityService) {
        this.cityService = cityService;
    }

    @GetMapping
    public List<City> getAll() {
        return cityService.listAll();
    }
}