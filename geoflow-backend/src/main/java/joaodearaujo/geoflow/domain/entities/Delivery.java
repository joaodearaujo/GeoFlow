package joaodearaujo.geoflow.domain.entities;

import jakarta.persistence.*;
import joaodearaujo.geoflow.domain.enums.DeliveryStatus;
import lombok.Data;

@Entity
@Data
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;

    private Double currentLat;
    private Double currentLon;

    @ManyToOne
    @JoinColumn(name = "origin_id")
    private Origin origin;

    @ManyToOne
    @JoinColumn(name = "destiny_id")
    private Destiny destiny;

    @OneToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;

    @OneToOne
    @JoinColumn(name = "package_id")
    private Package aPackage;
}
