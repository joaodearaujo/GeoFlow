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
    private DeliveryStatus status; //

    private Double currentLat;
    private Double currentLon;

    @Embedded
    private Route route; // A rota agora é parte da tabela Delivery

    @Embedded
    private Pack pack; // O pacote também é embutido

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver; //
}
