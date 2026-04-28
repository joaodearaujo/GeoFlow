package joaodearaujo.geoflow.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    private String state;
    private String city;
    private String neighborhood;
    private String street;
    private Integer number;
    private Double latitude;
    private Double longitude;
}