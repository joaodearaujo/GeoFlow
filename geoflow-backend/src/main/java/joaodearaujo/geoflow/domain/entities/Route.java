package joaodearaujo.geoflow.domain.entities;

import jakarta.persistence.*;
import lombok.Data;


@Embeddable
@Data
public class Route {

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "state", column = @Column(name = "origin_state")),
            @AttributeOverride(name = "city", column = @Column(name = "origin_city")),
            @AttributeOverride(name = "neighborhood", column = @Column(name = "origin_neighborhood")),
            @AttributeOverride(name = "street", column = @Column(name = "origin_street")),
            @AttributeOverride(name = "number", column = @Column(name = "origin_number")),
            @AttributeOverride(name = "latitude", column = @Column(name = "origin_lat")),
            @AttributeOverride(name = "longitude", column = @Column(name = "origin_long"))
    })
    private Address origin; // Ou Address origin, dependendo de como nomeou

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "state", column = @Column(name = "dest_state")),
            @AttributeOverride(name = "city", column = @Column(name = "dest_city")),
            @AttributeOverride(name = "neighborhood", column = @Column(name = "dest_neighborhood")),
            @AttributeOverride(name = "street", column = @Column(name = "dest_street")),
            @AttributeOverride(name = "number", column = @Column(name = "dest_number")),
            @AttributeOverride(name = "latitude", column = @Column(name = "dest_lat")),
            @AttributeOverride(name = "longitude", column = @Column(name = "dest_long"))
    })
    private Address destiny; // Ou Address destiny
}