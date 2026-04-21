package joaodearaujo.geoflow.controllers;

import joaodearaujo.geoflow.domain.entities.Delivery;
import joaodearaujo.geoflow.repositories.DeliveryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
@CrossOrigin("*")
@RequiredArgsConstructor
public class DeliveryController {

    private final DeliveryRepository deliveryRepository;

    @GetMapping
    public List<Delivery> getAll() {
        return deliveryRepository.findAll();
    }
}